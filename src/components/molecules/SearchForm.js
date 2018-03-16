import React, { Component } from 'react';
import Wrapper from '../atoms/Wrapper';
import Content from '../atoms/Content';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

export default class SearchForm extends Component {
  render(){
    return(
      <Wrapper>
        <Content>
          <Input placeholder="Name..."></Input>
        </Content>
        <Content>
          <Button>Search</Button>
        </Content>
      </Wrapper>
    );
  }
}
