// string que será invertida
let texto = "Exemplo de string";

// string vazia para armazenar a inversão
let textoInvertido = "";

// inverter os caracteres
let contador = texto.length - 1;

while (contador >= 0) {
    textoInvertido = textoInvertido + texto[contador];
    contador = contador - 1;
}

// string original e a string invertida
console.log("Texto original: " + texto);
console.log("Texto invertido: " + textoInvertido);
