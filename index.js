let parcelas = parseFloat(prompt('Insira o valor das parcelas a investir na compra de um carro:'))
let meses = parseFloat(prompt('Insira a quantidade de meses:'))
let juros = parseFloat(prompt('Insira o juros(%):'))
let valorAcumulado = 0

function CalcularInvestimento() {
    for(let i = 1; i <= meses; i++){
        valorAcumulado = (valorAcumulado + parcelas)
        var jurosCompostos = valorAcumulado + (valorAcumulado * (juros/100))
    }

    class Carro{
        constructor(marca, modelo, valor) {
            this.marca = marca
            this.modelo = modelo
            this.valor = valor
        }
        apresentar() {
            return `${this.marca} ${this.modelo} que custa R$${this.valor}.`
        }
    }
    
    const gol = new Carro('vw', 'gol', 30000)
    const uno = new Carro('fiat', 'uno', 12000)
    const civic = new Carro('honda', 'civic', 100000)
    const cayman = new Carro('porsche', 'cayman', 500000)
    
    let listaCarros = [gol, uno, civic, cayman]
    
    console.log(`O valor final do investimento é R$${jurosCompostos}.`)
    for (const carro of listaCarros) {
        if(carro.valor < jurosCompostos) {
            console.log(`Consegue comprar o carro ${carro.apresentar()}`);
        } else {
            console.log(`Não consegue comprar o carro ${carro.apresentar()}`);

        }
    }


}
CalcularInvestimento()
