const listOfMovies = [
  {
    _id: "1",
    movieName: "Movie 1",
    rating: "5",
    synopsis: "something",
    image: "",
  },
  {
    _id: "2",
    movieName: "Movie 2",
    rating: "5",
    synopsis: "something",
    image: "",
  },
  {
    _id: "3",
    movieName: "Movie 3",
    rating: "5",
    synopsis: "something",
    image: "",
  },
  {
    _id: "4",
    movieName: "Movie 4",
    rating: "5",
    synopsis: "something",
    image: "",
  },
  {
    _id: "5",
    movieName: "Movie 5",
    rating: "5",
    synopsis: "something",
    image: "",
  },
  {
    _id: "6",
    movieName: "Movie 6",
    rating: "5",
    synopsis: "something",
    image: "",
  },
  {
    _id: "7",
    movieName: "Movie 7",
    rating: "5",
    synopsis: "something",
    image: "",
  },
];

function printDitelsToCard(object) {
  for (const item of object.data) {
    cardMoviesSection.innerHTML += `<artical class=cardMovie>
        <a href="../pages/item.html?id=${item._id}" target="_blank"><h3> ${item.movieName}</h3></a>
      <img src="${item.image}"><br>
      rating :${item.rating}<br>
     <button class="btnCardDetails">Details of movie</button><br>
      <button class="delete" onclick="deleteMovie(${item._id})">Delete</button> 
      </artical>`;
  }
}

function showGif() {
  cardMoviesSection.innerHTML = `<img id="imgGif" src=" https://www.wardhaughproperty.co.uk/wp-content/themes/waas-theme-a-parent/assets/img/loading.gif">`;
}
function haidGif() {
  imgGif.style.display = "none";
}

async function allMovies() {
  try {
    showGif();
    // return await fetch("https://moviesmern.herokuapp.com/movies/all").then(
    //   (response) => response.json()
    // );
    return {data:listOfMovies}
  } catch (error) {
    return error;
  } finally {
    haidGif();
  }
}
allMovies()
  .then((res) => printDitelsToCard(res))
  .catch((rej) => console.log(rej));

function movieWithAllTheDetails(object) {
  for (const item of object.data) {
    sectionDetailesPageItem.innerHTML += `<artical>
       <h3> ${item.movieName}</h3>
        <img src="${item.image}"><br>
        rating :${item.rating}<br>
        data :${item.date}<br>
        linkToMovie :${item.linkToMovie}<br>
        synopsis :${item.synopsis}<br>
        </artical>`;
  }
}

// const btnCardDetails = document.getElementsByClassName("btnCardDetails")
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
    .then((res) => movieWithAllTheDetails(res))
    .catch((rej) => console.log(rej));
}

//!למצוא סרט לפי ID
btnSearch.onclick = () => {
  showMovie(inputSearch.value);
};

// =======================================================
//!למחוקקקקקקקקקקקק
function deleteMovie(id) {
  const option1 = {
    method: `DELETE`,
    headers: { "Content-Type": "application/json" },
  };
  async function CardDetails() {
    try {
      showGif();
      return await fetch(
        `https:moviesmern.herokuapp.com/movies/movie/${id}`,
        option1
      ).then((response) => response.json());
    } catch (error) {
      return error;
    } finally {
      haidGif();
    }
  }
  CardDetails()
    .then((res) => console.log(res))
    .catch((rej) => console.log(rej));
}
// =============================================
//!sort
// function sortMovieFunction(key) {
//     for (const item of object.data) {
//         item.key.sort()
//             cardMoviesSection.innerHTML+=`<artical class=cardMovie>
//      <h3> ${item.movieName}</h3>
//       <img class="picMovieInCard" src="${item.image}"><br>
//       rating :${item.rating}<br>
//       <a href="./index.html" target="_blank"><button>Direct viewing</button></a><br>
//       <button class="showItem>show item</button>
//       </artical>`
//     }
// }

//   sortMovie.onclick =()=>{
//    switch (sortMovie.value) {
//      case "sort":
//          break;

//          case "NameMovie":
//             sortMovieFunction(movieName)
//             break;
//             case "Rating":
//           cardMoviesSection.innerHTML=`<h1>ggg</h1>`
//                 break;
//                 case "Year of Production":
//                 break;

//      default:
//          break;
//  }
//   }

// btnSearch.onclick=()=>{
//     switch (inputSearch.value) {
//         case value:

//             break;

//         default:
//             break;
//     }
// }
