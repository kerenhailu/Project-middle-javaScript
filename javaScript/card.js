// function printDitelsToCard(object) {
//   for (const item of object.data) {
//     cardMoviesSection.innerHTML += `<artical class=cardMovie>
//         <a href="../pages/item.html?id=${item._id}" target="_blank"><h3> ${item.movieName}</h3></a>
//       <img src="${item.image}"><br>
//       rating :${item.rating}<br>
//       <button id="delete" onclick="deleteMovie(${item._id})">Delete</button> 
//       </artical>`;
//   }
// }

// function showGif() {
//   cardMoviesSection.innerHTML = `<img id="imgGif" src=" https://www.wardhaughproperty.co.uk/wp-content/themes/waas-theme-a-parent/assets/img/loading.gif">`;
// }
// function haidGif() {
//   imgGif.style.display = "none";
// }

// async function allMovies(api) {
//   try {
//     showGif();
//     return await fetch(`${api}`).then(
//       (response) => response.json()
//     );
//     // return {data:listOfMovies}
//   } catch (error) {
//     return error;
//   } finally {
//     haidGif();
//   }
// }

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


// ===================================
// !למצוא לפי שם
// async function searchByName(inputName) {
//   try {
//       return await fetch(`https://moviesmern.herokuapp.com/movies/movie/searchByName/${inputName}`)
//           .then((res) => res.json());
//   } catch (error) {
//       return error;
//   }
// }
// btnSearchByInput.onclick = () => {
// searchByName(inputSearch.value)
// .then(res=>{DetailsMovieSpecific(res)})
// console.log(searchByName(inputSearch.value));
// }

// ======================================================
// function DetailsMovieSpecific(object){
//   for (const item of object.data) {
//   // let item=object.data
//   cardMoviesSection.innerHTML=`<artical class="articalMovie">
//   <h3> ${item.movieName}</h3>
//    <img src="${item.image}"><br>
//    rating :${item.rating}<br>
//    data :${item.date}<br>
//    synopsis :${item.synopsis}<br>
//    </artical>`
// }
// }
// =======================================================
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
// async function deleteFromApi(idToDelete, optionDelete) {
//   try {
//     return await fetch(
//       "https://moviesmern.herokuapp.com/movies/movie/" + idToDelete,
//       optionDelete
//     )
//     .then(res => {
//       res.json();
//     });
//   } catch (error) {
//     return error;
//   }
// }

// function CallDelete(id) {
//   const options = {
//     method: `DELETE`,
//   };
//   deleteFromApi(id, options)
//   console.log(options);
// }
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
