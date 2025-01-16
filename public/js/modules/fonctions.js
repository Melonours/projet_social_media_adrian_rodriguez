import { facebookNbr, myBody, twitterNbr, youtubeNbr } from "./variables.js";

function hello(){
    console.log("salut depuis la fctn hello");
}

// ! Fonction qui va incrémenter et afficher le résultat
// * Fonctionne mais ne se termine pas au même moment
// function counter(e) {
//     let joe = e.innerText
//     // console.log(joe);
    
//     e.innerText = 0
//     // console.log(e.innerText);

//     let interval = setInterval( ()=> {
//         e.innerText ++

//         if(e.innerText >= joe){
//             clearInterval(interval)
//         }

//     }, 0)

// }

// document.addEventListener("DOMContentLoaded", () => {
//     setTimeout( () => {
//         counter(twitterNbr)
//         counter(youtubeNbr)
//         counter(facebookNbr)
//     }, 2000)
// })




// ! Fonction qui va incrémenter et afficher le résultat
function count(value,e){
    let startingNbr = 0;
    let animationNbr = value / 100;
    
    let interval = setInterval(()=>{
      if(startingNbr >= value - animationNbr){
        clearInterval(interval);
      }
      startingNbr+=animationNbr;
      e.innerText = Math.round(startingNbr);
    },30);
  };

// ! Fonction qui va lancer le tout après 2 sec
document.addEventListener("DOMContentLoaded", () => {
    setTimeout( () => {
        count(12000,twitterNbr)
        count(5000, youtubeNbr)
        count(7500, facebookNbr)
    }, 2000)
})


export { hello }