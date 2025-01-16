import { facebookNbr, myBody, twitterNbr, youtubeNbr } from "./variables.js";

function hello(){
    console.log("salut depuis la fctn hello");
}

// ! Fonction qui va incrémenter et afficher le résultat tout les X temps

function counter(e) {
    let joe = e.innerText
    // console.log(joe);
    
    e.innerText = 0
    // console.log(e.innerText);

    let interval = setInterval( ()=> {
        e.innerText ++

        if(e.innerText == joe){
            clearInterval(interval)
        }

    }, 0)

}


// ! Fonction qui va lancer le tout après 2 sec
document.addEventListener("DOMContentLoaded", () => {
    setTimeout( () => {
        counter(twitterNbr)
        counter(youtubeNbr)
        counter(facebookNbr)
    }, 2000)
})

// counter(twitterNbr)
// console.log(twitterNbr.innerText);
// console.log(youtubeNbr.innerText);
// console.log(facebookNbr.innerText);


export { hello }