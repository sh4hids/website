import styled from 'styled-components';

const Content = styled.span`
  padding: 10px;
  display: ${props => props.block ? 'block' : 'inline'}
`;

export default Content;
