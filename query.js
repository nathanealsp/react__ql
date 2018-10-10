const query = `https://jsonplaceholder.typicode.com/users`;

// fetch(query)
//   .then(res => res.json())
//   .then(data => console.log(data));

function apiFetcher(url) {
  console.log(fetch(url));
}

apiFetcher(query);
