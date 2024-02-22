function adivinarNumero() {
    let numeroSecreto = Math.floor(Math.random() * 100) + 1; 
    let intentos = [];
    while (true) {
        let intento;
        do {
            let input = prompt("Adivinar el número secreto del 1 al 100:");
            intento = parseFloat(input);
        } while (isNaN(intento) || intento < 1 || intento > 100 || !Number.isInteger(intento)); 

        intentos.push(intento);

        if (intento === numeroSecreto) {
            console.log("Felicidades, adivinaste el número secreto.");
            console.log("Lista de números introducidos:", intentos.join(", "));
            break;
        } else {
            console.log("Ups, el número secreto es incorrecto, vuelve a intentarlo.");
        }
    }
}
