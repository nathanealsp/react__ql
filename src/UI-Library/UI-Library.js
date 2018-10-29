// import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled.button`
  width: 550px;
  height: 48px;
  border-radius: 3px;
  padding: 5px;
  font-size: 1.1em;
  font-weight: bold;
  border: none;
  text-transform: uppercase;
  background: #6200ee;
  color: white;
`;

export const ButtonLong = styled.button`
  margin-bottom: 10px;
  width: 250px;
  height: 48px;
  border-radius: 3px;
  font-weight: bold;
  font-size: 1em;
  letter-spacing: 1.2px;
  border: none;
  text-transform: uppercase;
  background: #6200ee;
  color: white;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export default Button;
