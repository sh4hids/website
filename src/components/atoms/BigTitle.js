import styled from 'styled-components';

const BigTitle = styled.h2`
  margin: 0;
  padding: 0;
  font-weight: 500;
  font-size: ${props => props.fs ? props.fs : `1.6rem`};
  width: 100%;
  line-height: 0.5;
  margin-top: ${props => props.mt ? props.mt + `px` : 0};
  text-align: ${props => props.tac ? `center` : `left` };
  @media screen and (max-width: 240px) {
    font-size: 1.4rem;
  }
`;

export default BigTitle;
