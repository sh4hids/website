import React from 'react';
import Link from '../atoms/Link';
import Card from '../atoms/Card';
import SmallTitle from '../atoms/SmallTitle';
import ColoredDivider from '../atoms/ColoredDivider';

const ProjectDescription = (props) => (<Card bc="#21AAE2" pr="3rem" pl="3rem">
  <SmallTitle tac="tac">{props.project.title}</SmallTitle>
  <ColoredDivider width="10"/>
  <Link fs="1rem" href={props.project.url} target="_blank">VISIT</Link>
</Card>);

export default ProjectDescription;