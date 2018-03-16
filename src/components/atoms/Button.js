import styled from 'styled-components';

const Button = styled.button`
  background: #fff;
  border-radius: 3px;
  color: #222;
  border: 1px solid #222;
  padding: .5rem 1rem;
  outline: none;
  transition: all ease-in-out 0.2s;
  text-transform: uppercase;
  font-size: 1rem;

  &:focus, &:active {
    outline: none;
  }

  &:hover {
    background: #222;
    color: #fff;
    cursor: pointer;
  }
`;

export default Button;
