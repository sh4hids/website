import styled, {css} from 'styled-components';

const Card = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid #000000;
  padding: 0;
  background-size: 200% 100%;
  background-image: linear-gradient(to left, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.7) 50%);
  border-color: ${props => props.bc ? props.bc : ``}; */}
  min-height: ${props => props.mh ? props.mh : `50vh`};
  padding-left: ${props => props.pl ? props.pl : `1rem`};
  padding-right: ${props => props.pr ? props.prv : `1rem`};
  transition: all ease-in-out 0.3s;

  @media screen and (max-width: 567px) {
    padding: 1rem;
  }
  @media (min-width: 1281px) {
    ${props => props.noHover ? `` : css`
      &:hover {
        background-position: -100% 0;
        .link-text, .sicon {
            transition: all ease-in-out 0.3s;
            color: #aeea00;
        }
        path {
          fill: rgba(0,0,0,0.7);
        }
      }
    ` }
  }
`;

export default Card;
