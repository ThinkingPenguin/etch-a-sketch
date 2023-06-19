const size = 16;

const btnRainbow = document.querySelector('.rainbow-color'); 
const btnClear = document.querySelector('.erase');

let isMouseDown = false;
document.body.onmousedown = () => (isMouseDown = true);
document.body.onmouseup = () => (isMouseDown = false);


function takeBlackColor(cell){
    let btnBlack = document.querySelector('.black-btn');
    btnBlack.addEventListener("click", () => {
        cell.addEventListener('mouseover', () => {
            if (isMouseDown) {
                cell.style.backgroundColor = 'black';
            }
        });
    });
}

function resetGrid(cell){
    let btnClear = document.querySelector('.erase');
    btnClear.addEventListener("click", () => {
        cell.style.backgroundColor = '';
    });
}

function drawingRainbowColor(cell) {
    let maxVal = 0xFFFFFF;
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);

    btnRainbow.addEventListener("click", () => {
        cell.addEventListener('mouseover', () => {
            if (isMouseDown) {
                cell.style.backgroundColor = `#${randColor.toUpperCase()}`;
            }
        });
    });
    
}


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
            takeBlackColor(square);
            resetGrid(square);
            drawingRainbowColor(square);
            
        }   
    }
    //let squareDraw = document.querySelectorAll('.square');

    
    //drawing(squareDraw); 
}


/*
function drawing(item) {
    let isMouseDown = false;
    
    item.forEach((cell) => {
        cell.addEventListener('mousedown', () => {
            cell.style.backgroundColor = 'black';
            isMouseDown = true;
        }); 

        cell.addEventListener('mouseup', () => {
            isMouseDown=false;
        });

        cell.addEventListener('mouseover', () => {
            if(isMouseDown){
                cell.style.backgroundColor = "black";
            }
        });

        btnClear.addEventListener('click', () => {
            item.forEach((cell) => {
                cell.style.backgroundColor = '';
            });
        })
        
        
    });

}
*/
buildChildrenDiv();


/*
const size = 16;
const btnBlack = document.querySelector('.black-btn');
const btnRainbow = document.querySelector('.rainbow-color');
function buildGrid(sizeSquare) {
    let container = document.querySelector('.container');
    let containerWidth = container.clientWidth;
    let containerHeight = container.clientHeight;
    
    for (let i = 0; i < sizeSquare; i++) {
        for (let j = 0; j < sizeSquare; j++) {
            let square = document.createElement('div');
            square.classList.add('square');
            square.style.boxSizing = "border-box"
            square.style.border = '1px black solid';
            square.style.height = `${containerHeight / size}px`;
            square.style.width = `${containerWidth / size}px`;
            container.appendChild(square);
            btnBlack.addEventListener('click', drawBlack);
            btnRainbow.addEventListener('click', drawRainbow(square));
        }   
    }
    
    
    }

function drawBlack(){
	let items = [...document.querySelectorAll('.square')];
	let changeColor = false;
  items.forEach(item => {
  	item.addEventListener('mousedown',() => {
    	item.style.backgroundColor = "black";
      changeColor = true;
    });
    item.addEventListener('mouseup', () => {
    	changeColor=false;
    });
    
    item.addEventListener('mouseover', () => {
    	if(changeColor){
      	item.style.backgroundColor = "black";
      }
    });
    
  });	
}

function randColors() {
    let hexaColor = "0123456789ABCDEF"
    let hashTag = "#"
    let colOp = "";
    for (let i = 0; i < 6; i++) {
        colOp += hexaColor[Math.floor(Math.random() * 16)];
    };
    let newColor = hashTag + colOp;
    console.log(newColor);
    return newColor;

}

function drawRainbow(item){
  let items = [...document.querySelectorAll('.square')];
  let changecolor = false;

  items.forEach((item) => {
  	item.addEventListener('mousedown',() => {
      item.style.backgroundColor = randColors();
      changeColor = true;
    });
    
    item.addEventListener('mouseup', () => {
    	changeColor=false;
    });
    
    item.addEventListener('mouseover', () => {
    	if(changeColor){
      	item.style.backgroundColor = randColors();
      }
    });
    
  });	

}
 
buildGrid(size);


*/
