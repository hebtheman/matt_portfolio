/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid, Image, Link } from 'theme-ui';
import SectionHeader from 'components/section-header';

import Barber from 'assets/websites/barber.png'
import Travel from 'assets/websites/travel.png'
const data = [
  {
    id: 1,
    imgSrc: Barber,
    altText: 'Barber Shop',
    url: 'https://demo.commercial.wu-wo.com/'
  },
  {
    id: 2,
    imgSrc: Travel,
    altText: 'Travel Site',
    url: 'https://demo.travelshop.wu-wo.com/'
  },
];

export default function Sites() {
  return (
   <section id="designs" sx={{ variant: 'section.section'}} style={{paddingTop: "50px"}}>
     <Container>
       <SectionHeader
          slogan="Design Examples"
          title="Take A Look At Some Of My Web Designs"
       />
       <Grid sx={styles.grid}>
          {data.map((item, i) => (
            <Link href={item.url} key={i}>
              <Image 
                sx={styles.protoImage}
                key={item.id}
                src={item.imgSrc}
                altText={item.altText}
              />
            </Link>
          ))}
       </Grid>
     </Container>
   </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
  protoImage: {
    boxShadow: '0px 0px 1px rgba(38, 78, 118, 0.35)',
    transition: 'all 0.3s',
    borderRadius: '6px',
    bg: 'white',
    textAlign: 'left',
    '&:hover': {
      boxShadow: '0px 6px 30px rgba(38, 78, 118, 0.1)',
    },
  },
};

