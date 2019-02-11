// GET DATA FROM IMDB BY GENRE

const items = document.querySelectorAll('.lister-item-content');

function getTextContent(selector, item) {
  const value = item.querySelector(`${selector}`).textContent;
  return value;
}

function getTextContent2(selector, item) {
  const value = Array.from(item.querySelectorAll(`${selector}`)).map(
    itemed => itemed.textContent,
  );
  return value;
}

const movies = Array.from(items).map(item => {
  return {
    title: getTextContent('.lister-item-content a', item),
    year: getTextContent('span.lister-item-year.text-muted.unbold', item),
    certificate: item.querySelector('span.certificate')
      ? getTextContent('span.certificate', item)
      : 'no-certificate',
    runtime: item.querySelector('span.runtime')
      ? getTextContent('span.runtime', item)
      : 'no time',
    genre: getTextContent('.text-muted span.genre', item),
    blob: getTextContent("p[class='text-muted']", item),
    director: getTextContent('p a', item),
    stars: getTextContent2('p a', item).splice(1),
  };
});

movies;

JSON.stringify(movies);
