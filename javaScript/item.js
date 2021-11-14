   getId(location.search.substr(4))
     .then(movie =>{
         DetailsMovie(movie)})
     .catch(rej => console.log(rej))


