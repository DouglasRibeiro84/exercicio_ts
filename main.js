"use strict";
const multiplicar = (numero1, numero2) => numero1 * numero2;
const saudar = (nome) => "ola me chamo " + nome;
class GeradorAleatorio {
    constructor(min, max) {
        this.min = min;
        this.max = max;
    }
    gerarNumero() {
        return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    }
}
const gerador = new GeradorAleatorio(1, 20);
const numeroAleatorio1 = gerador.gerarNumero();
const numeroAleatorio2 = gerador.gerarNumero();
const resultado = multiplicar(numeroAleatorio1, numeroAleatorio2);
const pessoa = saudar('Jose');
console.log(pessoa, "e o valor final é", resultado);
