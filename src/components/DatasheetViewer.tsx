import { Card, CardContent, CardHeader, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Chip } from '@mui/material';
import { type DatasheetData, type DatasheetType } from '../data/sampleDatasheets';
import '../styles/DatasheetViewer.scss';

const sourceColors: Record<DatasheetType, 'default' | 'green' | 'red'> = {
  official: 'default',
  community: 'green',
  inherited: 'red',
};

export const DatasheetViewer = ({ title, description, revision, data }: DatasheetData) => {
  console.log(title, revision);
  return (
    <Card className="datasheet-card">
      <CardHeader
        title={title}
        subheader={description}
        action={<Chip label={`Revision ${revision}`} variant="outlined" />}
        className="datasheet-header"
      />
      <CardContent className="datasheet-content">
        <Box className="datasheet-section">
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
                {data.stats?.map((stat: any, idx: number) => (
                  <TableRow key={idx}>
                    <TableCell>{stat.m}</TableCell>
                    <TableCell>{stat.t}</TableCell>
                    <TableCell>{stat.sv}</TableCell>
                    <TableCell>{stat.w}</TableCell>
                    <TableCell>{stat.ld}</TableCell>
                    <TableCell>{stat.oc}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        {data.rangedWeapons && data.rangedWeapons.length > 0 && (
          <Box className="datasheet-section">
            <TableContainer>
              <Table size="small" className="weapons-table">
                <TableHead>
                  <TableRow>
                    <TableCell>Ranged Weapons</TableCell>
                    <TableCell>Range</TableCell>
                    <TableCell>A</TableCell>
                    <TableCell>BS</TableCell>
                    <TableCell>S</TableCell>
                    <TableCell>AP</TableCell>
                    <TableCell>D</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.rangedWeapons.map((weapon: any, idx: number) => (
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

        {data.meleeWeapons && data.meleeWeapons.length > 0 && (
          <Box className="datasheet-section">
            <TableContainer>
              <Table size="small" className="weapons-table">
                <TableHead>
                  <TableRow>
                    <TableCell>Melee Weapons</TableCell>
                    <TableCell>Range</TableCell>
                    <TableCell>A</TableCell>
                    <TableCell>WS</TableCell>
                    <TableCell>S</TableCell>
                    <TableCell>AP</TableCell>
                    <TableCell>D</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.meleeWeapons.map((weapon: any, idx: number) => (
                    <TableRow key={idx}>
                      <TableCell>{weapon.name}</TableCell>
                      <TableCell>{weapon.range}</TableCell>
                      <TableCell>{weapon.attacks}</TableCell>
                      <TableCell>{weapon.ws}</TableCell>
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
          <Typography variant="body1" className="footer-text">
            <strong>Keywords:</strong> {data.keywords?.join(', ')}
          </Typography>
          <Typography variant="body1" className="footer-text">
            <strong>Points:</strong> {data.points}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
