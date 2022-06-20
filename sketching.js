const container = document.querySelector('.container');
const button = document.querySelector('.size');
let numsOfSquares = 16;
let userAmount;

// this function displays the grid and inside of the nested loop
// there is an addEventListener function which its job is: if the mouse
// hover over the grid it will change the background of the each square
// it hovers over
function displayingAMetrix(n){
    for(let row = 0; row < n; row++){
        const containerOfSquares = document.createElement('div');
        containerOfSquares.classList.add('containerOfSquares');

        for(let colu = 0; colu < n; colu++){
            let divs = document.createElement('div');
            divs.classList.add('squares');
            // divs.style.background = '#969696';
            containerOfSquares.appendChild(divs);
            let width = 500 / parseInt(numsOfSquares);
            let height = 500 / parseInt(numsOfSquares);
            divs.style.width = `${width}px`;
            divs.style.height = `${height}px`;
            divs.addEventListener('mouseover', () => setColorToEachSquare(divs));
        }
        container.appendChild(containerOfSquares);       
    }
}

// this function takes the value that is returned by the getRandomColors() function
// and set this random color on the background of the square when the mouse hovers over 
// each square
function setColorToEachSquare(divs){
    divs.style.backgroundColor = getRandomColors();
}

// this function returns a random color that is chosen from an array
function getRandomColors(){
    const randomColor = ['#aaff88', '#abff88', '#f0ff33', '#dd88ff',
                         '#390022', '#5151ff', '#04fad6', '#ff6929'];

    return randomColor[Math.floor(Math.random() * randomColor.length)];
}

// this event listener function prompts u to input a number that would change 
// the size of the grid.
button.addEventListener('click', () => {

    userAmount = prompt("What is the size of the grid you would like to see?");
    if(userAmount > 100){
        userAmount = prompt("Please enter a number less than or equal 100");
    }
    numsOfSquares = userAmount;

    while(container.hasChildNodes()){
        container.removeChild(container.firstChild);
    }
    displayingAMetrix(parseInt(numsOfSquares));
});

displayingAMetrix(numsOfSquares);

