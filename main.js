addEventListener("DOMContentLoaded", ()=>{

/// calcular el costo total y el valor del iva 

/// operacion basica *,/
    
let precio=Number(prompt("costo total del producto: "))
    
let iva = Number(prompt("Ingrese el porcentaje de IVA: "))
    
let precioIVA= precio * (iva/100)
    
let total = precio + precioIVA
    
/// resultado y operacion
    
console.log(`Precio con IVA:, ${total}`)

})