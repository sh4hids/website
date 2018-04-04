import React from 'react';
import Card from '../atoms/Card';
import Link from '../atoms/Link';
import BigTitle from '../atoms/BigTitle';

const LinkCard = (props) => (<Card>
  <BigTitle tac>
    <Link fs="1.6rem" href={props.url} target={props.openNewTab ? `_blank` : ``}>{props.title}</Link>
  </BigTitle>
</Card>);

export default LinkCard;
