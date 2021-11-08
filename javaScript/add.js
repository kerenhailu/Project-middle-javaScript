class MovieFromUser {
  movieName;
  date;
  image;
  linkToMovie;
  rating;
  __v;
  _id;
  synopsis;
  constructor(movieName, date, image, linkToMovie, rating, __v, _id, synopsis) {
    this.movieName = movieName;
    this.date = date;
    this.image = image;
    this.linkToMovie = linkToMovie;
    this.rating = rating;
    this.__v = __v;
    this._id = _id;
    this.synopsis = synopsis;
  }
}
btnAdd.onclick = () => {
const newMovie = new MovieFromUser(
  movieName.value,
  date.value,
  image.value,
  linkToMovie.value,
  rating.value,
  __v.value,
  _id.value,
  synopsis.value
);

  const option = {
    method: `POST`,
    body: JSON.stringify(newMovie),
    headers:{'Content-Type': 'application/json'},
  };

  async function inputReturn(api) {
    try {
      return await fetch(`${api}`, option)
        .then((res) => res.json())
        .then((res) => console.log(res));
    } catch (err) {
      console.log(err);
    }
  }
  inputReturn(`https://moviesmern.herokuapp.com/movies/saveMovie`);
};
