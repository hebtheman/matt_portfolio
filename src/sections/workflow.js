/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid, Box, Heading, Text } from 'theme-ui';
import SectionHeader from 'components/section-header';

import PatternBG from 'assets/patternBG.png';
import ArrowOdd from 'assets/arrowOdd.svg';
import ArrowEven from 'assets/arrowEven.svg';

const data = [
  {
    id: 1,
    title: 'Design Sketches',
    text:
      'I always like to grab a pencil or marker and start getting designs on to paper first. ',
  },
  {
    id: 2,
    title: 'User Flow',
    text:
      'Putting together a user flow helps me to envision what needs to be built in the wireframe, I often revisit user flows and make adjustments as I need to.',
  },
  {
    id: 3,
    title: 'Site Map',
    text:
      'Site maps are great for getting an overall picture of a product, having user flows already done is a great help here.',
  },
  {
    id: 4,
    title: 'Wireframe & Prototype',
    text:
      'This is where the proverbial meat gets added to the bones. Wireframes are a useful start, then prototypes can bring a product to life.',
  },
];

export default function WorkFlow() {
  return (
    <section id="work flow" sx={styles.workflow}>
      <Container>
      <SectionHeader
        slogan="My Work flow"
        title="How I Get The Job Done"
        isWhite={true}
      />
      <Grid sx={styles.grid}>
        {data.map((item) => 
          <Box sx={styles.card} key={item.id}>
            <Box sx={styles.iconBox}>{`0${item.id}`}</Box>
            <Box sx={styles.wrapper}>
              <Heading sx={styles.wrapper.title}>{item.title}</Heading>
              <Text sx={styles.wrapper.subtitle}>{item.text}</Text>
            </Box>
          </Box>
        )}
      </Grid>
    </Container>
    </section>

  );
}

const styles = {
  workflow: {
    backgroundColor: 'primary',
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    position: 'relative',
    py: [8, null, 9, null, null, 10],
  },
  grid: {
    mb: -1,
    pt: 0,
    gridGap: [
      '35px 0',
      null,
      '45px 30px',
      null,
      '50px 25px',
      null,
      null,
      '50px 65px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    textAlign: ['center', null, 'left'],
    width: ['100%', '80%', '100%'],
    mx: ['auto'],
    px: [4, null, null, 0],
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      left: [0, null, null, null, null, 72, null, 90],
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'center center',
      width: 215,
      height: 60,
      '@media screen and (max-width:1220px)': {
        display: 'none',
      },
    },
    '&:nth-of-type(2n-1)::before': {
      backgroundImage: `url(${ArrowOdd})`,
    },
    '&:nth-of-type(2n)::before': {
      backgroundImage: `url(${ArrowEven})`,
      top: 17,
    },
    '&:last-child::before': {
      display: 'none',
    },
  },

  iconBox: {
    width: ['50px', null, '60px', null, null, '70px'],
    height: ['50px', null, '60px', null, null, '70px'],
    flexShrink: 0,
    borderRadius: [15, null, 23, null, null, 30],
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    mb: [5, null, null, null, null, 6],
    mx: ['auto', null, 0],
    fontSize: [6, null, 7, null, null, '30px'],
    fontWeight: 700,
    justifyContent: 'center',
    color: '#234582',
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: [3, null, 4, null, null, 5],
      color: 'white',
      lineHeight: [1.4, null, null, null, null, 1.55],
      pr: [0, null, null, null, null, 2],
      mb: [2, 3],
    },

    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, null, 1.9, 2],
      color: 'white',
      opacity: 0.75,
      pr: [0, null, null, null, null, 5],
    },
  },
};
