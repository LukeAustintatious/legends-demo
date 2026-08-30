import { Card, CardContent, CardHeader, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Chip } from '@mui/material';
import { type DatasheetData, type DatasheetType } from '../data/sampleDatasheets';
import '../styles/DatasheetViewer.scss';

const sourceColors: Record<DatasheetType, 'default' | 'success' | 'warning'> = {
  official: 'default',
  community: 'success',
  upcoming: 'warning',
};

const sourceLabels: Record<DatasheetType, string> = {
  official: 'Official Legends',
  community: 'Community Modified',
  upcoming: 'Upcoming Release',
};

export const DatasheetViewer = ({ title, description, source, data }: DatasheetData) => {
  return (
    <Card className="datasheet-card">
      <CardHeader
        title={title}
        subheader={description}
        action={<Chip label={sourceLabels[source]} color={sourceColors[source]} variant="outlined" />}
        className="datasheet-header"
      />
      <CardContent className="datasheet-content">
        <Box className="datasheet-section">
          <Typography variant="h6" className="section-title">
            Unit Profile
          </Typography>
          <TableContainer>
            <Table size="small" className="profile-table">
              <TableHead>
                <TableRow>
                  <TableCell>M</TableCell>
                  <TableCell>T</TableCell>
                  <TableCell>SV</TableCell>
                  <TableCell>W</TableCell>
                  <TableCell>LD</TableCell>
                  <TableCell>OC</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.profiles?.map((profile: any, idx: number) => (
                  <TableRow key={idx}>
                    <TableCell>{profile.m}</TableCell>
                    <TableCell>{profile.t}</TableCell>
                    <TableCell>{profile.sv}</TableCell>
                    <TableCell>{profile.w}</TableCell>
                    <TableCell>{profile.ld}</TableCell>
                    <TableCell>{profile.oc}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        {data.weapons && data.weapons.length > 0 && (
          <Box className="datasheet-section">
            <Typography variant="h6" className="section-title">
              Weapons
            </Typography>
            <TableContainer>
              <Table size="small" className="weapons-table">
                <TableHead>
                  <TableRow>
                    <TableCell>Weapon</TableCell>
                    <TableCell>Range</TableCell>
                    <TableCell>A</TableCell>
                    <TableCell>BS</TableCell>
                    <TableCell>S</TableCell>
                    <TableCell>AP</TableCell>
                    <TableCell>D</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.weapons.map((weapon: any, idx: number) => (
                    <TableRow key={idx}>
                      <TableCell>{weapon.name}</TableCell>
                      <TableCell>{weapon.range}</TableCell>
                      <TableCell>{weapon.attacks}</TableCell>
                      <TableCell>{weapon.bs}</TableCell>
                      <TableCell>{weapon.strength}</TableCell>
                      <TableCell>{weapon.ap}</TableCell>
                      <TableCell>{weapon.damage}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )}

        {data.abilities && data.abilities.length > 0 && (
          <Box className="datasheet-section">
            <Typography variant="h6" className="section-title">
              Abilities
            </Typography>
            <Box className="abilities-list">
              {data.abilities.map((ability: any, idx: number) => (
                <Box key={idx} className="ability">
                  <Typography variant="subtitle2" className="ability-name">
                    {ability.name}
                  </Typography>
                  <Typography variant="body2" className="ability-description">
                    {ability.description}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        )}

        <Box className="datasheet-footer">
          <Typography variant="body2" className="points">
            <strong>Points:</strong> {data.points}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
