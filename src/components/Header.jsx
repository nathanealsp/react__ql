import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
