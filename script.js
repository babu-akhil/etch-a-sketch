let numberOfBoxes = 50
let boxSideLength = 75/numberOfBoxes;
let gridTemplateWidth = `${boxSideLength}vw `.repeat(numberOfBoxes).slice(0,-1)
let gridTemplateHeight = `${boxSideLength}vh `.repeat(numberOfBoxes).slice(0,-1)
let container
console.log(gridTemplateWidth)

function makeGrid(numberOfBoxes) {
    if (container) {container.remove()};
    container = document.createElement('div')
    let divArray = []
    container.className = 'container'
    container.style.display = 'grid'
    container.style.height = '75vh';
    container.style.width = '75vw';
    boxSideLength = 75/numberOfBoxes;
    gridTemplateWidth = `${boxSideLength}vw `.repeat(numberOfBoxes).slice(0,-1)
    gridTemplateHeight = `${boxSideLength}vh `.repeat(numberOfBoxes).slice(0,-1)
    container.style.gridTemplateColumns = gridTemplateWidth
    container.style.gridTemplateRows =  gridTemplateHeight
    

    for (let i=0;i<numberOfBoxes**2;i++) {
        let tempDiv = document.createElement('div');
        tempDiv.className = 'diva';
        tempDiv.style.width = `${boxSideLength}vw`;
        tempDiv.style.height= `${boxSideLength}vh`;
        divArray.push(tempDiv);
        container.appendChild(tempDiv);
    }
    return [container, divArray]
}
let [newContainer, newDivArray] = makeGrid(numberOfBoxes);
let body = document.body
body.appendChild(newContainer)
addPaint(newDivArray)

console.log(newContainer)

function addPaint(divArray) {
    divArray.forEach(box => {

        box.addEventListener('mouseover', () => {
            let randomColorvalues = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)]
            box.style.backgroundColor = `rgb(${randomColorvalues[0]},${randomColorvalues[1]},${randomColorvalues[2]})`
        })

        box.addEventListener('touchstart', () => {
            let randomColorvalues = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)]
            box.style.backgroundColor = `rgb(${randomColorvalues[0]},${randomColorvalues[1]},${randomColorvalues[2]})`
        })

        box.addEventListener('touchmove', () => {
            let randomColorvalues = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)]
            box.style.backgroundColor = `rgb(${randomColorvalues[0]},${randomColorvalues[1]},${randomColorvalues[2]})`
        })
    
    });
}

clearButton = document.getElementById('clear')
clearButton.addEventListener('click', () => {
    newDivArray = []
    do{
        numberOfBoxes = parseInt(window.prompt("Enter Number of Boxes per Side(Max: 200)", ""), 10);
    }while(isNaN(numberOfBoxes) || numberOfBoxes > 200 || numberOfBoxes < 1);
    console.log(numberOfBoxes)
    containerAndDivs = makeGrid(numberOfBoxes);
    body.appendChild(containerAndDivs[0])
    addPaint(containerAndDivs[1])
    console.log(containerAndDivs)
})