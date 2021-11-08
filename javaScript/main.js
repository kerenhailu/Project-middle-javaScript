// async function allMovies() {
//   try {
//     return await fetch(`https://moviesmern.herokuapp.com/movies/all`)
//     .then((res) => {
//         res.json();
//       }
//     );
//   } catch (error) {
//     return error;
//   }
// }
// allMovies()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((rej) => {
//     console.log(rej);
//   });
// ===========================================================

// async function allMovies() {
//     try {
//         return await fetch('https://moviesmern.herokuapp.com/movies/all')
//             .then((response) => response.json())
//     }
//     catch (error) {
//         return error
//     }
// }
// allMovies()
//     .then(res => console.log(res))
//     .catch(rej => console.log(rej))
    // ===========================================
//!ברטיסים
// function  printDitels(object){
//     for (const item of object.data) {
//       cardMovies.innerHTML+=`<artical>
//       ${item.movieName}
//       <img src="${item.image}">
//       ${item.rating}</artical>`
//     }
//   }
// async function allMovies() {
//   try {
//       return await fetch('https://moviesmern.herokuapp.com/movies/all')
//           .then((response) => response.json())
//   }
//   catch (error) {
//       return error
//   }
// }
// allMovies()
//   .then(res => printDitels(res))
//   .catch(rej => console.log(rej))