

//This is the container in which our grid will live
let canvasContainer = document.querySelector("#canvas-container");


function colorGridItem(event) {
    console.log(event.target.style);

    event.target.style.backgroundColor = "black";
}

//Create a grid of divs with the specified number of columns and rows
function createCanvas(columns, rows)
{

    let vw = document.documentElement.clientWidth;
    let vh = document.documentElement.clientHeight;



    for(i = 0; i < columns; i++)
    {
        for(j = 0; j < rows; j++)
        {
            let div = document.createElement("div");
            div.className = "grid-element";

            let baseValue = 0;
            if(vw > vh)
            {
                baseValue = vw;
            }
            else
            {
                baseValue = vh;
            }
            div.style.padding = ` ${((baseValue * 0.9)/columns/2)}px`;

            //specify where in the grid the div will go
            div.style.gridRowStart = j + 1;
            div.style.gridColumnStart = i + 1;

            //add the eventHandler
            div.addEventListener("mouseenter", colorGridItem);

            canvasContainer.appendChild(div);

        }
    }
}

createCanvas(16, 16);

