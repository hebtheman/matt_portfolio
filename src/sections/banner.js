/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Image, Button } from 'theme-ui';
import TravelApp from 'assets/travelApp2.png'
import ShapeLeft from 'assets/shape-left.png';
import ShapeRight from 'assets/shape-right.png';

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variatnt="heroPrimary" sx={styles.h1}>
            Experienced UX/UI Designer and Web Developer
          </Heading>
          <Text as='p' variant="heroSecondary">
              Passionate about both Design and Development, I love making websites and applications that are as visually pleasing as they are functional. 
          </Text>
          <a href="/downloads/Matthew_Earley_CV.pdf" download><Button variant="primary">Download My CV</Button></a>
        </Box>
        <Box sx={styles.banner.imageBox}>
          <Image src={TravelApp} sx={styles.banner.bannerImg} alt='banner'/>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    '&::before': {
      position: 'absolute',
      content: '""',
      bottom: 6,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${ShapeLeft})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom left',
      backgroundSize: '36%',
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: '40px',
      right: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${ShapeRight})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom right',
      backgroundSize: '32%',
    },
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    contentBox: {
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline-flex',
      mb: [0, null, -6, null, null, '-40px', null, -3],
      img: {
        position: 'relative',
        height: [245, 'auto'],
      },
    },
    bannerImg: {
      borderRadius: '20px',
      boxShadow: [
       '0 0 8px rgba(0, 0, 0, 0.125)',
       '0 0 16px rgba(0, 0, 0, 0.125)',
    ]
    },
  },
  h1: {
    fontSize: '40px',
    paddingBottom: '10px'
  }
};

