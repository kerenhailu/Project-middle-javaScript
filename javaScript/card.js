
allMovies("https://moviesmern.herokuapp.com/movies/all")
  .then((res) => printDitelsToCard(res))
  .catch((rej) => console.log(rej));

function showMovie(id) {
  async function CardDetails() {
    try {
      showGif();
      return await fetch(
        `https://moviesmern.herokuapp.com/movies/movie/${id}`
      ).then((response) => response.json());
    } catch (error) {
      return error;
    } finally {
      haidGif();
    }
  }
 
  CardDetails()
    .then((res) =>console.log(movieWithAllTheDetails(res)) )
    .catch((rej) => console.log(rej));
}

//!למחוקקקקקקקקקקקק
async function CardDetails(idItem,option1) {
    try {
      showGif();
      return await fetch(
        `https:moviesmern.herokuapp.com/movies/movie/${idItem}`,option1
      ).then((response) => response.json());
    } catch (error) {
      return error;
    } finally {
      haidGif();
    }
  }
  function deleteMovie(idItem) {
  const option1 = {
    method: `DELETE`,
  };
  
  CardDetails(idItem,option1)
  .then(res=>{console.log(res)})
  .catch(rej=>{console.log(rej)})
  console.log(option1);
}
