import React, {Component} from 'react';
import {Grid} from '../atoms/Grid';
import HomeIntro from '../organisms/HomeIntro';
import HomeProjects from '../organisms/HomeProjects';
import HomeSocialLinks from '../organisms/HomeSocialLinks';

class Home extends Component {
  render() {
    return (<Grid responsiveSm="responsiveSm" gutterless="gutterless" bordered="bordered" bw="2" bc="#21AAE2">
      <HomeIntro />
      <HomeProjects />
      <HomeSocialLinks />
    </Grid>);
  }
}

export default Home;
