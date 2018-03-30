import styled from 'styled-components';

const MediumTitle = styled.h2`
  margin: 0;
  padding: 0;
  font-weight: 500;
  font-size: 1.4rem;
  width: 100%;
  margin-top: ${props => props.mt ? props.mt + `px` : 0};
  text-align: ${props => props.tac ? `center` : `left` };
  @media screen and (max-width: 240px) {
    font-size: 1.2rem;
  }
`;

export default MediumTitle;
