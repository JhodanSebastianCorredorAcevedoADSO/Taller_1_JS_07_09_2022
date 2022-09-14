addEventListener("DOMContentLoaded", ()=>{

/// calcular el sueldo de un empleado 

/// operacion bvasica +,*
    
let dias_trabajo=Number(prompt("dias tranajados al mes: "))
    
let nombr=prompt("nombre del empleado: ")
    
let hrs=8
    
let pago_horas=15300
    
/// multiplicar los datos ingresados

let dia=(pago_horas*hrs) 
    
/// multiplicar los datos ingresados

let mult=(dia*dias_trabajo) 
    
/// resultado y operacion
    
console.log(`pago del mes:, ${mult}`)

})