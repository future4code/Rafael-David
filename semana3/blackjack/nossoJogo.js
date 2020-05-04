console.log("Bem vindo ao jogo de Blackjack!");

function etapa1() {
   let pergunta = confirm("Quer iniciar uma nova rodada");

   if(pergunta == true){
     console.log("Usuário - Cartas " +comprarCarta());
          
   }else{
      console.log("O jogo acabou");
   }
}


 
