addEventListener("DOMContentLoaded", ()=>{

/// calcular el costo y descuento de los medicamentos 

///operacion basica *
    
let costoMed = Number(prompt(` Ingrese el costo del medicamento: `))
    
let des=0.10
    
    
/// multiplicar los datos integrados
    
let DescTotal = (des*costoMed) 
    
let costoTotal = (costoMed - DescTotal)
    
/// resultado y operacion 
    
console.log(`resultado:  ${costoTotal}s`)

})