let pinturaBlanca = 100;
let pinturaNegra = 100;
const pinturaXambiente = 20;

while((pinturaBlanca > 0) && (pinturaNegra > 0)) {
    let pinturablancaXambiente = Number(prompt("Ambientes con pintura blanca"));
    let pinturanegraXambiente = Number(prompt("Ambientes con pintura negra"));

    if (pinturablancaXambiente < pinturanegraXambiente ){
        pinturaBlanca = pinturaBlanca - (pinturablancaXambiente * pinturaXambiente)
        console.log("Te queda " + pinturaBlanca + " de pintura blanca");
    } 
    else { 
        pinturaNegra = pinturaNegra - (pinturanegraXambiente * pinturaXambiente)
        console.log("Te queda " + pinturaNegra + " de pintura negra") 
    }

    function ambientesPintados(ambientesBlanco, ambientesNegro){
    resultado = ambientesBlanco + ambientesNegro
    }
    function mostrar(mensaje){
        console.log(mensaje)
    }

    ambientesPintados(pinturablancaXambiente, pinturanegraXambiente )
    mostrar(resultado)
}
