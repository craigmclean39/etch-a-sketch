

//This is the container in which our grid will live
let canvasContainer = document.querySelector("#canvas-container");


function colorGridItem(event) {
    console.log(event);
    event.target.style.backgroundColor = "black";
}

//Create a grid of divs with the specified number of columns and rows
function createCanvas(columns, rows)
{

    //let vw = document.documentElement.clientWidth;
    //let vh = document.documentElement.clientHeight;

    canvasContainer.style.width = `50vmin`;
    canvasContainer.style.height = `50vmin`;
    canvasContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr);`;
    canvasContainer.style.gridTemplateRows = `repeat(${rows}, 1fr);`;
    //canvasContainer.style.padding = "3rem";


    for(i = 0; i < columns; i++)
    {
        for(j = 0; j < rows; j++)
        {
            let div = document.createElement("div");
            div.className = "grid-element";

            //div.style.padding = ` ${((baseValue * 0.5)/columns/2)}px`;
            //div.style.padding = "1rem";
            //specify where in the grid the div will go
            div.style.gridRowStart = j + 1;
            div.style.gridColumnStart = i + 1;

            //add the eventHandler
            div.addEventListener("mouseenter", colorGridItem);
            div.addEventListener("touchstart", colorGridItem);

            canvasContainer.appendChild(div);

        }
    }
}

createCanvas(32, 32);

