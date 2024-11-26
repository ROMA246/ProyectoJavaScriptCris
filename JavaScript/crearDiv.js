let boton=document.getElementById("boton");
boton.addEventListener("click",function(event){
    event.preventDefault();

    let nuevoid=document.createElement("div");
    nuevoid.innerHTML="DIV CREADO";
   
    let resultado=document.getElementById("resultadoDiv");
    resultado.appendChild(nuevoid);
    nuevoid.classList.add("borde-negro")
    let contenido=document.getElementById("botones");
    contenido.appendChild(nuevoid);
})