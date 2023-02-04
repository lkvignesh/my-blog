const inp=document.getElementById("n1");
const inpu=document.getElementById("n2");
const inpt=document.getElementById("n3");
const tarea=document.getElementById("out");
const tarea1=document.getElementById("out1");
const tarea2=document.getElementById("in");
const tarea3=document.getElementById("io");
const disy=document.getElementById("w");
const sumt=document.getElementById("st");
sumt.addEventListener("click",function onclick(event){
    event.preventDefault();
    tarea.style.display="block";
    disy.style.display="block";
    tarea1.innerHTML=inp.value;
    tarea2.innerHTML=inpu.value;
    tarea3.innerHTML=inpt.value;
})


