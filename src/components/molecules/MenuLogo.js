import React from 'react';
import Card from '../atoms/Card';
import Logo from '../atoms/Logo';
import Link from '../atoms/Link';

const MenuLogo = () => (<Card bc="#21AAE2">
  <Link href={process.env.PUBLIC_URL + '/'}>
    <Logo width="125" height="125" fill="none" stroke="#21AAE2" strokeWidth="20" strokeMiterlimit="20"/>
  </Link>
</Card>);

export default MenuLogo;
