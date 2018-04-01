import React from 'react';
import Card from '../atoms/Card';
import MediumTitle from '../atoms/MediumTitle';

const PageInfo = (props) => (<Card bc="#21AAE2" pr="3rem" pl="3rem">
  <MediumTitle>• {props.topics.map((topic) => (`${topic} • `))}</MediumTitle>
  <p>{props.description}</p>
</Card>);

export default PageInfo;
