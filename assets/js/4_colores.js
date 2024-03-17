const ele1 = document.getElementById("c1");
const ele2 = document.getElementById("c2");
const ele3 = document.getElementById("c3");
const ele4 = document.getElementById("c4");

ele1.addEventListener("click",() => {ele1.style.backgroundColor = pintarNegro()});
ele2.addEventListener("click",() => {ele2.style.backgroundColor = pintarNegro()});
ele3.addEventListener("click",() => {ele3.style.backgroundColor = pintarNegro()});
ele4.addEventListener("click",() => {ele4.style.backgroundColor = pintarNegro()});

pintarNegro = () => "black";