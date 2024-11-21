function sumar(){
    let dato1=document.getElementById("Valor1").value;
    let dato2=document.getElementById("Valor2").value;
    let resultadosuma=parseFloat(dato1) + parseFloat(dato2);
    let resultadoTotal=document.getElementById("resultado");
    resultadoTotal.innerHTML="El resultado total es: "+resultadosuma;
 if(dato1==""||dato2==""){
    alert("El campo esta vacio");
 }
}
    
function restar(){
    let dato1=document.getElementById("Valor1").value;
    let dato2=document.getElementById("Valor2").value;
    let resultadoTotal=document.getElementById("resultado");
    let resultadosuma=parseFloat(dato1) - parseFloat(dato2);
 resultadoTotal.innerHTML="El resultado total es: "+resultadosuma;
 if(valor1==""||valor2==""){
    alert("El campo esta vacio");
 }
 else
    resultadoTotal.innerHTML="El resultado total es: " + resultadosuma;
}
function multiplicar(){
    let dato1=document.getElementById("Valor1").value;
    let dato2=document.getElementById("Valor2").value;
    let resultadoTotal=document.getElementById("resultado");
    let resultadosuma=parseFloat(dato1) * parseFloat(dato2);
 resultadoTotal.innerHTML="El resultado total es: "+resultadosuma;
 if(valor1==""||valor2==""){
    alert("El campo esta vacio");
 }
 else
    resultadoTotal.innerHTML="El resultado total es: " + resultadosuma;
}
function dividir(){
    let dato1=document.getElementById("Valor1").value;
    let dato2=document.getElementById("Valor2").value;
    let resultadoTotal=document.getElementById("resultado");
    let resultadosuma=parseFloat(dato1) / parseFloat(dato2);
 resultadoTotal.innerHTML="El resultado total es: "+resultadosuma;
 if(valor1==""||valor2==""){
    alert("El campo esta vacio");
 }
 else
    resultadoTotal.innerHTML="El resultado total es: " + resultadosuma;
}


  

