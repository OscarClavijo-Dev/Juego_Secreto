//Metodo DOM = permite conectar el HTML

//let titulo = document.querySelector('h1'); 
//titulo.innerHTML = 'Juego del número secreto';

//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un número del 1 al 10';

// Eventos:  movimientos o clicks
// la funcion encapsula una accion que queremos que haga 
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados =[];
let numeroMaximo = 10;


console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento); 
    elementoHTML.innerHTML = texto;
    return;
}

//function verificarIntento() {
    //let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   // console.log (typeof(numeroSecreto));
   // console.log (numeroSecreto);
  //  console.log (typeof(numeroSecreto));
  //  console.log (numeroDeUsuario);
  //  console.log (numeroDeUsuario == numeroSecreto);
  //  return;
//}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled'); 
        
        
        // el usuario no acerto
    } else { 
        if(numeroDeUsuario > numeroSecreto){

            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
    
}


function generarNumeroSecreto() {
   // return Math.floor(Math.random()*10)+1;
    //return numeroSecreto;
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

   console.log(numeroGenerado);
   console.log(listaNumerosSorteados);

    //Si ya sorteamos todos los números
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {

        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
           } else{
                listaNumerosSorteados.push(numeroGenerado);
                return numeroGenerado;
        
           }
              

    }
    // Si el numero generado esta incluido en la lista
       
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del Número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    condicionesIniciales();
    //Inicializar el número de intentos
    //deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}

condicionesIniciales();
