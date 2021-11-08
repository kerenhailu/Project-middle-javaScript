function  printDitels(object){
    for (const item of object.data) {
      moviesTable.innerHTML+=`<tr>
      <td>${item.movieName}</td>
      <td>${item.date}</td>
      <td>${item.image}</td>
      <td>${item.linkToMovie}</td>
      <td>${item.rating}</td>
      <td>${item.__v}</td>
      <td>${item._id}</td>
      <td>${item.synopsis}</td></tr>`
    }
  }
async function allMovies() {
  try {
      return await fetch('https://moviesmern.herokuapp.com/movies/all')
          .then((response) => response.json())
  }
  catch (error) {
      return error
  }
}
allMovies()
  .then(res => printDitels(res))
  .catch(rej => console.log(rej))