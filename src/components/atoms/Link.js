import styled from 'styled-components';

const Link = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${props => props.color ? props.color : `#21AAE2`};
  font-size: ${props => props.fs ? props.fs : `1rem`};
`;

export default Link;
