import React, {Component} from 'react';
import {Grid, GridCol} from '../atoms/Grid';
import HomeIntro from '../organisms/HomeIntro';
import HomeProjects from '../organisms/HomeProjects';
import HomeSocialLinks from '../organisms/HomeSocialLinks';
import Footer from '../molecules/Footer';
import {Helmet} from "react-helmet";

class Home extends Component {
  render() {
    return (<Grid responsiveSm="responsiveSm" gutterless="gutterless" bordered="bordered" bw="2" bc="#000">
      <Helmet>
        <title>@shahid's | home</title>
      </Helmet>
      <HomeIntro />
      <HomeProjects />
      <HomeSocialLinks />
      <GridCol column="100">
        <Footer />
      </GridCol>
    </Grid>);
  }
}

export default Home;
