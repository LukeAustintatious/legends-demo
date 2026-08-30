# Legends Never Die

An unofficial, community driven rules repository for keeping Warhammer Legends units updated and playable.

**Think GitHub for Warhammer Legends datasheets.** The site hosts structured, version-controlled datasheets for Legends units. On a companion Discord Server, someone can propose a specific change, "*reduce this unit by 20 points*", the community discusses and votes on it, and if approved it becomes the next revision. You get complete history, diffs, attribution and rollback, rather than a wiki where someone just silently changes a number.
Underneath that, the datasheets are schema-driven, so we're building a rules engine/database rather than a hard-coded 40K website. That means it could eventually support new editions or even other games.

## About

Games Workshop's Legends rules allow discontinued units to remain playable, but they're no longer actively balanced. The project would provide a structured database of those units and let the community collaboratively maintain them for the current edition.

Each unit would have a versioned datasheet, with a GitHub-like history of changes. Users could propose specific balance changes, discuss and vote on them, and—once approved—have those changes published as a new community revision. Every change would be transparent, attributable, and reversible.

Technically, the system would be **schema-driven rather than hard-coded around 40K**. A stat-block schema defines what a particular game's edition and unit type looks like, allowing the same platform to potentially support future editions or even other tabletop games without redesigning the database.

The website would distinguish between community-editable rules and externally sourced or inherited rules—for example, a weapon profile shared with a currently supported unit could be displayed but locked against community modification. Datasheet comparisons and revision histories could automatically highlight changed, added, removed, or otherwise significant values.

Initially, Discord would provide the community discussion and moderation layer, while the website acts as the authoritative, version-controlled rules database. Over time, Discord integration could automate proposals, voting and notifications.

**The goal isn't to replace Games Workshop's rules. It's to create a transparent community process for keeping Legends playable and reasonably balanced as the game evolves.**

### Considerations

How do you make potentially hundreds of people collaboratively decide whether a unit is balanced without the project becoming a popularity contest or a perpetual argument?

## Proposed Architecture

Below is what would be needed for a minimal MVP demo.

