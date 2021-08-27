/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid, Image, Link } from 'theme-ui';
import SectionHeader from 'components/section-header';

import MuayThai from 'assets/home.png'
import Lamp from 'assets/onboarding.png'
import Whisky from 'assets/wishlist.png'

const data = [
  {
    id: 1,
    imgSrc: TravelApp,
    altText: 'Travel App',
    url: 'https://www.figma.com/proto/n170rXj4PZnSEWTauun8Yh/Travel-App?scaling=scale-down&page-id=0%3A1&node-id=1%3A105'
  },
  {
    id: 2,
    imgSrc: MuayThai,
    altText: 'Muay Thai',
    url: 'https://www.figma.com/proto/RbEYt9jqLsIYbcWqzJV1xq/Muay-Thai-Store?node-id=1%3A4&scaling=scale-down&page-id=0%3A1'
  },
  {
    id: 3,
    imgSrc: Lamp,
    altText: 'Lamp',
    url: 'https://www.figma.com/proto/gcylnE2D4lDDRv1bhcJiub/Lamp-Store?node-id=1%3A48&scaling=scale-down&page-id=0%3A1'
  },
  {
    id: 4,
    imgSrc: Whisky,
    altText: 'whisky',
    url: 'https://www.figma.com/proto/GstuOPJZCRb7kGZDLj5AL8/Untitled?node-id=1%3A2&scaling=scale-down&page-id=0%3A1'
  },
];

export default function Designs() {
  return (
   <section id="designs" sx={{ variant: 'section.section'}} style={{paddingTop: "50px"}}>
     <Container>
       <SectionHeader
          slogan="Design Examples"
          title="Here Are Some Examples Of Design Files"
       />
       <Grid sx={styles.grid}>
          {data.map((item, i) => (
            <Link href={item.url} key={i} target='__blank'>
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

