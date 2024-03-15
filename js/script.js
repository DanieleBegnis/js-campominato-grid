//L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
//Ogni cella ha un numero progressivo, da 1 a 100.
//Ci saranno quindi 10 caselle per ognuna delle 10 righe.
//Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


const mainGrid = document.querySelector('#grid');
console.log(mainGrid);

//creo la griglia facendo un ciclo 100 volte e appendendo alla griglia dei quadrati

for(let i = 1; i <= 100; i++) {
    const newSquare = generateSquare(i);
    mainGrid.append(newSquare);
}



//funzione che crea un quadrato
function generateSquare(number) {
    const newSquare = document.createElement('div');
    newSquare.classList.add('square');
    newSquare.innerHTML = `<span>${number}</span>`;

    //evento del colore sui quadrati
    newSquare.addEventListener('click', function() {
    this.classList.add('blue');
    });
    
    return newSquare;
};

