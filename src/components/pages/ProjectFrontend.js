import React, {Component} from 'react';
import {Grid} from '../atoms/Grid';
import ProjectIntro from '../organisms/ProjectIntro';
import ProjectCard from '../organisms/ProjectCard';

let projects = [
  {
    id: 1,
    title: "Rabbana Dua",
    techSpecs: ['react', 'fullpagejs']
  },
  {
    id: 2,
    title: "Open Weather App",
    techSpecs: ['react']
  },
];

class ProjectFrontend extends Component {
  render() {
    return (<Grid responsiveSm="responsiveSm" gutterless="gutterless" bordered="bordered" bw="2" bc="#21AAE2">
      <ProjectIntro />
      {projects.map((project) => (<ProjectCard key={project.id} project={project} />))}
      {projects.map((project) => (<ProjectCard key={project.id} project={project} />))}
    </Grid>);
  }
}

export default ProjectFrontend;
