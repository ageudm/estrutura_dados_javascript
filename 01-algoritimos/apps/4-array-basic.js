/**************************************************************************************
  A BASE DE METODOS E FUNCIONALIDADES COM ARRAY
***************************************************************************/
/****metodos nativos do array
 * .unshift() adciona elemento no inicio da lista
 * .push() Adciona elemento no final da lista
 * .shift() remove o primeiro elemento da lista
 * .pop() remove o ultimo elemento da lista
 * .splice() deleta elemento na lista apartir de uma posição indicada
 * 
*/

let listNumbers = [1,2,3,4]
console.log(listNumbers);

// alterar ou adcionar uma nova posição a lista
listNumbers[3] = 5; //o item é alterado quando o elemento selecionado conta na lista
console.log(listNumbers);

listNumbers[4] = 20; //é adcionado o numero 20 na posição 4 porque a lista actual termina na posição 3
console.log(listNumbers);

//amipular a lista com metodos nativo
listNumbers.unshift(0)
console.log(listNumbers);

listNumbers.push(50)
console.log(listNumbers);

listNumbers.shift()
console.log(listNumbers);

listNumbers.pop()
console.log(listNumbers);

listNumbers.splice(3, 2)
console.log(listNumbers);


/**************************************************************************************
  MANIPULAÇÃO DA LISTA COM LOOPS
***************************************************************************/
/****percorrer os elementos na lista
 * for(ini; paration; increment)
 * while()
 * 
*/

const list = document.querySelector('.list')
let elements = '';

const listProduct = document.querySelector('.products')
const totalPrice = document.querySelector('.totalPrice')
let = productItem = '';
let total = 0

const listElement = [
  'laranja',
  'limaão',
  'banana',
  'safu',
  'abacate',
  'batata',
]


const products = [
  {nome: 'Nike', price: 100, stock: false},
  {nome: 'caminza', price: 100, stock: false},
  {nome: 'bota', price: 100, stock: false},
  {nome: 'tenis', price: 100, stock: true},
  {nome: 'bota', price: 100, stock: true},
]

//METODO FOR
for(let index = 0; index < listElement.length; index++) {
  elements += `<li>${listElement[index]}</li>`
  list.innerHTML = elements;
}




//METODO WHILE

// let index = 0;
// let item = products[index]
// while(item) {
//   item = products[index++]

//   productItem += `<li>${item.nome} <span>$${item.price}</span> </li>`
//   listProduct.innerHTML = productItem;

//   total += item.price;
//   totalPrice.innerHTML = `$${total}`

// }









