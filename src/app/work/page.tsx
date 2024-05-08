import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
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
      <Box sx={{ width: '100%' }}>
        <Stack
          direction={'column'}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          divider={<Divider orientation="horizontal" flexItem />}
          sx={{ paddingLeft: '0px', alignItems: 'flex-start' }}
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
              </div>
            );
          })}
        </Stack>
      </Box>
    </>
  );
}
