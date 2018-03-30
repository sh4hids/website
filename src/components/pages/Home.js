import React, {Component} from 'react';
import {Grid, GridCol} from '../atoms/Grid';
import HeroLogo from '../molecules/HeroLogo';
import Bordered from '../atoms/Bordered';

class Home extends Component {
  render() {
    return (<Grid responsiveSm gutterless bordered bw="2">
      <GridCol column="30">
        <HeroLogo/>
      </GridCol>
    </Grid>);
  }
}

export default Home;
