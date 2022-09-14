addEventListener("DOMContentLoaded", ()=>{

/// calcular la edad de las personas que solicitan trabajo

let nombre=prompt("aqui su nombre")

let nacimi=Number(prompt("su año de nacimiento"))

let actual=2022

let edad = actual-nacimi

/// resultdo y operacion

console.log(`persona entrevistada:  ${nombre}`); 

console.log(`edad de la persona: ${edad}`);

})