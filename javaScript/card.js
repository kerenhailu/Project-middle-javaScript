function  printDitels(object){
    for (const item of object.data) {
        cardMoviesSection.innerHTML+=`<artical class=cardMovie>
     <h3> ${item.movieName}</h3>
      <img src="${item.image}"><br>
      rating :${item.rating}<br>
      <a href="./index.html" target="_blank"><button class="btnCard">Direct viewing</button></a>
      </artical>`
    }
  }
  function showGif() {
    cardMoviesSection.innerHTML=`<img id="imgGif" src=" https://cdn.dribbble.com/users/121337/screenshots/916951/small-load.gif">`
}
function haidGif() {
    imgGif.style.display="none" 
}
async function allMovies() {
  try {
    showGif()
      return await fetch('https://moviesmern.herokuapp.com/movies/all')
          .then((response) => response.json())
  }
  catch (error) {
      return error
  }
  finally{
      haidGif()
  }
}
allMovies()
  .then(res => printDitels(res))
  .catch(rej => console.log(rej))

function sortMovieFunction(key) {
    for (const item of object.data) {
        item.key.sort()
            cardMoviesSection.innerHTML+=`<artical class=cardMovie>
     <h3> ${item.movieName}</h3>
      <img class="picMovieInCard" src="${item.image}"><br>
      rating :${item.rating}<br>
      <a href="./index.html" target="_blank"><button>Direct viewing</button></a>
      <a href="../pages/item.html" target="_blank"><button class="showItem>show item</button></a>
      </artical>`  
    }
}

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
 

 for (const btn of showItem) {
     btn.onclick=()=>{
        for (const item of object.data) {
            sectionDetailes.innerHTML+=`<artical class=cardMovie>
         <h3> ${item.movieName}</h3>
          <img src="${item.image}"><br>
          rating :${item.rating}<br>
          <a href="./index.html" target="_blank"><button>Direct viewing</button></a>
          </artical>`
        }
     }
 }