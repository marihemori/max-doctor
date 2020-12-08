/** Exercício 1 */

function h1 (a,b) {
  return a*b;
}

console.log(`A resposta é: ${h1(0,5)}`);

/** Exercício 2 */

var a = 3;
if(2 < 4) {
  a = 5;
}

console.log(`A resposta é: ${a + 1}`);

/** Exercício 3 */

if(4 < 11) {
  var b = 5;
} else if (8 < 2) {
  var b = 7;
} else {
  var b = 4;
}

console.log(`A resposta é: ${b + 1}`);

/** Exercício 4 */

function h1(a,b) {
  return a*b;
}

console.log(`A resposta é: ${h1(0,2)}`);

/** Exercício 5 */

var c = 2;
c === 8;
console.log(`A resposta é: ${c + 2}`);

/** Exercício 6 */

var d = 2;
d === 8;
console.log(`A resposta é: ${d + 1}`);

/** Exercício 7 */

var e = 0;
if (2 < 3) {
  e = 4;
}

console.log(`A resposta é: ${e + 2}`);

/** Exercício 8 */

let salario = 900;

if(salario < 500) {
  novo_salario = salario - 50;
} else if(salario <= 1000) {
  novo_salario = salario - 100
} else {
  novo_salario = salario - 200;
}

console.log(`O novo salario sera ${novo_salario}`);