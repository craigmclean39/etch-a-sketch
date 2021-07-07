

//This is the container in which our grid will live
let canvasContainer = document.querySelector("#canvas-container");
let drawColor = "black";


function colorGridItem(event) {
    //console.log(event);

    if(event.target != undefined && event.target != null)
    {
        event.target.style.backgroundColor = drawColor;
    }
}

function colorGridItemTouchMove(event) {

    //console.log(event);
    let touch = event.changedTouches[0];
    //console.log(touch.clientX + " " + touch.clientY);
    if(touch.clientX != undefined && touch.clientY != undefined)
    {
        let touchElement = document.elementFromPoint(touch.clientX, touch.clientY);
        if(touchElement != null && touchElement != undefined)
        {
            if(touchElement.className == "grid-element")
            {
                touchElement.style.backgroundColor = drawColor;
            }
        }
    }
}

//Create a grid of divs with the specified number of columns and rows
function createCanvas(columns, rows)
{

    //let vw = document.documentElement.clientWidth;
    //let vh = document.documentElement.clientHeight;

    canvasContainer.style.width = `40vmax`;
    canvasContainer.style.height = `40vmax`;
    canvasContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr);`;
    canvasContainer.style.gridTemplateRows = `repeat(${rows}, 1fr);`;
    canvasContainer.style.margin = "1rem";


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

createCanvas(32, 32);

