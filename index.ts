// interface DadosAPI{
//     nome: string,
//     idade: number,
// }


// function pegarDadosDaAPI():DadosAPI {
//     return{
//         nome: 'Ana',
//         idade: 37
//     }
// }

// let dados = pegarDadosDaAPI()

//console.log(dados.nome)
//console.log(dados)

//************************************************************************************

//Metodo Contrutor

class Pessoa{
//acesso privado (mais usual)
//acesso publico (mais usual)
//acesso protegido

    // private nome!: string;
    // private idade!: number;
    // private cpf!: string;

    // constructor(nome: string, idade: number, cpf: string) {
    //     this.nome = nome
    //     this.idade = idade
    //     this.cpf = cpf

    // }

    // escreverPropriedades() {
    //     console.log(this.nome)
    //     console.log(this.idade)
    //     console.log(this.cpf)
    // }

   
    //contrutor  de uma forma mais simples

    constructor(private nome: string, public idade: number, private cpf: string) {}

    //dois tipos de metodos (GETTERS e SETTERS)

    getCpf(){
        return this.cpf
    }

    setCpf(cpf: string){
        this.cpf = cpf
    }
}

let pessoa = new Pessoa('Ana', 37,'111.111.111-22')

pessoa.setCpf('999.999.999-88')
console.log(pessoa.getCpf())


//pessoa.escreverPropriedades()

//**************************************************
// implementando uma inteface
interface PropriedadesCarro{
    nome: string
}

class Carro implements PropriedadesCarro {
    nome!: string
    
}