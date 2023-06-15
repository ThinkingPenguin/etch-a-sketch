const container = document.querySelector('.container');


for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const square = document.createElement('div');
        container.appendChild(square);
        square.classList.add('square');
        square.style.width = 'fit-content';
        square.style.border = '1px black solid';
        
    }   
}