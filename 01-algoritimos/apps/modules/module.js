/**************************************************************************************
  IMPORTAÇÃO DIREITA
***************************************************************************/
import { soma, mult } from "./export.js";
// import {default as renderName} from "./export-default.js"
import renderName from "./export-default.js"

const soma1 = soma(20, 30)
const mult1 = mult(20, 30)
const render = renderName('Celiana')

console.log(soma1);
console.log(mult1);
console.log(render);
console.log('Ageu Domingos Miguel');