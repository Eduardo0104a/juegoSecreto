let numeroSecreto = 0; 
let numeroIntentos = 0;
let listaNumerosSorteados =[];
let numeroMaximo = 10;

function asignarTextoElementos(elementento, texto){
     let elementoHTML = document.querySelector(elementento);
     elementoHTML.innerHTML = texto;
     return;
}
function verificarIntento() {
     let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

     if(numeroDeUsuario === numeroSecreto){
          asignarTextoElementos('p',`Acertaste el número en ${numeroIntentos} ${numeroIntentos==1 ? 'intento' : 'intentos'}`);
          document.getElementById('reiniciar').removeAttribute('disabled');
     } else {
          // El usuario no acerto         
          if(numeroDeUsuario > numeroSecreto){
               asignarTextoElementos('p','El número secreto es menor');
          } else {
               asignarTextoElementos('p','El número secreto es mayor');
          }
          numeroIntentos++;
          limpiarCaja();
     }
     return;
}

function limpiarCaja() {
     document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
     let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

     console.log(numeroGenerado);
     console.log(listaNumerosSorteados);
     // Si ya sorteamos todos los numeros
     if(listaNumerosSorteados.length == numeroMaximo) {
          asignarTextoElementos('p','Ya se sortearon todos los numeros posibles');
     } else {
          // Si el numero generado esta incluido en la lista 
          if(listaNumerosSorteados.includes(numeroGenerado)){
               return generarNumeroSecreto();
          } else {
               listaNumerosSorteados.push(numeroGenerado);
               return numeroGenerado;
          }

     }
}

function condicionesIniciales() {
     asignarTextoElementos('h1','Juego del número secreto');
     asignarTextoElementos('p',`Escoge un número del 1 al ${numeroMaximo}`);     
     numeroSecreto = generarNumeroSecreto();
     numeroIntentos = 1;
}

function reiniciarJuego() {
     // limpiar la caja
     limpiarCaja();     
     // Indicar mensaje de inicio de intervalos de numeros 
     // Generar el número aleatorio 
     // Inicializar el número de intentos 
     condicionesIniciales();     
     // Deshabilitar el boton de nuevo jueg
     document.querySelector('#reiniciar').setAttribute('disabled','true');
     console.log(numeroSecreto);
}
condicionesIniciales();
