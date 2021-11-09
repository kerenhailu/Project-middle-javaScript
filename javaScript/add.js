class MovieFromUser {
  movieName;
  image;
  linkToMovie;
  rating;
  synopsis;
  constructor(movieName, image, linkToMovie, rating, synopsis) {
    this.movieName = movieName;
    this.image = image;
    this.linkToMovie = linkToMovie;
    this.rating = rating;
    this.synopsis = synopsis;
  }
}

async function inputReturn(api, option) {
  try {
    return await fetch(`${api}`, option);
    // .then((res) => res.json())
    // .then((res) => console.log(res));
  } catch (err) {
    console.log(err);
  }
}
btnAdd.onclick = () => {
  const newMovie = new MovieFromUser(
    movieName.value,
    image.value,
    linkToMovie.value,
    rating.value,
    synopsis.value
  );

  const option = {
    method: `POST`,
    body: JSON.stringify(newMovie),
    headers: { "Content-Type": "application/json" },
  };
  console.log(option.body);
  inputReturn(`https://moviesmern.herokuapp.com/movies/saveMovie`, option);
};
