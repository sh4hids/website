import React, {Component} from 'react';
import {Grid, GridCol} from '../atoms/Grid';
import HeroLogo from '../molecules/HeroLogo';
import ShortInfo from '../molecules/ShortInfo';
import LinkCard from '../molecules/LinkCard';

class Home extends Component {
  render() {
    return (<Grid responsiveSm="responsiveSm" gutterless="gutterless" bordered="bordered" bw="2" bc="#21AAE2">
      <GridCol column="30">
        <HeroLogo/>
      </GridCol>
      <GridCol column="70">
        <ShortInfo/>
      </GridCol>
      <GridCol column="50">
        <LinkCard title="frontend" url="http://github.com/sh4hids"/>
      </GridCol>
      <GridCol column="50">
        <LinkCard title="fullstack" url="http://github.com/sh4hids"/>
      </GridCol>
      <GridCol column="100">
        <LinkCard title="desktop" url="http://github.com/sh4hids"/>
      </GridCol>
      <GridCol column="30">
        <LinkCard title="ui" url="http://github.com/sh4hids"/>
      </GridCol>
      <GridCol column="40">
        <LinkCard title="typography" url="http://github.com/sh4hids"/>
      </GridCol>
      <GridCol column="30">
        <LinkCard title="logo" url="http://github.com/sh4hids"/>
      </GridCol>
    </Grid>);
  }
}

export default Home;
