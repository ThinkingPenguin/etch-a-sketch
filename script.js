let size = 16;

function buildChildrenDiv() {
    const container = document.querySelector('.container');
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.boxSizing = "border-box"
            square.style.border = '1px black solid';
            square.style.height = `${containerHeight / size}px`;
            square.style.width = `${containerWidth / size}px`;
            container.appendChild(square);
            
        }   
    }
    
}

buildChildrenDiv();

