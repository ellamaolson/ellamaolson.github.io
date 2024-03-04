import { Fragment } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import publicationsData from './publications.json';

export default function Publications() {
  const pubs = publicationsData?.publications;
  const sortedPubs = pubs?.sort((a, b) => {
    return Date.parse(b?.date) - Date.parse(a?.date);
  });

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {sortedPubs.map((pub, index) => {
        const showDivider = index !== sortedPubs.length - 1;
        const pubDate = new Date(pub.date).toDateString();
        const pubSite = pub.site[0].toUpperCase() + pub.site.slice(1);
        return (
          <Fragment key={index}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={pub.image} />
              </ListItemAvatar>
              <ListItemText
                sx={{ marginTop: '10px 0 10px 0' }}
                primary={
                  <Link href={pub.link} underline="hover" color="inherit">
                    {pub.title}
                  </Link>
                }
                secondary={
                  <Fragment>
                    <Typography
                      sx={{ display: 'flex', marginTop: '4px' }}
                      component="span"
                      variant="body2"
                    >
                      {pub.description}
                    </Typography>
                    <Typography
                      sx={{ display: 'flex', marginTop: '8px' }}
                      component="span"
                      variant="caption"
                    >
                      Published on {pubDate}&nbsp;{'·'}&nbsp;
                      <Link
                        href={pub.siteUrl}
                        underline="hover"
                        color="inherit"
                      >
                        {pubSite}
                      </Link>
                    </Typography>
                  </Fragment>
                }
              />
            </ListItem>
            {showDivider && <Divider variant="inset" component="li" />}
          </Fragment>
        );
      })}
    </List>
  );
}
