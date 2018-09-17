import React, { Component } from 'react';
// WE IMPORT APOLLO CLIENT FROM APOLLO BOOST
import ApolloClient from 'apollo-boost';
import { ApolloProvider, Query } from 'react-apollo';
import gql from 'graphql-tag';
import logo from './logo.svg';
import './App.css';

// CONNECTING TO THE APOLLO SERVER USING APOLLO BOOST THRU APOLLO CLIENT
const client = new ApolloClient({
  uri: 'https://w5xlvm3vzz.lp.gql.zone/graphql',
});

// QUERY SYNTAX
const POST_QUERY = gql`
  {
    rates(currency: "USD") {
      currency
    }
  }
`;

// client
//   .query({
//     query: POST_QUERY,
//   })
//   .then(res => console.table(res.data.rates.map(item => item.currency)));

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">GraphQL</h1>
          </header>
          <Query query={POST_QUERY}>
            {client => {
              console.log(client.loading);
              if (!client.loading) {
                console.log(client.data);
                return client.data.rates.map(item => <p key={item.currency}>{item.currency}</p>);
              }
              return <p>Loading ........</p>;
            }}
          </Query>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
