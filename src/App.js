import React, { Component } from 'react';
// WE IMPORT APOLLO CLIENT FROM APOLLO BOOST
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';
import logo from './logo.svg';
import './App.css';

// CONNECTING TO THE APOLLO SERVER USING APOLLO BOOST THRU APOLLO CLIENT
const client = new ApolloClient({
  uri: 'https://w5xlvm3vzz.lp.gql.zone/graphql',
});

// QUERY SYNTAX
const testQuery = gql`
  {
    rates(currency: "USD") {
      currency
    }
  }
`;

client
  .query({
    query: testQuery,
  })
  .then(res => console.table(res.data.rates.map(item => item.currency)));

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
