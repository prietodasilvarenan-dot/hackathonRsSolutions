enum TiposItens {
    BURGUER = "Burguer",
    SOBREMESA = "Sobremesa",
    BEBIDA = "Bebida"
}

export class Item {
    constructor(
        public id: number,
        public nome: string,
        public precoUnitario: number,
        public desc: string,
        public tipo: TiposItens,
        public qtd: number
    ) {}

    get valorTotal(): number {
        return this.precoUnitario * this.qtd;
    }
}

const novoItem = new Item(
    1, 
    "X-Burger Especial", 
    35.0, 
    "Pão brioche, blend 180g e queijo prato", 
    TiposItens.BURGUER, 
    2
);
