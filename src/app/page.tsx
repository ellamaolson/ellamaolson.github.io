'use client';
import { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
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
      <Typography variant="h5" gutterBottom>
        hiya, my name is Elana
      </Typography>
      <Typography paragraph variant="body1" sx={{ marginTop: '22px' }}>
        I&apos;m a sunshine chasing, wave tumbling, watercolor painting, yoga pretzeling,
        relationship enriching, coder who is passionate about learning, problem solving, and making
        hard concepts easier to understand for others.
      </Typography>
      <Typography paragraph variant="body1">
        I strike a balance between my analytical side and a more creative and outdoorsy side through
        painting, reading, crochet, journaling, swimming, rock climbing, hiking, camping, and
        hanging out with people that fill my cup.
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
      <Typography variant="subtitle1">Let&apos;s connect</Typography>
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
