/**************************************************************************************
  ALGORITIMOS SIMPLES PARA MANIPULAR OBJECTOS
***************************************************************************/

//inicializar um objecto
const product = {
    nome: 'Ananas',
    price: 50,
    other: {
        stars: 5.3,
        count: 87
    },
    fun: () => {
        console.log('add to cart');
    }
}

console.log(product);

//mudar o nome de algum produto
product.nome = 'bataba'
console.log(product.nome);
//adcionar propriedade ao objecto
product.descripion = 'Fruta'
console.log(product);

//delectar propriedde
delete product.price
console.log(product);

//add to cart
product.fun();


/**************************************************************************************
  CONVERTER O OJECTO EM JSON
***************************************************************************/

//json string
//Este formato JSON não suporta função
const jsonString = JSON.stringify(product)
console.log(jsonString);

//jason parece
//formato JASON no formato object
const jsonObject = JSON.parse(jsonString)
console.log(jsonObject);


/**************************************************************************************
  AVALIAR O TIPO DE INFORMAÇÃO EM OBJECTO
***************************************************************************/

const obj1 = {
  descripion: 'God job'
}

const obj2 = {
  descripion: 'God job'
}

const obj3 = {
  descripion: 'God'
}

//valiar informaçã do tipo string
const avaliar1 = obj1.descripion === obj2.descripion
const avaliar2 = obj1.descripion === obj3.descripion
const avaliar3 = obj1.descripion !== obj3.descripion

console.log('avaliaçã1: ',avaliar1); 
console.log('avaliaçã2: ',avaliar2);
console.log('avaliaçã3: ',avaliar3);


/**************************************************************************************
  LISTAR AS PROP DE UM OBJECTO
***************************************************************************/
//formas de herdar as props de um objecto
const {nome, price, other, fun} = product;

const obj4 = {
  nome: nome,
  price: price,
  other,
  pagar() {
    console.log('pagar');
  }
}

const obj5 = {
  nome,
  price,
  other,
  fun
}

console.log(nome);
console.log(price);
console.log(other);
console.log(obj4);
console.log(obj5);
console.log(obj5.fun());
console.log(obj4.pagar());