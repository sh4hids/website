import React from 'react';
import Card from '../atoms/Card';
import Text from '../atoms/Text';

const Footer = () => (<Card mh="50px" noHover>
  <Text>&copy; {new Date().getFullYear()} SHAHID .⌇⌇.  hello@shahid.pro</Text>
</Card>);

export default Footer;
