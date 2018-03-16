import styled from 'styled-components';

const Input = styled.input`
  background: #fff;
  border-radius: 3px;
  color: #222;
  border: 1px solid #222;
  padding: .5rem;
  outline: none;
  transition: all ease-in-out 0.2s;
  font-size: 1rem;

  &:focus, &:active {
    outline: none;
  }
`;

export default Input;
