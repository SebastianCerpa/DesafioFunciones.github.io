const ele = document.getElementById("ele1");
ele.style.backgroundColor = "green";
btn = document.getElementById("boton");

btn.addEventListener("click",() => {
    ele.style.backgroundColor = "yellow";
});