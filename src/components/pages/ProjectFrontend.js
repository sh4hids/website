import React, {Component} from 'react';
import {Grid} from '../atoms/Grid';
import ProjectIntro from '../organisms/ProjectIntro';

class ProjectFrontend extends Component {
  render() {
    return (<Grid responsiveSm="responsiveSm" gutterless="gutterless" bordered="bordered" bw="2" bc="#21AAE2">
      <ProjectIntro />
    </Grid>);
  }
}

export default ProjectFrontend;
