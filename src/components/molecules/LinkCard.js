import React from 'react';
import Card from '../atoms/Card';
import Link from '../atoms/Link';
import BigTitle from '../atoms/BigTitle';

const LinkCard = (props) => (<Card bc="#21AAE2">
  <BigTitle tac>
    <Link fs="1.6rem" href={props.url}>{props.title}</Link>
  </BigTitle>
</Card>);

export default LinkCard;
