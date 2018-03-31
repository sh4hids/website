import React, {Fragment} from 'react';
import {GridCol} from '../atoms/Grid';
import HeroLogo from '../molecules/HeroLogo';
import ShortInfo from '../molecules/ShortInfo';

const HomeIntro = () => (
  <Fragment>
    <GridCol column="30">
      <HeroLogo/>
    </GridCol>
    <GridCol column="70">
      <ShortInfo/>
    </GridCol>
  </Fragment>
);

export default HomeIntro;
