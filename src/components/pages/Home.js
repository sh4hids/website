import React, {Component} from 'react';
import {Grid, GridCol} from 'griz';
import HeroLogo from '../molecules/HeroLogo';
import Bordered from '../atoms/Bordered';

class Home extends Component {
  render() {
    return (<Grid responsiveSm="responsiveSm" gutterless="gutterless">
      <Bordered width="3">
        <GridCol column="30">
          <HeroLogo></HeroLogo>
        </GridCol>
      </Bordered>
    </Grid>);
  }
}

export default Home;
