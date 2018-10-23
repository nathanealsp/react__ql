import React, { Component } from 'react';
// WE IMPORT APOLLO CLIENT FROM APOLLO BOOST
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
// import gql from 'graphql-tag';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogPosts from './components/BlogPosts';
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
            <header className="App-header">
              <h1 className="App-title">BLOG IT</h1>
            </header>
            <Switch>
              <Route exact path="/" component={BlogPosts} />
            </Switch>
          </div>
        </ApolloProvider>
      </Router>
    );
  }
}

export default App;
