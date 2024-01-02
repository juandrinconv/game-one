let opcion_ingresada_pc
let opcion_ingresada_jugador
let elementos_empate = 0
let elementos_victoria = 0
let elementos_derrota = 0

function eleccion_pc() {
    opcion_ingresada_pc = Math.floor(Math.random()*(3)+1)
    const resultado_pc = document.getElementById("eleccion_pc")

    switch(opcion_ingresada_pc) {
        case 1:
            resultado_pc.innerText = "¡El Pc Escogió Piedra!"
            break
        case 2:
            resultado_pc.innerText = "¡El Pc Escogió Papel!"
            break
        case 3:
            resultado_pc.innerText = "¡El Pc Escogió Tijera!"
            break
        default:
            alert("Opción no válida, elija del 1 al 3")
            break
        }

}

function verificar_seleccion_jugador() {
    opcion_ingresada_jugador = parseInt(document.getElementById("caja_eleccion_jugador").value)
    const resultado_pc = document.getElementById("eleccion_jugador")

    switch(opcion_ingresada_jugador) {
        case 1:
            resultado_pc.innerText = "¡El Jugador Escogió Piedra!"
            break
        case 2:
            resultado_pc.innerText = "¡El Jugador Escogió Papel!"
            break
        case 3:
            resultado_pc.innerText = "¡El Jugador Escogió Tijera!"
            break
        default:
            alert("Opción no válida, elija del 1 al 3")
            break
        }
}

function war() {
    if (opcion_ingresada_jugador == opcion_ingresada_pc) {
        elementos_empate++
        document.getElementById("contador_empate").innerText = elementos_empate

    } else if (opcion_ingresada_jugador - opcion_ingresada_pc == -2 || opcion_ingresada_jugador - opcion_ingresada_pc == 1) {
        elementos_victoria++
        document.getElementById("contador_victoria").innerText = elementos_victoria

    } else {
            elementos_derrota++
            document.getElementById("contador_derrota").innerText = elementos_derrota
        }
} 


