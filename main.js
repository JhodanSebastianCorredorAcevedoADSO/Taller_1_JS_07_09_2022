addEventListener("DOMContentLoaded", ()=>{

/// calcular el tiempo estimado para el llenado de un deposito

/// operacon basica +
    
let pi=3.1416
    
let rad=18
    
let h=20
    
let t=10
    
let mul=(pi*(rad**2)*h)
    
let ti=(t*60)
    
let q=(mul/ti)
    
/// resultado y operacion
    
console.log(`volumen:, ${mul}`)

console.log(`tiempo en segundos:, ${ti}`)
 
console.log(`el caudal es:, ${q}`)

})