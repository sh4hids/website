import React from 'react';
import Wrapper from '../atoms/Wrapper';
import Content from '../atoms/Content';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

const SearchForm = () => (
  <Wrapper>
    <Content>
      <Input placeholder="Name..." />
    </Content>
    <Content>
      <Button>Search</Button>
    </Content>
  </Wrapper>
);

export default SearchForm;
