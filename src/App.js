import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// WE IMPORT APOLLO CLIENT FROM APOLLO BOOST
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
// CSS
import styled from 'styled-components';
import './App.css';
// COMPONENTS
import Header from './components/Header';
import BlogPosts from './components/BlogPosts';
import Blog from './components/Blog';
import NewPost from './components/NewPost';

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
  display: grid;
  justify-content: center;
  background: #ede7f6;
  padding: 30px;
`;
