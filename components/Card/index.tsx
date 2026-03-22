import React, { useState } from "react";

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
    const [qtd, setQtd] = useState(props.qtd);

    function Menos() {
        if (qtd > 0) {
            setQtd(qtd - 1);
        }
    }

    function Mais() {
        setQtd(qtd + 1);
    }

    return(
        <div>
            <h2>{props.nome}</h2>
            <p>{props.desc}</p>
            <h3>R${props.valor}</h3>
            <p>
                <button onClick={Menos}>-1</button>
                <span>{qtd}</span>
                <button onClick={Mais}>+1</button>
            </p>
        </div>
    )
};
