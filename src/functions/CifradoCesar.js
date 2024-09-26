window.addEventListener("load", Inicio, true);

// Función de inicio que captura los datos y transforma el input MCLA en mayúsculas
export function Inicio() {
    const mensajeEnClaro = document.getElementById("mensaje_en_claro");
    const cifrarButton = document.getElementById("Cifrar");
    const descifrarButton = document.getElementById("Descifrar");
    const llaveInput = document.getElementById("llave");
    const mensajeDescifrado = document.getElementById("mensaje_descifrado");

    if (mensajeEnClaro) {
        mensajeEnClaro.addEventListener("keyup", function () {
            this.value = this.value.toUpperCase();
        }, true);
    } 

    if (cifrarButton) {
        cifrarButton.addEventListener("click", function () {
            let MCLA = mensajeEnClaro ? mensajeEnClaro.value : '';
            let Llave = parseInt(llaveInput ? llaveInput.value : '0', 10); // Convertir llave a número

            mensajeDescifrado.value = cifrar(MCLA, Llave);
        }, true);
    }

    if (descifrarButton) {
        descifrarButton.addEventListener("click", function () {
            let MCLA = mensajeEnClaro ? mensajeEnClaro.value : '';
            let Llave = parseInt(llaveInput ? llaveInput.value : '0', 10); // Convertir llave a número

            mensajeDescifrado.value = descifrar(MCLA, Llave);
        }, true);
    }
}

// Función de cifrado
// Recibe los valores de los input
export function cifrar(MCLA, Llave) {
    let resultado = "";
    let alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    Llave = ((Llave % 26) + 26) % 26; // Asegurarse que la llave esté dentro del rango

    if (MCLA) {
        for (let i = 0; i < MCLA.length; i++) {
            if (alfabeto.indexOf(MCLA[i]) !== -1) {
                let posicion = (alfabeto.indexOf(MCLA[i]) + Llave) % 26;
                resultado += alfabeto[posicion];
            } else {
                resultado += MCLA[i];
            }
        }
    }
    return resultado;
}

export function descifrar(MCLA, Llave) {
    let resultado = "";
    let alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    Llave = ((Llave % 26) - 26) % 26; // Asegurarse que la llave esté dentro del rango

    if (MCLA) {
        for (let i = 0; i < MCLA.length; i++) {
            if (alfabeto.indexOf(MCLA[i]) !== -1) {
                let posicion = (alfabeto.indexOf(MCLA[i]) - Llave + 26) % 26; // Asegurarse que la posición sea positiva
                resultado += alfabeto[posicion];
            } else {
                resultado += MCLA[i];
            }
        }
    }
    return resultado;
}

export function validarNumeros(event) {
    if (event.charCode >= 48 && event.charCode <= 57) {
        return true;
    }
    event.preventDefault(); // Esto evita que se ingrese un carácter no numérico
}