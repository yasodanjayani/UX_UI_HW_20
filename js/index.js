console.log("index.js file loaded properly");

$("#footer").on("click", function(){
    console.log("hovered over footer");
});

function hover(img, location){
    img.src = location
}

function hoverOut(img){
    img.src = "Images/Grey_arrow.png";
}

function navHover(div){
    div.style = "color:blue;"
}

function navHoverOut(div){
    div.style = "color:black;"
}