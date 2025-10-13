import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Fab from '@mui/material/Fab';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import ArticleIcon from '@mui/icons-material/Article';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';

import workData from './work.json';

export default function Work() {
  const workList = workData?.work;

  const formatDate = (date: string) => {
    const dateFormat = new Date(date);
    return dateFormat.toLocaleString('en-us', {
      year: 'numeric',
      month: 'short',
    });
  };

  return (
    <>
      <Typography variant="h1">Resume</Typography>
      <Box sx={{ width: '100%' }} className="mb-8">
        <Stack
          direction={'column'}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          divider={<Divider orientation="horizontal" flexItem />}
          sx={{ pl: '0px', alignItems: 'flex-start' }}
        >
          {workList.map((work, index) => {
            const showDivider = index !== workList.length - 1;

            const startDate = formatDate(work.startDate);
            const endDate = work.endDate ? formatDate(work.endDate) : 'Present';

            return (
              <div key={index}>
                <Typography variant="h2">{work.company}</Typography>
                <Typography variant="h3">{work.title}</Typography>
                <Typography variant="subtitle1" gutterBottom>
                  {startDate + ' - ' + endDate}
                </Typography>
                <Typography variant="body1" sx={{ margin: '10px 0 10px 0' }}>
                  {work.description}
                </Typography>
                <List sx={{ listStyleType: 'disc', listStylePosition: 'inside' }}>
                  {work.notes.map((note, index) => {
                    return (
                      <ListItem sx={{ display: 'list-item' }} key={index}>
                        {note}
                      </ListItem>
                    );
                  })}
                </List>
                {work.relavantLinks?.map((link, index) => {
                  return (
                    <Link href={link} underline="hover" color="inherit" key={index}>
                      <Typography variant="h3">{link}</Typography>
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </Stack>
      </Box>
      <Box sx={{ '& > :not(style)': { m: 1 }, display: 'flex', justifyContent: 'space-between' }}>
        <Fab aria-label="github" href="https://github.com/ellamaolson" size="small">
          <GitHubIcon />
        </Fab>
        <Fab aria-label="linkedIn" href="https://www.linkedin.com/in/elanaolson" size="small">
          <LinkedInIcon />
        </Fab>
        <Fab aria-label="Medium" href="https://medium.com/@elanaolson" size="small">
          <ArticleIcon />
        </Fab>
        <Fab aria-label="twitter" href="https://twitter.com/elanathellama" size="small">
          <XIcon />
        </Fab>
      </Box>
    </>
  );
}
