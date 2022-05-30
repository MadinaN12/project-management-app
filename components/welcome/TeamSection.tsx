import { Avatar, Grid, Stack, Typography, Link } from '@mui/material';
import { teamMembers } from '../../data/teamMembers';
import { team } from '../../styles/welcome/styledTeam';

export const TeamSection = () => {
  return (
    <>
      <Typography variant="h4" sx={team.title} gutterBottom component="div">
        Our team
      </Typography>
      <Stack direction="row" spacing={6}>
        {teamMembers.map((member) => (
          <Grid
            key={member.id}
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Avatar alt={member.name} src={member.avatar} sx={team.avtar} />
            <Typography variant="h6" gutterBottom component="div">
              {member.name}
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
              {member.role}
            </Typography>
            <Link href={member.gitLink} sx={{ textDecoration: 'none' }}>
              {member.github}
            </Link>
            <Typography variant="body1" sx={team.text} gutterBottom>
              {member.responsibility}
            </Typography>
          </Grid>
        ))}
      </Stack>
    </>
  );
};
