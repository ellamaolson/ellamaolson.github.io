'use client';
import ArticleIcon from '@mui/icons-material/Article';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import XIcon from '@mui/icons-material/X';
import babyAlpacaImage from '../../public/holding-baby-alpaca.jpeg';
import inkanRuinsImage from '../../public/pisac-ruins.jpeg';
import sequoiaImage from '../../public/sequoia.jpeg';
import lisbonImage from '../../public/lisbon.jpeg';
import eatingImage from '../../public/eating-sm.jpeg';
import elanaEliImage from '../../public/elana-eli.jpeg';
import { LoadableImage } from './components/LoadableImage';

export default function Home() {
  return (
    <>
      <Typography variant="h1">Hiya, I&apos;m Elana</Typography>
      <Typography variant="body1" gutterBottom sx={{ marginBottom: '16px' }}>
        I&apos;m a developer with a curiosity for streamlining how engineers engage with their core
        tooling and products. Problem solving and navigating rabbit holes is my specialty, but
        documenting and teaching my learnings to others is what I&apos;m most excited about. I want
        to make hard concepts simpler to understand, create communities that foster support and
        growth, and continue to improve how we build technology.
      </Typography>
      <Typography variant="body1">
        Outside of the office ~ I chase the sun, dabble in a few art forms, and surround myself with
        incredibly loving human beings. I love to travel and am ALWAYS excited to give travel recs.
      </Typography>
      <div className="columns-2 sm:columns-3 gap-4 my-8">
        <div className="relative h-40 mb-4">
          <LoadableImage
            alt="Me holding a baby alpaca in Peru"
            src={babyAlpacaImage}
            className="w-full h-full"
            priority={true}
          />
        </div>
        <div className="relative h-80 mb-4 sm:mb-0">
          <LoadableImage
            alt="Me enjoying the winds whipping through the mountains in the Inkan ruins of Pisac, Peru"
            src={inkanRuinsImage}
            className="w-full h-full"
            objectPosition="center"
            priority={true}
          />
        </div>
        <div className="relative h-40 sm:h-80 sm:mb-4">
          <LoadableImage
            alt="Me standing under a Sequoia tree"
            src={sequoiaImage}
            className="w-full h-full"
            objectPosition="top center"
            priority={true}
          />
        </div>
        <div className="relative h-40 mb-4 sm:mb-0">
          <LoadableImage
            alt="Glacier point in Yosemite Valley"
            src={elanaEliImage}
            className="w-full h-full"
            priority={true}
          />
        </div>
        <div className="relative h-40 mb-4">
          <LoadableImage
            alt="Me and Mathilda doing cartwheels on the beach"
            src={eatingImage}
            className="w-full h-full"
            priority={true}
          />
        </div>
        <div className="relative h-80">
          <LoadableImage
            alt="Me in the old town of Lisbon, Portugal"
            src={lisbonImage}
            className="w-full h-full"
            priority={true}
          />
        </div>
      </div>

      <Typography variant="h2" gutterBottom>
        What am I focussing on right now?
      </Typography>
      <List sx={{ listStyleType: 'none', listStylePosition: 'inside', marginBottom: '32px' }}>
        <ListItem sx={{ display: 'list-item', pl: '0px', pr: '0px' }}>
          <strong>Building a supportive community for women</strong>
          <List sx={{ listStyleType: 'circle', listStylePosition: 'inside' }}>
            <ListItem sx={{ display: 'list-item' }}>
              I co-lead a women&apos;s group with my good friend AliSan Diego, fostering emotional
              support and growth through biweekly workshops on topics like financial literacy,
              non-violent communication, and anatomy. We encourage our participants to take an
              active role in the discussions and leading workshops their passionate about.
            </ListItem>
          </List>
        </ListItem>
        <ListItem sx={{ display: 'list-item', pl: '0px', pr: '0px' }}>
          <strong>Doing lots of art projects</strong>
          <List sx={{ listStyleType: 'circle', listStylePosition: 'inside' }}>
            <ListItem sx={{ display: 'list-item' }}>
              I travel with a small watercolor kit to capture scenes and embrace the present moment
              a bit more colorfully. At home I&apos;m working on a temperature blanket (the size of
              my bed) mapping daily high temperatures to yarn colors.
            </ListItem>
          </List>
        </ListItem>
        <ListItem sx={{ display: 'list-item', pl: '0px', pr: '0px' }}>
          <strong>Learning about health, relational dynamics, and morality</strong> - here&apos;s
          some recs
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
