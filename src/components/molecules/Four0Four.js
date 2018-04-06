import React from 'react';
import Card from '../atoms/Card';
import BigTitle from '../atoms/BigTitle';
import Link from '../atoms/Link';

const Four0Four = () => (<Card mh="99.4vh" noHover>
  <BigTitle tac fs="150px" className="nothing-found-title">
    <span className="nothing-found">nothing found</span>
    <span className="fourOfour">404</span>
  </BigTitle>
  <Link href={process.env.PUBLIC_URL + '/'} style={{zIndex: 100}}>↫ return home</Link>
</Card>);

export default Four0Four;
