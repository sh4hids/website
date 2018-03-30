import styled from 'styled-components';

const Bordered = styled.span`
  width: inherit;
  border-color: ${props => props.color ? props.color : `#000000`};
  border-width: ${props => props.width ? props.width : 1}px;
  border-style: solid;
  border-radius: ${props => props.color ? props.color+`px` : 0};
`;

export default Bordered;
