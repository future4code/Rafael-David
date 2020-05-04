// let sum = 0
// for(let i = 0; i < 15; i++) {
//   sum += i
// }
// console.log(sum)
// // O resultado é: 105


// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// const novaLista = []
// const numero = 4
// for(const item of lista) {
//   if(item%numero === 0) {
//     novaLista.push(item)
//   }
// }
// console.log(novaLista)

/*
a. O que o comando `.push` faz?

R: O comando push adiciona um elemento na ulltima posição do array

b. Qual o valor impresso no console?

R: será impresso o resultado do array [10, 15, 25, 30]

c. Qual seria seria imprimido no console se a variável `numero` tivesse o valor de `3`? 
E se tivesse o valor de `4`?

R: se estivesse com o valor 3 imprimiria no console o valor [12, 15, 18, 21, 27, 30] e 
se estivesse com o valor [12]
*/


/*
Resposta a.   
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
let numeroMaximo = array[0];
let numeroMenor = array[0];

for (let i = 0; i < array.length; i++) {
   if (array[i] > numeroMaximo) {
      numeroMaximo = array[i];     
   } 
   if (array[i] < numeroMenor) {
      numeroMenor = array[i];     
  }  
}
console.log(`O maior numero é ${numeroMaximo} e o menor é ${numeroMenor}`);
*/



/*
// Resposta item b.
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
let novoArray = array.slice(); // criando um novo Array apartir do Original    
novoArray[0] /= 10;
novoArray[1] /= 10;
novoArray[2] /= 10;
novoArray[3] /= 10;
novoArray[4] /= 10;
novoArray[5] /= 10;
novoArray[6] /= 10;
novoArray[7] /= 10;
novoArray[8] /= 10;
novoArray[9] /= 10;
novoArray[10] /= 10;
novoArray[11] /= 10;
//Resultado
console.log(novoArray);
*/
