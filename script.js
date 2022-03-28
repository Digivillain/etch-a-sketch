const container = document.getElementById('container');
const cell = document.querySelector('.cell');
const sketchBtn = document.querySelector('.sketch');
const toggleBtn = document.querySelector('.toggle');

function gridCount() {
    let num = prompt('Please input the grid size. 1 - 100.');

    if (num <= 100) {
        container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;

        for (let i = 0; i < num * num; i++) {
            let divs = document.createElement('div');
            container.appendChild(divs).classList.add('cell');
        }
    }

    if (num > 100 || num === null || num === '') {
        alert('Try again. Only numbers 1 - 100.');
        gridCount();
    }
}
gridCount();

function clear(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

container.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = '#000000';
});

toggleBtn.addEventListener('click', (e) => {
    cell.classList.add('grid');
});

sketchBtn.addEventListener('click', (e) => {
    clear(container);
    gridCount();
});