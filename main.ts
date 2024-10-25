const multiplicar = (numero1: number, numero2:number): number => numero1 * numero2
const saudar = (nome: string) => "ola me chamo "+ nome

class GeradorAleatorio {
    private min: number;
    private max: number;

    constructor(min: number, max: number) {
        this.min = min;
        this.max = max;
    }

    gerarNumero(): number {
        return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    }
}

const gerador = new GeradorAleatorio(1, 20);

const numeroAleatorio1 = gerador.gerarNumero();
const numeroAleatorio2 = gerador.gerarNumero();

const resultado = multiplicar(numeroAleatorio1, numeroAleatorio2)
const pessoa =  saudar('Jose')
console.log(pessoa, "e o valor final é", resultado)