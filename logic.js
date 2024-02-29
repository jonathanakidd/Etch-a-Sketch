let numberOfSquares = 16**2;
let grid = document.querySelector('.grid');

function createGrid(numberOfSquares) {
    for (let i = 0; i < numberOfSquares; i++){
        let div = document.createElement('div');
        div.innerHTML = 'This is a div';
        grid.appendChild(div);
    }
}

