import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import styled from 'styled-components';
// WE IMPORT APOLLO CLIENT FROM APOLLO BOOST
import { ApolloProvider } from 'react-apollo';

import ApolloClient from 'apollo-boost';

import Header from './components/Header';
import BlogPosts from './components/BlogPosts';
import Blog from './components/Blog';
import NewPost from './components/NewPost';
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
          <>
            <Header />
            <AppWrapper>
              <StyledLink to="/new">
                <Button>+ CREATE NEW </Button>
              </StyledLink>

              <Switch>
                <Route exact path="/" component={BlogPosts} />
                <Route exact path="/new" component={NewPost} />
                <Route exact path="/post/:id" component={Blog} />
              </Switch>
            </AppWrapper>
          </>
        </ApolloProvider>
      </Router>
    );
  }
}

export default App;

const AppWrapper = styled.div`
  width: 50%;
  display: grid;
  justify-content: center;
  margin: 0 auto;
  background: #ede7f6;
  padding: 20px 30px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const Button = styled.button`
  margin: 0 auto;
  margin-bottom: 10px;
  width: 200px;
  height: 48px;
  border-radius: 3px;
  padding: 5px;
  font-weight: bold;
  font-size: 1em;
  letter-spacing: 1.2px;
  border: none;
  text-transform: uppercase;
  background: #6200ee;
  color: white;
`;
