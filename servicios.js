let totalServicios = 0
let servicioSeleccionado = parseInt(prompt('Ingrese el número del servicio que desea adquirir: 1.Community Manager / 2.E-Commerce / 3.Cobertura Fotográfica / 4.Desarrollo Web'))
let sumarServicio = true
let decision

while (sumarServicio === true) {
    if (servicioSeleccionado === 1) {
        totalServicios = totalServicios + 30000
    }
    else if (servicioSeleccionado === 2) {
        totalServicios = totalServicios + 50000
    }
    else if (servicioSeleccionado === 3) {
        totalServicios = totalServicios + 25000
    }
    else if (servicioSeleccionado === 4) {
        totalServicios = totalServicios + 70000
    }
    else{
        servicioSeleccionado = parseInt(prompt('Ingrese un servicio existente: 1-Community Manager / 2-E-Commerce / 3-Cobertura Fotográfica / 4-Desarrollo Web'))
        continue
    }

    decision = parseInt('¿Querés sumar otro servicio? 1.Si / 2.No')
    if (decision === 1) {
        servicioSeleccionado = parseInt(prompt('Ingrese el número del servicio que deseas sumar: 1.Community Manager / 2.E-Commerce / 3.Cobertura Fotográfica / 4.Desarrollo Web'))
    }
    else if (decision === 2) {
        sumarServicio = false
    }
}

alert('El valor estimado del servicio a consultar es:' +totalServicios)

function descuentoEnServicios(valor){
    let descuento = 0
    if(valor<=75000){
        descuento = 10
    }
    else if(valor<=100000){
        descuento = 20
    }
    else{
        descuento = 25
    }

    let valorDescuento = valor *(descuento/100)
    valor = valor - valorDescuento 
    return valor
}

let valorConDescuento = descuentoEnServicios(totalServicios)
alert('El valor estimado de los servicios a consultar con descuento es:' +valorConDescuento)

