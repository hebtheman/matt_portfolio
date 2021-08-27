/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import CardColumn from 'components/card-column.js';
import React from 'assets/key-feature/react.png';
import Figma from 'assets/key-feature/128px-figma.png';
import HTML from 'assets/key-feature/html-logo.png';
import Illustrator from 'assets/key-feature/128px-illustrator.png';

const data = [
  {
    id: 1,
    imgSrc: Figma,
    altText: 'Figma',
    title: 'Figma',
    text:
      'I love using Figma, it\'s great that it\'s web based and it has loads of fantastic features that help me create amazing prototypes.',
  },
  {
    id: 2,
    imgSrc: Illustrator,
    altText: 'Adobe Illustrator',
    title: 'Adobe Illustrator',
    text:
      'Illustrator is my preferred Tool of Choice when it comes to editing logos and SVGs, it\'s also great for working with typography!',
  },
  {
    id: 3,
    imgSrc: HTML,
    altText: 'HTML & CSS',
    title: 'HTML & CSS',
    text:
      'Through building various websites for my company and clients, I have gained a lot of experience working with HTML and CSS.',
  },
  {
    id: 4,
    imgSrc: React,
    altText: 'JS & React',
    title: 'JS & React',
    text:
      'I have used react in pretty much all the projects I\'ve worked on. The learning curve is steep, but react hooks are sooo good!',
  },
];

export default function Skills() {
  return (
   <section sx={{ variant: 'section.skills'}} id='skills'>
     <Container>
        <SectionHeader
          slogan="My Skills"
          title="What I Use To Get The Job Done"
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <CardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
     </Container>
   </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
