import React from "react";

enum TiposItens {
    BURGUER,
    SOBREMESA,
    BEBIDA
}

export const burguers = [
    {
        id: 1,
        nome: "X-Burguer",
        valor: 19.90,
        desc: "Pão, carne, queijo e molho especial",
        tipo: TiposItens.BURGUER,
        qtd: 0
    },
    {
        id: 2,
        nome: "X-Bacon",
        valor: 24.90,
        desc: "Carne, queijo, bacon crocante",
        tipo: TiposItens.BURGUER,
        qtd: 0
    },
    {
        id: 3,
        nome: "X-Salada",
        valor: 21.90,
        desc: "Carne, queijo, alface, tomate e maionese",
        tipo: TiposItens.BURGUER,
        qtd: 0
    },
    {
        id: 4,
        nome: "X-Tudo",
        valor: 29.90,
        desc: "Carne, bacon, ovo, queijo, presunto e salada",
        tipo: TiposItens.BURGUER,
        qtd: 0
    },
    {
        id: 5,
        nome: "X-Frango",
        valor: 22.90,
        desc: "Frango grelhado, queijo e molho especial",
        tipo: TiposItens.BURGUER,
        qtd: 0
    },
    {
        id: 6,
        nome: "X-Calabresa",
        valor: 23.90,
        desc: "Calabresa, queijo, cebola e molho barbecue",
        tipo: TiposItens.BURGUER,
        qtd: 0
    },
    {
        id: 7,
        nome: "X-Egg",
        valor: 21.50,
        desc: "Carne, ovo, queijo e maionese",
        tipo: TiposItens.BURGUER,
        qtd: 0
    },
    {
        id: 8,
        nome: "X-Duplo",
        valor: 27.90,
        desc: "Dois hambúrgueres, queijo e molho especial",
        tipo: TiposItens.BURGUER,
        qtd: 0
    },
    {
        id: 9,
        nome: "X-Cheddar",
        valor: 25.90,
        desc: "Carne, cheddar cremoso e bacon",
        tipo: TiposItens.BURGUER,
        qtd: 0
    },
    {
        id: 10,
        nome: "X-Veggie",
        valor: 23.50,
        desc: "Hambúrguer vegetal, alface, tomate e molho vegano",
        tipo: TiposItens.BURGUER,
        qtd: 0
    }
];

export function BurguersList() {
    return (
        <>
        
        </>
    );
}