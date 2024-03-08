'use client';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import ArticleIcon from '@mui/icons-material/Article';

import Image from 'next/image';
import cafeImage from '../../public/cafe.jpeg';
import cartwheelsImage from '../../public/cartwheels.jpeg';
import babyAlpacaImage from '../../public/holding-baby-alpaca.jpeg';
import inkanRuinsImage from '../../public/pisac-ruins.jpeg';
import sequoiaImage from '../../public/sequoia.jpeg';
import yosemiteImage from '../../public/yosemite.jpeg';

export default function Home() {
  const [value, setValue] = useState(0);
  return (
    <>
      <Typography variant="h5" gutterBottom sx={{ marginBottom: '32px' }}>
        hiya, my name is Elana
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ marginBottom: '16px' }}>
        I&apos;m a sunshine chasing, wave tumbling, travel enthusiast, yogi, coder who is passionate
        about learning, problem solving, and making hard concepts easier to understand for others.
      </Typography>
      <Typography variant="body1">
        I love painting, reading, crochet, journaling, swimming, rock climbing, hiking, camping,
        spending time with people that fill my cup, and jetting off on the next adventure!
      </Typography>
      <div className="columns-2 sm:columns-3 gap-4 my-8">
        <div className="relative h-40 mb-4">
          <Image
            alt="Me holding a baby alpaca in Peru"
            src={babyAlpacaImage}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80 mb-4 sm:mb-0">
          <Image
            alt="Me enjoying the winds whipping through the mountains in the Inkan ruins of Pisac, Peru"
            src={inkanRuinsImage}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-[-16px] sm:object-center"
          />
        </div>
        <div className="relative h-40 sm:h-80 sm:mb-4">
          <Image
            alt="Me standing under a Sequoia tree"
            src={sequoiaImage}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-top sm:object-center"
          />
        </div>
        <div className="relative h-40 mb-4 sm:mb-0">
          <Image
            alt="Glacier point in Yosemite Valley"
            src={yosemiteImage}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40 mb-4">
          <Image
            alt="Me and Mathilda doing cartwheels on the beach"
            src={cartwheelsImage}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80">
          <Image
            alt="Me sitting in a cafe sipping a cappuccino"
            src={cafeImage}
            fill
            sizes="(min-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div>

      <Typography variant="h6" gutterBottom>
        what am I focussing on right now?
      </Typography>
      <List sx={{ listStyleType: 'disc', listStylePosition: 'inside', marginBottom: '32px' }}>
        <ListItem sx={{ display: 'list-item' }}>
          <strong>Womens&apos; Communities</strong> - cultivating supportive environments for women
          <List sx={{ listStyleType: 'circle', listStylePosition: 'inside' }}>
            <ListItem sx={{ display: 'list-item' }}>
              My good friend Ali and I started a womens group back in August 2023 to build a
              community of women supporting women. We strive to create an environment of enrichment,
              growth, love, and creativity for women identifying individuals locally
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              Alongside this group, we started a bookclub to read all the wonderful books being
              recommended in womens group. We read books written by or surrounding the topic of
              women.
            </ListItem>
          </List>
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <strong>Health</strong> - applying new exercise and sleeping routine protocols
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <strong>Art</strong> - going to try ceramics again soon!
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <strong>Learning</strong> - too many books and podcasts, but here&apos;s some recs
          <List sx={{ listStyleType: 'circle', listStylePosition: 'inside' }}>
            <ListItem sx={{ display: 'list-item' }}>
              <i>Huberman Labs</i> - a health and science podcast led by Andrew Huberman to bring
              scientific findings and tools to the general public
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              <i>Us: Getting Past You and Me to Build a More Loving Relationship</i> - Terrance Real
              approaches realtional dynamimcs with an &quot;us&quot; way of thinking, instead of
              handling lifes challenges from a &quot;you&quot; and &quot;me&quot; perspective
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              <i>Lying</i> - In such a little book, Sam Harris discusses the morality of lying and
              breaks down various applications and ethical dilemmas surrounding it
            </ListItem>
          </List>
        </ListItem>
      </List>
      <Box sx={{ '& > :not(style)': { m: 1 }, display: 'flex', justifyContent: 'space-between' }}>
        <Fab aria-label="github" href="https://github.com/ellamaolson" size="small">
          <GitHubIcon />
        </Fab>
        <Fab
          aria-label="linkedIn"
          href="https://www.linkedin.com/in/elana-olson-96853892/"
          size="small"
        >
          <LinkedInIcon />
        </Fab>
        <Fab aria-label="twitter" href="https://twitter.com/elanathellama" size="small">
          <XIcon />
        </Fab>
        <Fab aria-label="Medium" href="https://medium.com/@elanaolson" size="small">
          <ArticleIcon />
        </Fab>
      </Box>
    </>
  );
}
