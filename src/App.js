import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
// WE IMPORT APOLLO CLIENT FROM APOLLO BOOST
import { ApolloProvider } from 'react-apollo';
import { Link } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import BlogPosts from './components/BlogPosts';
import Blog from './components/Blog';
import './App.css';

// CONNECTING TO THE APOLLO SERVER USING APOLLO BOOST THRU APOLLO CLIENT
const client = new ApolloClient({
  uri: 'https://api-useast.graphcms.com/v1/cjm1gy7260gny01c4lf8rspg6/master',
});

class App extends Component {
  render() {
    return (
      <Router>
        <ApolloProvider client={client}>
          <div className="App">
            <StyledLink to="/">
              <header className="App-header">
                <h1 className="App-title">BLOG IT</h1>
              </header>
            </StyledLink>
            <Switch>
              <Route exact path="/" component={BlogPosts} />
              <Route exact path="/post/:id" component={Blog} />
            </Switch>
          </div>
        </ApolloProvider>
      </Router>
    );
  }
}

export default App;

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