[![Architecture Diagram](https://drive.google.com/file/d/1mqIh4k4pvdGgXBmUtBn-JwzPO_t4b9tq/view?usp=drive_link "Architecture Diagram")](https://drive.google.com/file/d/1mqIh4k4pvdGgXBmUtBn-JwzPO_t4b9tq/view?usp=drive_link "Architecture Diagram")

## Database Structure

The plan is to use structured data rather than storing text or images. The data we will need to store is highly relational, so PostgreSQL should work well. For example:

	Game
	├── Warhammer 40,000
	│	├── 10th Edition
	│	│	├── Infantry Datasheet Schema
	│	│	│		└── Unit
	│	│	│				└── Revision
	│	│	│						└── Datasheet
	│	│	│
	│	│	└── Vehicle Datasheet Schema
	│	│			└── ...
	│	│
	│	└── 11th Edition
	│			└── ...
	│
	└── Kill Team
			└── ...

Datasheets are fairly complex, and vary between games and editions. Keeping datasheet schemas as separated from the unit data gives us more flexibility in the long run, and allows for schema versioning and migration. Getting the data structure right will probably be one of the hardest parts of the project - as we want to ensure it is extensible. Currently, datasheets include:

- profiles
- multiple weapon profiles
- weapon abilities
- keywords
- faction keywords
- unit composition
- wargear options
- abilities
- leader relationships
- transport rules
- points
- unit restrictions
- special rules
- formatting
- edition-specific mechanics

Some of these we can keep simple. We do not need to provide information on things like weapon abilities and faction keywords, as these will likely be live rules that players will need to access from official sources.

Conceptually, a simple 40k schema might look like:

```json
    {
      "name": "40k-10e-unit",
      "sections": [
        {
          "type": "model_profile",
          "name": "Unit Profile",
          "fields": [
            { "key": "M", "type": "distance" },
            { "key": "T", "type": "integer" },
            { "key": "SV", "type": "save" },
            { "key": "W", "type": "integer" },
            { "key": "LD", "type": "integer" },
            { "key": "OC", "type": "integer" }
          ]
        },
        {
          "type": "weapon_profile",
          "name": "Weapons",
          "fields": [
            { "key": "range", "type": "distance" },
            { "key": "A", "type": "integer_or_special" },
            { "key": "BS", "type": "skill" },
            { "key": "S", "type": "integer" },
            { "key": "AP", "type": "integer" },
            { "key": "D", "type": "damage" }
          ]
        }
      ]
    }
```

But we could potentially go further, defining each attribute schema field with its own semantic identity:

    field:
        key: "M"
        label: "Move"
        value_type: "distance"
        editable: true

The last field is important, as it enables us to use official "non-Legends" profiles within a datasheet. For example, if bolt weapons receive a universal buff in a new edition, we can apply that to all Legends units in one go, and make the field non-editable. 

This also opens up the idea that we have different sources available for revision metadata. This will be useful for the front-end to highlight sources and diffs. Some examples of sources could include:

- official (legends)
- community (modified)
- inherited (sourced from supported profile)
- calculated (derived from other values)

### Keeping Official and Community Rules Separate

This will be good UX and legal hygiene. The database will need to make it very clear what the source of the rules are. Games Workshop currently describes Legends as official rules that remain usable, while explicitly saying they won't be actively balanced going forward. These rules are freely available, so should be usable as the initial entry for Legend datasheets. However, once they are modified we need to make clear that these are community-created modifications, not Games Workshop rules.

Furthermore, we will not include any images, artwork, or direct scraping from any Games Workshop sources. Datasheets will be kept to the bare minimum stats needed for the unit to be playable. We will also include further clarification of this being a community project, such as:

> Unofficial community project. Not affiliated with or endorsed by Games Workshop. Warhammer 40,000 and associated names are trademarks of Games Workshop Ltd.

### Unit Revision

This part is key, as it will allow for a complete history of community revisions for each datasheet. And importantly, revisions will be immutable. So instead of patching a datasheet, we add a whole new revision each time a change is made. Something like:

    Dreadnought
    Revision 1
        Current Legends rules

    Revision 2
        Community update
        +1 Attack
        -10 points
        Approved 2026-09-12

    Revision 3
        Community update
        New ability
        Rejected

This pattern gives us:  
- history
- rollback
- auditing
- attribution
- comparisons
- diff - "what changed?"
- ability to revert bad changes
- ability to see what the community thought at a particular point in time

### Validation

In theory, if we get the schema right, proposal validation could become automatic. Not only would we have locked fields, but we could also have strong type validation:

    Wounds
        type: integer
        min: 1
        max: 100

    Save
        type: save
        allowed: 2+, 3+, 4+, 5+, 6+

    Movement
        type: distance
        min: 0"
        max: 100"

## The Community Workshop

Initially the plan is to rely heavily on Discord for the community workshop side of the project. This allows us to use Discord auth for the site, effectively creating a single community ecosystem shared between the two. It also avoids the need for any complex social features on the website like:
- comments
- private messages
- notifications
- moderation tooling
- reputation
- threaded discussions
- chat
- user profiles
- etc.

### Proposing Changes

Proposals will be kept separate from Revisions, and initially will be handled entirely on Discord. Initial roles (shared between the site and Discord could include:

- Admin - responsible for the server and updating the database
- Moderator - ensure discussions are respectful and proposals are valid
- Contributor - members who can freely make proposals
- Member - members who have not made proposals

If a Member wishes to make a proposal, it will need to go through moderator approval before being available for voting. Once a Member has had a proposal published, they can be upgraded to a Contributor.

A rough proposal life cycle would look like:

    PROPOSED    →  REJECTED
        ↓
    DISCUSSION  →  NEEDS REVISION  →  PROPOSED
        ↓
    VOTING
        ↓
    APPROVED
        ↓
    PUBLISHED

### Voting

This section is probably the most up for discussion. Initially we can keep it simple. Something like:

- Proposal remains open for 7 days for discussion and voting.  
- Acceptance requires 10 votes and 70% approval.  
- Moderators have final authority.

But we might also want to alter or think about:

- minimum number of votes
- minimum discussion period
- no moderator objections
- proposal must specify the exact rules change 
- proposal should contain formatting like a commit message
- proposer cannot vote on their own proposal
- separate "competitive balance" and "flavour" votes

The involvement of moderation, and the fact that contributors cannot directly edit datasheets should help mitigate some of the considerations around this being a community project, and should give us a system that is **auditable, reversible and resistant to chaos**

## API Structure

Initially this will be kept as simple as possible, with just enough functionality that the website functions as the rules repository.

    GET /api/games
    GET /api/games/:gameId/editions
    
    GET /api/schemas/:schemaId
    
    GET /api/factions
    GET /api/factions/:factionId
    
    GET /api/units
    GET /api/units/:unitId
    
    GET /api/units/:unitId/revisions
    GET /api/units/:unitId/revisions/:revisionId

In the future, we could look to move suggestions, voting, and moderation to the website. But for now these will remain on the Discord Server.

### History

We can display the revision history for a unit on the website, accessible from the unit page. This should make the project pretty unique.

    v3 — 25 Aug 2026
    │
    ├── -10 points
    ├── Ability added
    │
    v2 — 13 Aug 2026
    │
    ├── +1 attack
    │
    v1 — Official Legends rules

## Initial MVP Demo

**Build a demo app with one faction and maybe 10–20 units**.

### Stack

Frontend: Next.js / React
API: Next.js API routes initially, or a separate TypeScript backend later
Database: PostgreSQL
ORM: Drizzle or Prisma
Authentication: Auth.js with Discord.
Hosting: Vercel / Cloudflare / similar
Database hosting: Neon, Supabase, Railway, etc.
Discord: Discord bot/webhooks

### Phase 1 — Rules database

-   PostgreSQL
-   Unit/faction schema
-   Edition support
-   Unit page
-   Structured datasheet rendering
-   Basic search/filtering
-   Admin interface for entering units

### Phase 2 — Versioning

-   Unit revisions
-   Revision history
-   Diff between revisions
-   Restore/revert
-   Change attribution

### Phase 3 — Community

-   Discord authentication
-   Suggestions
-   Voting
-   Proposal discussion
-   Moderation workflow

### Phase 4 — Discord integration

-   Bot
-   Proposal notifications
-   Voting
-   Approval notifications
-   Links back to unit pages

### Phase 5 — Scale

-   More factions
-   Better search
-   Contributor roles
-   Statistics
-   Balance analytics
-   Automated edition migration tools

### Phase 6 - Stretch

- Bidirectional proposals that can be submitted on either the website or Discord.
- Migrate all social elements to site, removing need for Discord.
