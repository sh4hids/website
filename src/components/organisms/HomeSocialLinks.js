import React, {Fragment} from 'react';
import {GridCol} from '../atoms/Grid';
import SocialLink from '../molecules/SocialLink';

const HomeSocialLinks = () => (
  <Fragment>
    <GridCol column="25">
      <SocialLink icon="fa-facebook-f" url="https://facebook.com/sh4hids"/>
    </GridCol>
    <GridCol column="25">
      <SocialLink icon="fa-twitter" url="http://twitter.com/sh4hids"/>
    </GridCol>
    <GridCol column="25">
      <SocialLink icon="fa-linkedin-in" url="https://www.linkedin.com/in/sh4hids"/>
    </GridCol>
    <GridCol column="25">
      <SocialLink icon="fa-github" url="http://github.com/sh4hids"/>
    </GridCol>
  </Fragment>
);

export default HomeSocialLinks;
