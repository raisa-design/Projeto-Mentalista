


function chutar(){
  var numeroSecreto= parseInt(Math.random () * 11);
  console.log(numeroSecreto)
  var elementoResultado = document.getElementById('resultado')
  var chute = parseInt(document.getElementById('valor').value)
  console.log(chute);

  if (chute== numeroSecreto){
    elementoResultado.innerHTML='Você acertou'
    
  } else if( chute>10 || chute<0){
    elementoResultado.innerHTML='Digite números de 0 a 10'
  }else {
    elementoResultado.innerHTML='Você errou, o número secreto era ' + numeroSecreto
  }

}