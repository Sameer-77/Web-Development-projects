let btn = document.querySelector("button");

btn.addEventListener("click", function() {
    let h2 = document.querySelector("h2");
    let colorGenerated = getRandomColor();
    h2.innerText = colorGenerated;

    let box = document.getElementById("box");
    box.style.backgroundColor = colorGenerated;
});


function getRandomColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}