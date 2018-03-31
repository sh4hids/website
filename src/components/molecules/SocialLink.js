import React from 'react';
import Card from '../atoms/Card';
import Link from '../atoms/Link';
import BigTitle from '../atoms/BigTitle';

const SocialLink = (props) => (<Card bc="#21AAE2" mh="30vh">
  <BigTitle tac>
    <Link fs="1.2rem" href={props.url} target="_blank"><i className={`fab sicon  ${props.icon}`}></i></Link>
  </BigTitle>
</Card>);

export default SocialLink;
