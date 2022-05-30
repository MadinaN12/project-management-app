import { Avatar, Grid, Stack, Typography, Link } from '@mui/material';
import { teamMembers } from '../../data/teamMembers';
import { useRouter } from 'next/router';
import { team } from '../../styles/welcome/styledTeam';
import { en } from '../../public/locales/en/common';
import { ru } from '../../public/locales/ru/common';

export const TeamSection = () => {
  const router = useRouter();
  const t = router.locale === 'en' ? en : ru;

  return (
    <>
      <Typography variant="h4" sx={team.title} gutterBottom component="div">
        {t.welcome.team}
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
              {t.welcome.teamMembers[member.id].name}
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
              {t.welcome.teamMembers[member.id].role}
            </Typography>
            <Link href={member.gitLink} sx={{ textDecoration: 'none' }}>
              {t.welcome.teamMembers[member.id].github}
            </Link>
            <Typography variant="body1" sx={team.text} gutterBottom>
              {t.welcome.teamMembers[member.id].responsibility}
            </Typography>
          </Grid>
        ))}
      </Stack>
    </>
  );
};
