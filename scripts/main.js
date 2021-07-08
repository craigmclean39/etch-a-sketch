

//This is the container in which our grid will live
let canvasContainer = document.querySelector("#canvas-container");
let drawColor = "black";

let clearButton = document.querySelector("#clear");
let rainbowButton = document.querySelector("#rainbow");
let sizeUpButton = document.querySelector("#sizeup");
let sizeDownButton = document.querySelector("#sizedown");

clearButton.addEventListener("click", clearCanvas);
rainbowButton.addEventListener("click", toggleRainbow);


let rainbowMode = false;
let colorIndex = 0;
let colorArray = ["#f94144", "#f3722c", "#f8961e", "#f9844a", "#f9c74f", "#90be6d", "#43aa8b", "#4d908e", "#577590", "#277da1"];

let sizeArray = [8, 16, 32, 48, 64, 96];
let sizeIndex = 0;
sizeUpButton.addEventListener("click", function() { adjustCanvas(true) });
sizeDownButton.addEventListener("click", function() { adjustCanvas(false) });

function toggleRainbow()
{
    rainbowMode = !rainbowMode;
    if(rainbowMode)
    {
        rainbowButton.style.backgroundColor = "#FCBF49";
        rainbowButton.style.boxShadow = ".1rem .1rem #F77F00";
    }
    else
    {
        rainbowButton.style.backgroundColor = "#F77F00";
        rainbowButton.style.boxShadow = ".15rem .15rem #FCBF49";

    }
    
}

function colorGridItem(event) {
    if(event.target != undefined && event.target != null)
    {
        colorIt(event.target);  
    }
}

function colorGridItemTouchMove(event) {

    let touch = event.changedTouches[0];
    if(touch.clientX != undefined && touch.clientY != undefined)
    {
        let touchElement = document.elementFromPoint(touch.clientX, touch.clientY);
        if(touchElement != null && touchElement != undefined)
        {
            if(touchElement.className == "grid-element")
            {
                colorIt(touchElement);
            }
        }
    }
}

function colorIt(element)
{
    if(!rainbowMode)
    {
        element.style.backgroundColor = drawColor;
    }
    else
    {
        element.style.backgroundColor = colorArray[colorIndex];
        colorIndex++;

        if(colorIndex >= colorArray.length)
        {
            colorIndex = 0;
        }
    }
}

//Create a grid of divs with the specified number of columns and rows
function createCanvas(columns, rows)
{
    canvasContainer.style.width = `30vmax`;
    canvasContainer.style.height = `30vmax`;
    canvasContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr);`;
    canvasContainer.style.gridTemplateRows = `repeat(${rows}, 1fr);`;


    for(i = 0; i < columns; i++)
    {
        for(j = 0; j < rows; j++)
        {
            let div = document.createElement("div");
            div.className = "grid-element";

            //specify where in the grid the div will go
            div.style.gridRowStart = j + 1;
            div.style.gridColumnStart = i + 1;

            //add the eventHandlers
            div.addEventListener("mouseenter", colorGridItem);
            div.addEventListener("touchstart", colorGridItem);
            div.addEventListener("touchmove", colorGridItemTouchMove);

            canvasContainer.appendChild(div);

        }
    }
}

createCanvas(sizeArray[sizeIndex], sizeArray[sizeIndex]);

function clearCanvas() {

    let gridSquares = canvasContainer.getElementsByClassName("grid-element");
    for(const g of gridSquares)
    {
        if(g.className == "grid-element")
        {
            g.style.backgroundColor = "transparent";
        }
    }
}

function removeChildren(parent)
{
    while(parent.firstChild)
    {
        parent.removeChild(parent.firstChild);
    }
}

function adjustCanvas(up)
{
    let change = false;
    if(up)
    {
        if(sizeIndex < (sizeArray.length-1))
        {
            change = true;
            sizeIndex++;
        }
    }
    else
    {
        if(sizeIndex > 0)
        {
            change = true;
            sizeIndex--;
        }
    }

    if(change)
    {
        clearCanvas();
        removeChildren(canvasContainer);
        createCanvas(sizeArray[sizeIndex], sizeArray[sizeIndex]);
    }
}




