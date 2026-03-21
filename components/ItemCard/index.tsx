import React from "react";

enum TiposItens {
    BURGUER, SOBREMESA, BEBIDA
}

interface ItemCardProps{
    id: number;
    nome: string;
    valor: number;
    desc: string;
    tipo: TiposItens;
    qtd: number;
}

export const ItemCard = (props: ItemCardProps) => {
    return(
        <div>
            <h2>{props.nome}</h2>
            <p>{props.desc}</p>
            <h3>R${props.valor}</h3>
            <p>
                <button>-1</button>
                <span>{props.qtd}</span>
                <button>+1</button>
            </p>
        </div>
    )
};
