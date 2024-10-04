/**************************************************************************************
  ALGORITIMOS SIMPLES PARA MANIPULAR OBJECTOS LITERAL
***************************************************************************/

//inicializar um objecto literal
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

// console.log(product);

//mudar o nome de algum produto
product.nome = 'bataba'
// console.log(product.nome);
//adcionar propriedade ao objecto
product.descripion = 'Fruta'
// console.log(product);

//delectar propriedde
delete product.price
// console.log(product);

//add to cart
// product.fun();


/**************************************************************************************
  CONVERTER O OJECTO EM JSON
***************************************************************************/

//json string
//Este formato JSON não suporta função
const jsonString = JSON.stringify(product)
// console.log(jsonString);

//jason parece
//formato JASON no formato object
const jsonObject = JSON.parse(jsonString)
// console.log(jsonObject);


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

// console.log('avaliaçã1: ',avaliar1); 
// console.log('avaliaçã2: ',avaliar2);
// console.log('avaliaçã3: ',avaliar3);


/**************************************************************************************
  LISTAR AS PROP DE UM OBJECTO
***************************************************************************/
//Erdar props de um ojecto
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

// console.log(nome);
// console.log(price);
// console.log(other);
// console.log(obj4);
// console.log(obj5);
// console.log(obj5.fun());
// console.log(obj4.pagar());


/**************************************************************************************
  CRIAR OBJECTO COM FUNCÇÃO FATORIAL
***************************************************************************/

const productData = (nome, price, stars, count) => {
  return {
    nome,
    price,
    other: {
        stars,
        count
    },
    fun: () => {
        console.log('add to cart');
    }

  };
}

// criar a instancia do objecto
const produto1 = productData('Banana', 50, 4.5, 20);

// console.log(produto1.nome);
// console.log(produto1.fun());


/**************************************************************************************
  OBJECTO CONSTRUTOR
***************************************************************************/

function Produto(name, price, stars, count){
  this.name = name;
  this.price = price;
  this.other = {
    stars: stars,
    count: count
  };
  this.fun = () => {
    console.log('add to cart');
  }
}

// criar uma nova instancia do objecto
const produto2 = new Produto('Funge', 20, 3, 8 );
delete produto2.count; //deletar pro no objecto
produto2.marca = 'gricel'; //add prop no objecto
// console.log(produto2);

//passar variavel como argumento
const productName = 'Quisaca';
const produto3 = new Produto(productName, 20, 3, 8 );
// console.log(produto3);

//verificar as propriedades do ojecto com o iteração
for (key in produto2) {
  // console.log(key, produto2[key]);
}

// for (key in produto2) {
//   if (typeof produto2[key] !== 'function')
//     console.log(key, produto2[key]);
// }

//vericar as props com a o nativo Object
const keys = Object.keys(produto3)
// console.log(keys);

//verificar a existencia da prop no objecto
if ('fun' in produto2) {
  // console.log('existe o metodo fun em produto2');
} else {
  // console.log('esteme metodo não existe');
}



/**************************************************************************************
  //Criar instancia de objecto com o metodo (call)
***************************************************************************/
function Food(name, price, stars, count) {
  Produto.call(this, name, price, stars, count);
  this.categoria = 'Alimentos';
  this.com = () => {
    console.log('comprar');
  };
}; Food.prototype = Object.create(Produto.prototype)

const food = new Food('Arros', 1000, 3.5, 500);
// console.log(food);

/**************************************************************************************
//Criar instancia de objecto com o metodo (apply)
***************************************************************************/
function Food2(name, price, stars, count) {
  Produto.apply(this, [name, price, stars, count]);
  this.categoria = 'Alimentos';
  this.com = () => {
    console.log('comprar');
  };
}; Food2.prototype = Object.create(Produto.prototype)

const food2 = new Food('Açucar', 5000, 3.5, 500);
// console.log(food2);
// console.log(food2.fun());

/**************************************************************************************
//ABISTRATION
***************************************************************************/
function Food3(name, price, stars, count) {
  //private propety
  let total = '';

  this.name = name;
  this.price = price;
  this.stars = stars;
  this.count = count;

  this.stokProduct = {
    quatity: 20,
  }

  this.celProduct = function() {
    console.log('comprar produto');
    total = this.stokProduct;
    console.log(total);
  }

  this.execute = function() {
    this.celProduct();
    console.log(this.stokProduct.quatity);
  }

  let productPrpety = {
    type: 'Alimeto',
    origem: 'angola'
  }

  // aplicar o metodo get
  Object.defineProperty(this, 'productPrpety', {
    get: function() {
      return productPrpety;
    },
    set: function(value) {
      productPrpety = value;
    }
  })
};

const food3 = new Food3('banana', 50, 3.4, 40)
console.log(food3.productPrpety = 20);