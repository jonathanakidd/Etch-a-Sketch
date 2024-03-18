let grid = document.querySelector('.grid'); 
function createGrid(numberOfSquares) {
    grid.innerHTML = '';
    let  squares = numberOfSquares**2;
    grid.style.height = grid.offsetWidth + 'px'
    let setWidth  =  100/numberOfSquares;
    for (let i = 0; i < squares; i++){
        let div = document.createElement('div');
        grid.appendChild(div);
        div.style.display = 'flex';
        div.style.flexBasis = 'calc('+setWidth +'% - 2px';
        div.style.height = 'calc('+setWidth +'% - 2px'
        div.addEventListener('mouseover', (event) => {
            div.style.backgroundColor = 'yellow'
        });

    }
};


let btn = document.querySelector('.btn');
btn.addEventListener('click', (event) => {
    let numberOfSquares = null;
    while ((numberOfSquares >= 1 && numberOfSquares <= 100) == false) {
        numberOfSquares = prompt("Please input a number of 1 through 100.")
        if (numberOfSquares > 0 && numberOfSquares < 101) {
            createGrid(numberOfSquares);
        }
        else {
            let numberOfSquares = prompt("Please input a number of 1 through 100.")
        }
    }
});
