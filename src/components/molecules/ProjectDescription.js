import React from 'react';
import Link from '../atoms/Link';
import Card from '../atoms/Card';
import SmallTitle from '../atoms/SmallTitle';
import ColoredDivider from '../atoms/ColoredDivider';

const ProjectDescription = (props) => (<Card bc="#21AAE2" pr="3rem" pl="3rem">
  <SmallTitle tac="tac">{props.project.title}</SmallTitle>
  <ColoredDivider bg=""/>
  <p>• {props.project.techSpecs.map(spec => (`${spec} • `))}</p>
  <ColoredDivider width="80"/>
  <Link fs="1rem" href={props.url}>visit</Link>
</Card>);

export default ProjectDescription;
