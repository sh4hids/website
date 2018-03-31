import React, {Fragment} from 'react';
import {GridCol} from '../atoms/Grid';
import LinkCard from '../molecules/LinkCard';

const HomeProjects = () => (
  <Fragment>
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
  </Fragment>
);

export default HomeProjects;
