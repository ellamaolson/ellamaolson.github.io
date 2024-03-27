import { Fragment } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
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
      <Typography variant="h5" gutterBottom>
        one might call this a resume
      </Typography>
      <List sx={{ width: '100%' }}>
        {workList.map((work, index) => {
          const showDivider = index !== workList.length - 1;

          const startDate = formatDate(work.startDate);
          const endDate = work.endDate ? formatDate(work.endDate) : 'Present';

          return (
            <Fragment key={index}>
              <ListItem alignItems="flex-start" sx={{ paddingLeft: '0px' }}>
                <ListItemText
                  primary={<Typography variant="h6">{work.company}</Typography>}
                  secondary={
                    <Fragment>
                      <Typography variant="subtitle1">{work.title}</Typography>
                      <Typography variant="subtitle2" gutterBottom>
                        {startDate + ' - ' + endDate}
                      </Typography>
                      <Typography variant="body2" sx={{ margin: '10px 0 10px 0' }}>
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
                    </Fragment>
                  }
                />
              </ListItem>
              {showDivider && <Divider variant="fullWidth" component="li" />}
            </Fragment>
          );
        })}
      </List>
    </>
  );
}
