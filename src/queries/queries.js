import gql from 'graphql-tag';

// QUERY SYNTAX
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

// const bikesQuery = async function(url) {
//   const res = await fetch(url);
//   const bikes = await res.json();

//   // console.log(bikes.networks);
//   // for await (const bike of bikes.networks) {
//   // console.log(bike);
//   // }
// };

// bikesQuery(query);

const query = `https://jsonplaceholder.typicode.com/users`;

// fetch(query)
//   .then(res => res.json())
//   .then(data => console.log(data));

function apiFetcher(url) {
  fetch(url)
    .then(response => response.json())
    .then(results => {
      const data = results;
      console.log('DATA', data);
    });
}

apiFetcher(query);

async function apiFletcher(url) {
  const res = await fetch(url);
  const response = await res.json();
  console.log('DATA FLETCHER', response);

  response.map(item => console.log(item.name));
}

apiFletcher(query);
