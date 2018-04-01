import React, {Fragment} from 'react';
import {GridCol} from '../atoms/Grid';
import MenuLogo from '../molecules/MenuLogo';
import PageInfo from '../molecules/PageInfo';

const tech = ['react','angularjs','bootstrap','material design'];
const description = 'I have been working as a web developer since 2015. Till now I have worked with bootstrap, material design light, ReactJS, AngularJS, EJS etc. Among all of this awesome technologies I love to work with ReactJS most.';

const ProjectIntro = () => (
  <Fragment>
    <GridCol column="30">
      <MenuLogo/>
    </GridCol>
    <GridCol column="70">
      <PageInfo topics={tech} description={description}/>
    </GridCol>
  </Fragment>
);

export default ProjectIntro;
