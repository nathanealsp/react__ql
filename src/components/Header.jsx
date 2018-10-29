import React, { Component } from 'react';
import styled from 'styled-components';
import { StyledLink } from '../UI-Library/UI-Library';

export default class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <StyledLink to="/">
          <p>BLOG IT</p>
        </StyledLink>
      </HeaderWrapper>
    );
  }
}

const HeaderWrapper = styled.div`
  font-size: 2.5em;
  padding: 30px;
  background: #ede7f6;
  color: white;
  font-weight: bold;
  text-align: center;
  margin-bottom: 5px;
`;
