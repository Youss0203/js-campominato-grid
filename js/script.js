/*L'utente clicca su un bottone che genererà una griglia di gioco quadrata. 
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe. 
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed 
emetto un messaggio in console con il numero della cella cliccata.
 */



const newGridElement = document.querySelector("section.main-content")


for(let i = 0; i <= 100; i++ ){

    const currentSquare = newSquareElement();
    const squareContent = i;

    currentSquare.innerHTML += `<span> ${squareContent} </span>`

newGridElement.appendChild(currentSquare)
}

function newSquareElement(){
    const articleElement = document.createElement("article");
    articleElement.classList.add("square");
    return articleElement;
}