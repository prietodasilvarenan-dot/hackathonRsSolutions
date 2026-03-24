// Hook de estado
import React, { useState } from "react";

// Componentes RN
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// Enum para categorizar os itens
export enum TiposItens {
    BURGUER = "Burguer",
    SOBREMESA = "Sobremesa",
    BEBIDA = "Bebida"
}

// Tipo base do item
export type Item = {
    id: number;
    nome: string;
    valor: number;
    desc: string;
    tipo: TiposItens;
    qtd: number;
};

// Props do componente (herda Item + função opcional)
export interface ItemCardProps extends Item {
    onChangeQtd?: (qtd: number) => void;
}

// Componente do card
export const ItemCard = (props: ItemCardProps) => {

    // Estado para evitar múltiplos cliques rápidos
    const [clicando, setClicando] = useState(false);

    // Quantidade vem do pai (Menu/Carrinho)
    const qtd = props.qtd;

    // Diminuir quantidade
    const menos = () => {

        // Evita spam de clique
        if (clicando) return;

        setClicando(true);

        // Só diminui se maior que 0
        if (qtd > 0) {
            props.onChangeQtd?.(qtd - 1);
        }

        // Libera clique depois de 100ms
        setTimeout(() => setClicando(false), 100);
    };

    // Aumentar quantidade
    const mais = () => {

        if (clicando) return;

        setClicando(true);

        // Aumenta quantidade
        props.onChangeQtd?.(qtd + 1);

        setTimeout(() => setClicando(false), 100);
    };

    // Calcula total do item
    const total = props.valor * qtd;

    return (
        <View style={styles.card}>

            {/* Cabeçalho */}
            <View style={styles.header}>
                <Text style={styles.nome}>{props.nome}</Text>

                <View>
                    <Text style={styles.valor}>
                        Valor: R${props.valor.toFixed(2).replace(".", ",")}
                    </Text>
                </View>
            </View>

            {/* Descrição */}
            <Text style={styles.descricao}>{props.desc}</Text>

            {/* Total */}
            <Text style={styles.valor}>
                {qtd > 0 
                    ? `Total: R$ ${total.toFixed(2).replace(".", ",")}` 
                    : "Nenhum item"}
            </Text>

            {/* Controles */}
            <View style={styles.controles}>

                {/* Diminuir */}
                <TouchableOpacity style={styles.botao} onPress={menos}>
                    <Text style={styles.textoBotao}>-1</Text>
                </TouchableOpacity>

                {/* Quantidade */}
                <Text style={styles.contador}>{qtd}</Text>

                {/* Aumentar */}
                <TouchableOpacity style={styles.botao} onPress={mais}>
                    <Text style={styles.textoBotao}>+1</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { 
      width: 0, 
      height: 2 
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },

  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },

  descricao: {
    fontSize: 14,
    color: '#888',
    marginBottom: 8,
  },

  valor: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2E7D32',
    marginBottom: 12,
  },

  controles: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },

  botao: {
    backgroundColor: '#f8f8f8',
    borderWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 8,
  },

  textoBotao: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },

  contador: {
    fontSize: 18,
    fontWeight: 'bold',
    minWidth: 20,
    textAlign: 'center',
  },
});