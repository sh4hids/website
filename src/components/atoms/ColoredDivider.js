import styled from 'styled-components';

const ColoredDivider = styled.span `
  display: inline-block;
  width: ${props => props.width ? props.width : `100`}px;
  height: 1px;
  background: ${props => props.bg ? `props.bg` : `#cddc39`};
  margin-bottom: 10px;
`;

export default ColoredDivider;
