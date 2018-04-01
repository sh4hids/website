import React, {Component} from 'react';
import {Grid} from '../atoms/Grid';
import HomeIntro from '../organisms/HomeIntro';

class Resume extends Component {
  render() {
    return (<Grid responsiveSm="responsiveSm" gutterless="gutterless" bordered="bordered" bw="2" bc="#21AAE2">
      <HomeIntro />
    </Grid>);
  }
}

export default Resume;
