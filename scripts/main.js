

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

            //add the eventHandler
            div.addEventListener("mouseenter", colorGridItem);
            div.addEventListener("touchstart", colorGridItem);
            div.addEventListener("touchmove", colorGridItem);

            canvasContainer.appendChild(div);

        }
    }
}

createCanvas(32, 32);

