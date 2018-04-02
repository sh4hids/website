import React from 'react';
import {GridCol} from '../atoms/Grid';
import ProjectDescription from '../molecules/ProjectDescription';

const ProjectCard = (props) => (
    <GridCol column="25">
      <ProjectDescription project={props.project} />
    </GridCol>
);

export default ProjectCard;
