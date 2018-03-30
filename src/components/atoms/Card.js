import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  border: 2px solid #000000;
  padding: 0;
  background-color: rgba(0,0,0,0.7);
  border-color: ${props => props.bc ? props.bc : ``};
  padding-left: ${props => props.pl ? props.pl : `1rem`};
  padding-right: ${props => props.pr ? props.pr : `1rem`};
  @media screen and (max-width: 567px) {
    padding: 1rem;
  }
`;

export default Card;
