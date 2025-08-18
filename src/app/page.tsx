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
        making hard concepts simpler to understand for others is what I&apos;m most excited about.
      </Typography>
      <Typography variant="body1">
        Outside of the office ~ I chase the sun, dabble in a few art forms, surround myself with
        loving human beings, and love to travel!
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
            alt="My brother Eli and I at Yosemite National Park"
            src={elanaEliImage}
            className="w-full h-full"
            priority={true}
          />
        </div>
        <div className="relative h-40 mb-4">
          <LoadableImage
            alt="Eating doner kebab - yum!"
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
              I co-lead a local women&apos;s group in San Diego with my good friend Ali. For the
              past two years we have led workshops on topics ranging from financial literacy to
              feminism to modern women&apos;s health science. We facilitate a space to learn,
              support, and grow together as a community - reflecting on diverse perspectives and
              leading with curiosity first.
            </ListItem>
          </List>
        </ListItem>
        <ListItem sx={{ display: 'list-item', pl: '0px', pr: '0px' }}>
          <strong>Doing lots of art projects</strong>
          <List sx={{ listStyleType: 'circle', listStylePosition: 'inside' }}>
            <ListItem sx={{ display: 'list-item' }}>
              Love to watercolor and tend to travel with a small kit to capture scenes and embrace
              the present moment a bit more colorfully. At home I&apos;m working on a temperature
              blanket (the size of my bed) mapping daily high temperatures to yarn colors.
            </ListItem>
          </List>
        </ListItem>
        <ListItem sx={{ display: 'list-item', pl: '0px', pr: '0px' }}>
          <strong>
            Learning about health, relational dynamics, morality, and the occasional fantasy series
          </strong>{' '}
          - here&apos;s some recs
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
            <ListItem sx={{ display: 'list-item' }}>
              <i>Throne of Glass series</i> - Sarah J. Maas creates this vivid and dynamic world
              with magic, strong heorines, and complex series-long plot arcs that reveal kingdom
              conspiracies and demand a balance of fighting for survival and sacraficing for the
              greater good.
            </ListItem>
          </List>
        </ListItem>
      </List>
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
