const size = 16;
const blackColorButton = document.querySelector('black-draw');

function buildChildrenDiv() {
    let container = document.querySelector('.container');
    let containerWidth = container.clientWidth;
    let containerHeight = container.clientHeight;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let square = document.createElement('div');
            square.classList.add('square');
            square.style.boxSizing = "border-box"
            square.style.border = '1px black solid';
            square.style.height = `${containerHeight / size}px`;
            square.style.width = `${containerWidth / size}px`;
            container.appendChild(square);
        }   
    }
    let squareDraw = document.querySelectorAll('.square')  
    drawing(squareDraw); 
}

function drawing(item) {
    let changeColor = false;
    item.forEach((cell) => {
        cell.addEventListener('mousedown', () => {
            cell.style.backgroundColor = 'black';
            changeColor = true;
        });

        cell.addEventListener('mouseup', () => {
            changeColor=false;
        });

        cell.addEventListener('mouseover', () => {
            if(changeColor){
                cell.style.backgroundColor = "black";
            }
        });
        
        
    });
    
}

buildChildrenDiv();
