import gql from 'graphql-tag';

// QUERY SYNTAX -> THIS IS A NAMED QUERY
export const POST_QUERY = gql`
  query allPosts {
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

// export const api_Key = `c3d81d18723962a075ba77b8956eceaf`;

// const query = `https://api.citybik.es/v2/networks`;

// const query = `https://api.citybik.es/v2/networks`;
