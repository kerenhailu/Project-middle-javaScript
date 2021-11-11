async function allMovies(api) {
    try {
      showGif();
      return await fetch(`${api}`).then(
        (response) => response.json()
      );
      // return {data:listOfMovies}
    } catch (error) {
      return error;
    } finally {
      haidGif();
    }
  }
  
// ===================================
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
          console.log(movieWithAllTheDetails(object));
    }
  }
// ======================================
function printDitelsToCard(object) {
    for (const item of object.data) {
      cardMoviesSection.innerHTML += `<artical class=cardMovie>
          <a href="../pages/item.html?id=${item._id}" target="_blank"><h3> ${item.movieName}</h3></a>
        <img src="${item.image}"><br>
        rating :${item.rating}<br>
        <button id="${item._id}" class="delete" onclick="deleteMovie(this.id)">Delete</button> 
        </artical>`;
    }
  }
  function showGif() {
    cardMoviesSection.innerHTML = `<img id="imgGif" src=" https://www.wardhaughproperty.co.uk/wp-content/themes/waas-theme-a-parent/assets/img/loading.gif">`;
  }
  function haidGif() {
    imgGif.style.display = "none";
  }
//   =======================================
function DetailsMovie(object){
    let item=object.data
     sectionDetailesPageItem.innerHTML+=`<artical class="articalMovie">
    <h3> ${item.movieName}</h3>
     <img src="${item.image}"><br>
     rating :${item.rating}<br>
     data :${item.date}<br>
     linkToMovie :${item.linkToMovie}<br>
     synopsis :${item.synopsis}<br>
     </artical>`
 }
    
//   ========================================
function DetailsMovieSpecific(object){
    for (const item of object.data) {
    // let item=object.data
    cardMoviesSection.innerHTML=`<artical class="articalMovie">
    <h3> ${item.movieName}</h3>
     <img src="${item.image}"><br>
     rating :${item.rating}<br>
     data :${item.date}<br>
     synopsis :${item.synopsis}<br>
     </artical>`
  }
  }
// ======================================
//!בדף של הITEM
async function getId(id) {
    try {
       return await fetch(`https://moviesmern.herokuapp.com/movies/movie/${id}`)
            .then((response) => response.json())
    }
    catch (error) {
        return error
    }
  } 
  // ======================================
  //!לדף של הטבלה
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