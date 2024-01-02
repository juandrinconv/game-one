let pc = 0
while (!(pc >= 1 && pc <= 3)) {
        pc = parseInt(prompt("PC; Seleccione Piedra, Papel o Tijera: "))
        switch (pc) {
            case 1:
                alert("PC ha seleccionado Piedra 🥌")
                break
            case 2:
                alert("PC ha seleccionado Papel 🧻")
                break
            case 3:
                alert("PC ha seleccionado Tijera ✂")
                break
            default:
                alert("Por favor, seleccione 1, 2 o 3")
                break;
        }
    }   


if (pc == opcion) {
    alert("Empate")
} else if (opcion - pc == -2 || opcion - pc == 1) {
    alert("Ganaste contra el PC")
} else {
    alert("Perdiste contra el PC, empezará el juego de nuevo")
    
}

function eleccion_Jugador() {
    do {
        opcion = parseInt(prompt("Jugador; Seleccione la opción deseada: "))
        switch(opcion) {
    
            case 1:
                alert("Usted ha seleccionado Piedra 🥌")
                break
            case 2:
                alert("Usted ha seleccionado Papel 🧻")
                break
            case 3:
                alert("Usted ha seleccionado Tijera ✂")
                break
            default:
                alert("Opción no válida, elija del 1 al 3")
                break
        }
    } while (!(opcion >= 1 && opcion <=3))
}