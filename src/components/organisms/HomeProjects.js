import React, {Fragment} from 'react';
import {GridCol} from '../atoms/Grid';
import LinkCard from '../molecules/LinkCard';

const HomeProjects = () => (
  <Fragment>
    <GridCol column="50">
      <LinkCard title="frontend" url={process.env.PUBLIC_URL + '/projects/frontend'}/>
    </GridCol>
    <GridCol column="50">
      <LinkCard title="fullstack" url="http://github.com/sh4hids"/>
    </GridCol>
    <GridCol column="100">
      <LinkCard title="desktop" url="https://github.com/aukgit/RemoteJob/releases" openNewTab/>
    </GridCol>
    <GridCol column="30">
      <LinkCard title="ui" url="https://www.behance.net/sh4hids" openNewTab/>
    </GridCol>
    <GridCol column="40">
      <LinkCard title="typography" url="https://www.behance.net/sh4hids" openNewTab/>
    </GridCol>
    <GridCol column="30">
      <LinkCard title="logo" url="https://www.behance.net/sh4hids" openNewTab/>
    </GridCol>
  </Fragment>
);

export default HomeProjects;
