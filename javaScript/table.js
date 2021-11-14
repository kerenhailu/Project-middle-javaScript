allMovies()
  .then(res => printDitels(res))
  .catch(rej => console.log(rej))