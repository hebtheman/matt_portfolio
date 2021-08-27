import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import Skills from '../sections/skills';
import WorkFlow from '../sections/workflow';
import Prototypes from '../sections/prototypes'
import Websites from '../sections/sites'
import CaseStudy from '../sections/case-study'

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <SEO title="MearleyDesign" />
          <Banner />
          <Skills />
          <Prototypes />
          <Websites />
          <WorkFlow/>
          <CaseStudy /> 
        </Layout>
    </ThemeProvider>
  );
}
