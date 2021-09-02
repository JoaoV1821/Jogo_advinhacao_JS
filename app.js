const main = () => {
    numero_sorteado = Math.floor(Math.random()*10);

    numero_escolhido = document.getElementById('numero-escolhido');
    
    if(numero_sorteado == numero_escolhido.value){
        alert('Você acertou !');
       
    } else if (numero_escolhido.value > 9 || numero_escolhido.value < 0){
        alert('Escolha somente números entre 0 e 9');
      
    } else {
        alert('Você errou, o número escolhido era o '+ numero_sorteado);
  };

};

