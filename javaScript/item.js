// async function getId(id) {
//      try {
//         return await fetch(`https://moviesmern.herokuapp.com/movies/movie/${id}`)
//              .then((response) => response.json())
//      }
//      catch (error) {
//          return error
//      }
//    } 
   getId(location.search.substr(4))
     .then(movie =>{
         DetailsMovie(movie)})
     .catch(rej => console.log(rej))

    //  function DetailsMovie(object){
    //      let item=object.data
    //       sectionDetailesPageItem.innerHTML+=`<artical class="articalMovie">
    //      <h3> ${item.movieName}</h3>
    //       <img src="${item.image}"><br>
    //       rating :${item.rating}<br>
    //       data :${item.date}<br>
    //       linkToMovie :${item.linkToMovie}<br>
    //       synopsis :${item.synopsis}<br>
    //       </artical>`
    //   }
