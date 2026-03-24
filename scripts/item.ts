// Enum para definir os tipos de item
enum TiposItens {
    BURGUER = "Burguer",
    SOBREMESA = "Sobremesa",
    BEBIDA = "Bebida"
}

// Classe que representa um item do cardápio/carrinho
export class Item {

    constructor(
        public id: number,             // ID único
        public nome: string,           // Nome do item
        public precoUnitario: number,  // Preço de uma unidade
        public desc: string,           // Descrição
        public tipo: TiposItens,       // Categoria
        public qtd: number             // Quantidade no carrinho
    ) {}

    // Getter: calcula o valor total automaticamente
    get valorTotal(): number {
        return this.precoUnitario * this.qtd;
    }
}