'use client';
import { useState, useEffect } from 'react';
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { LoadableImage } from '../components/LoadableImage';
import travelData from './travel.json';

export default function Travel() {
  const [mapLoading, setMapLoading] = useState(true);

  // Preload destination images when component mounts
  useEffect(() => {
    travelData?.destinations?.forEach((destination) => {
      if (destination.image) {
        const img = new Image();
        img.src = destination.image;
      }
    });
  }, []);

  // Fallback timeout to hide map loading state after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setMapLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleIframeLoad = () => {
    setMapLoading(false);
  };

  return (
    <>
      <Typography variant="h1" gutterBottom>
        Where have I traveled?
      </Typography>

      <Typography variant="body1" gutterBottom className="mb-4">
        I&apos;ve been fortunate to explore some incredible places around the world, gathering life
        long memories and cultivating a growing appetite for exploring the world. Here is a map of
        everywhere I&apos;ve been and my standout and maybe lesser known travel recommendations.
      </Typography>

      <Box className="relative flex items-center justify-center mb-8 mt-8 bg-white/5 border border-white/10 rounded-2xl h-64 sm:h-80 md:h-96">
        {mapLoading && (
          <Box className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-2xl z-10">
            <CircularProgress size={40} />
          </Box>
        )}
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1O4lQBSS7ygiYY_ScyoSq9uivBS4iPaA&ehbc=2E312F"
          width="100%"
          height="100%"
          className="border-0 rounded-2xl"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={() => setMapLoading(false)}
        />
      </Box>

      <Box className="flex flex-col gap-8 mb-8">
        {travelData?.destinations?.map((destination, index) => (
          <Card
            key={index}
            className="flex flex-col md:flex-row bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl rounded-2xl overflow-hidden"
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.08)',
              borderRadius: '16px',
            }}
          >
            <Box className="w-full md:w-64 h-48 md:h-80 flex items-center justify-center p-3">
              <LoadableImage
                alt={destination?.altText || ''}
                src={destination?.image || ''}
                className="w-full h-full object-cover rounded-lg"
                priority={index < 2}
              />
            </Box>
            <CardContent className="flex-1 max-h-80 overflow-hidden">
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
                className="mt-4 font-bold uppercase tracking-wider"
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
