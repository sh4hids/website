import React, {Component} from 'react';
import {Grid} from '../atoms/Grid';
import ProjectIntro from '../organisms/ProjectIntro';
import ProjectCard from '../organisms/ProjectCard';

let projects = [
  {
    id: 1,
    title: "Rabbana Dua",
    techSpecs: ['react', 'fullpagejs'],
    url: "https://shahid.pro/rabbana-dua/"
  },
  {
    id: 2,
    title: "Personal Blog",
    techSpecs: ['react'],
    url: "https://blog.shahid.pro/"
  },
  {
    id: 3,
    title: "Prozukti School",
    techSpecs: ['react'],
    url: "http://prozuktischool.com/"
  },
  {
    id: 4,
    title: "Bangla Web Font",
    techSpecs: ['react'],
    url: "https://fonts.shahid.pro/"
  },
];

class ProjectFrontend extends Component {
  render() {
    return (<Grid responsiveSm="responsiveSm" gutterless="gutterless" bordered="bordered" bw="2" bc="#000000">
      <ProjectIntro />
      {projects.map((project) => (<ProjectCard key={project.id} project={project} />))}
    </Grid>);
  }
}

export default ProjectFrontend;
