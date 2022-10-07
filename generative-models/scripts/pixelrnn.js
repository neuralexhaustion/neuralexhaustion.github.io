const container = document.querySelector('.container');
const button = document.createElement('button');
let size;



var mouseDown = false;
document.body.onmousedown = function () {
    mouseDown = true;
};
document.body.onmouseup = function () {
    mouseDown = false;
};

button.addEventListener('click', function () {
    container.innerHTML = '';
    size = prompt('what size do you want your grid to be: ');
    checkSize(size);
});

const gridList = []

function canvas(size) {
    container.style.setProperty('--grid-column', size);
    container.style.setProperty('--grid-row', size);

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        if (i < 12)  cell.style.background = `red`;
        if (i == 12) cell.style.background = `blue`;
        gridList.push(cell);
        cell.addEventListener('mouseover', function () {
            for (let j = 0; j < i; j++) {
                gridList[j].style.backgroundColor = `red`;
            }

            for (let j = i; j < size*size; j++) {
                gridList[j].style.backgroundColor = `rgb(14, 17, 23)`;
            }

            cell.style.backgroundColor = `blue`; 
            
        });

        cell.addEventListener('mouseleave', function () {
            for (let j = 0; j < size * size; j++) {
                if (j < 12)
                    gridList[j].style.backgroundColor = `red`;
                
                else if (j > 12)
                gridList[j].style.backgroundColor = `rgb(14, 17, 23)`;
                
                else 
                    gridList[j].style.backgroundColor = `blue`;
                
            }


            
        });
        container.appendChild(cell).className = 'grid-items';
        


    }
}

canvas(5);


