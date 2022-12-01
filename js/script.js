// Consegna:
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro
// ed emetto un messaggio in console con il numero della cella cliccata.



// recupero il contenitore della griglia dal documento: 
// const containerGrid = document.querySelector("div.grid");

// creo il quadrato/casella
// const gridSquare = document.createElement("div");

// aggiungo la classe "square" che ho preparato in css per vederne il comportamento 
// gridSquare.classList.add("square");

// procedo ad "appenderlo" al parent 
// containerGrid.append(gridSquare);

// inserisco l'elemento square all'interno di un ciclo for per aggiungere il numero dei quadrati che mi serviranno (100)


// richiamo il bottone dal documento allo script 
const playButton = document.getElementById("button");

//inserisco l'evento al click

function getGridSquare (number){
    const gridSquare = document.createElement("div");
    
    gridSquare.classList.add("square");    

    gridSquare.addEventListener("click", function(){
        gridSquare.classList.toggle("clicked");
        console.log(number);
    })
    return gridSquare;
}

playButton.addEventListener("click", function(){ 
    const containerGrid = document.querySelector("div.grid");
    containerGrid.classList.add("mb-5");   

    for(let i=1; i<=100; i++){
        const gridSquare = getGridSquare();
        containerGrid.append(gridSquare);
        gridSquare.append(i);     
    }
}, {once:true})   //{once:true} serve per far eseguire l'evento solo una volta... è vero solo una volta, quindi non si genereranno altre griglie




