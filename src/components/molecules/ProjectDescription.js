import React from 'react';
import Link from '../atoms/Link';
import Card from '../atoms/Card';
import SmallTitle from '../atoms/SmallTitle';
import ColoredDivider from '../atoms/ColoredDivider';

const ProjectDescription = (props) => (<Card>
  <SmallTitle tac="tac">{props.project.title}</SmallTitle>
  <ColoredDivider width="10"/>
  <Link fs="1rem" href={props.project.url} target="_blank">VISIT</Link>
</Card>);

export default ProjectDescription;
