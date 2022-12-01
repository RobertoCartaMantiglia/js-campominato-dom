// Consegna:
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// Attenzione: Nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
// Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.



// richiamo il bottone dal documento allo script 
const playButton = document.getElementById("button");


// FUNZIONE PER GENERARE  UN QUADRATO 
function getGridSquare (number){
    const gridSquare = document.createElement("div");
    
    gridSquare.classList.add("square");    

    gridSquare.addEventListener("click", function(){
        gridSquare.classList.toggle("clicked");
        console.log(number);
    })
    return gridSquare;
}
//funzione per generare numeri casuali 
function getRandomNumber(numMin, numMax) {
    const randomNumber = Math.floor( Math.random()* (numMax - numMin +1) + numMin);
    return randomNumber;
}


//inserisco l'evento al click del bottone play

playButton.addEventListener("click", function(){ 
    const containerGrid = document.querySelector("div.grid");
    containerGrid.classList.add("mb-5");   

    for(let i=1; i<=100; i++){
        const gridSquare = getGridSquare();
        containerGrid.append(gridSquare);
        gridSquare.append(i);     
    }
}, {once:true})   //{once:true} serve per far eseguire l'evento solo una volta... è vero solo una volta, quindi non si genereranno altre griglie




