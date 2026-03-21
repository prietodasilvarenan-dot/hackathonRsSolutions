import React from "react";

enum TiposItens {
    BURGUER,
    SOBREMESA,
    BEBIDA
}
export const sobremesas = [
    {
        id: 11,
        nome: "Brownie",
        valor: 12.90,
        desc: "Brownie de chocolate com pedaços crocantes",
        tipo: TiposItens.SOBREMESA,
        qtd: 0
    },
    {
        id: 12,
        nome: "Milkshake de Chocolate",
        valor: 15.90,
        desc: "Milkshake cremoso com chantilly",
        tipo: TiposItens.SOBREMESA,
        qtd: 0
    },
    {
        id: 13,
        nome: "Sorvete",
        valor: 10.90,
        desc: "Bola de sorvete nos sabores chocolate, baunilha ou morango",
        tipo: TiposItens.SOBREMESA,
        qtd: 0
    },
    {
        id: 14,
        nome: "Petit Gateau",
        valor: 18.90,
        desc: "Bolo quente com recheio de chocolate e sorvete",
        tipo: TiposItens.SOBREMESA,
        qtd: 0
    },
    {
        id: 15,
        nome: "Torta de Limão",
        valor: 13.90,
        desc: "Torta gelada com creme de limão e merengue",
        tipo: TiposItens.SOBREMESA,
        qtd: 0
    },
    {
        id: 16,
        nome: "Cheesecake",
        valor: 16.90,
        desc: "Cheesecake com calda de frutas vermelhas",
        tipo: TiposItens.SOBREMESA,
        qtd: 0
    },
    {
        id: 17,
        nome: "Churros",
        valor: 14.90,
        desc: "Churros recheados com doce de leite",
        tipo: TiposItens.SOBREMESA,
        qtd: 0
    },
    {
        id: 18,
        nome: "Mousse de Chocolate",
        valor: 11.90,
        desc: "Mousse leve e aerado de chocolate",
        tipo: TiposItens.SOBREMESA,
        qtd: 0
    },
    {
        id: 19,
        nome: "Pudim",
        valor: 12.50,
        desc: "Pudim de leite condensado com calda de caramelo",
        tipo: TiposItens.SOBREMESA,
        qtd: 0
    },
    {
        id: 20,
        nome: "Açaí",
        valor: 17.90,
        desc: "Açaí na tigela com granola e frutas",
        tipo: TiposItens.SOBREMESA,
        qtd: 0
    }
];

export default function SobremesasList() {
    return (
        <>
        
        </>
    );
}