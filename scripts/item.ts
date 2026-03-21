enum TiposItens {
    BURGUER, SOBREMESA, BEBIDA
}

export class Item{
    nome: string;
    valor: number;
    desc: string;
    tipo: TiposItens;

    constructor(nome: string, valor: number, desc: string, tipo: TiposItens) {
        this.nome = nome
        this.valor = valor
        this.desc = desc
        this.tipo = tipo
    }
}