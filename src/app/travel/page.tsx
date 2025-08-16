'use client';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import { LoadableImage } from '../components/LoadableImage';
import travelData from './travel.json';

export default function Travel() {
  return (
    <>
      <Typography variant="h1" gutterBottom>
        Where have I traveled?
      </Typography>

      <Typography variant="body1" gutterBottom sx={{ marginBottom: '16px' }}>
        I&apos;ve been fortunate to explore some incredible places around the world, gathering life
        long memories and cultivating a growing appetite for exploring the world. Here is a map of
        everywhere I&apos;ve been and my standout and maybe lesser known travel recommendations.
      </Typography>

      <Box
        sx={{
          height: { xs: '250px', sm: '300px', md: '400px' },
          marginBottom: '32px',
        }}
      >
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1O4lQBSS7ygiYY_ScyoSq9uivBS4iPaA&ehbc=2E312F"
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: '16px' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, marginBottom: '32px' }}>
        {travelData?.destinations?.map((destination, index) => (
          <Card
            key={index}
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.08)',
              borderRadius: '16px',
            }}
          >
            <Box
              sx={{
                width: { xs: '100%', md: '250px' },
                height: { xs: '180px', md: '350px' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '12px',
              }}
            >
              <LoadableImage
                alt={destination?.altText || ''}
                src={destination?.image || ''}
                className="w-full h-full object-cover rounded-lg"
                priority={index < 2}
              />
            </Box>
            <CardContent sx={{ flex: 1, maxHeight: '350px', overflow: 'hidden' }}>
              <Typography variant="h2" gutterBottom>
                {destination?.city}, {destination?.country} {destination?.emoji || ''}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                {destination?.location}
              </Typography>
              <Typography variant="body1" paragraph>
                {destination?.description}
              </Typography>

              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{
                  marginTop: 2,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                Highlights
              </Typography>
              <List sx={{ listStyleType: 'disc', pl: 2, mb: 2 }}>
                {destination?.highlights?.map((highlight, highlightIndex) => (
                  <ListItem key={highlightIndex} sx={{ display: 'list-item', pl: 0 }}>
                    <Typography variant="body2">{highlight}</Typography>
                  </ListItem>
                ))}
              </List>

              <Typography variant="h6" gutterBottom>
                My Recommendations
              </Typography>
              <List sx={{ listStyleType: 'disc', pl: 2 }}>
                {destination.recommendations.map((recommendation, recIndex) => (
                  <ListItem key={recIndex} sx={{ display: 'list-item', pl: 0 }}>
                    <Typography variant="body2">{recommendation}</Typography>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  );
}
