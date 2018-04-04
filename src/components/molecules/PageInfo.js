import React from 'react';
import Card from '../atoms/Card';
import MediumTitle from '../atoms/MediumTitle';

const PageInfo = (props) => (<Card pr="3rem" pl="3rem">
  <MediumTitle>• {props.topics.map((topic) => (`${topic} • `))}</MediumTitle>
  <p>{props.description}</p>
</Card>);

export default PageInfo;
