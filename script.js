const container = document.getElementById('container');
const cell = document.querySelector('cell');
const btn = document.querySelector('.num-prompt');

function gridCount() {
    let num = prompt('How large would you like the grid to be? Please input one number.');

    
    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;

    for (let i = 0; i < num * num; i++) {
        let divs = document.createElement('div');
        container.appendChild(divs).classList.add('cell');
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

btn.addEventListener('click', (e) => {
    clear(container);
    gridCount();
});