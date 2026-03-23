import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// Enum para categorizar os itens
export enum TiposItens {
    BURGUER = "Burguer",
    SOBREMESA = "Sobremesa",
    BEBIDA = "Bebida"
}

// Tipo base
export type Item = {
    id: number;
    nome: string;
    valor: number;
    desc: string;
    tipo: TiposItens;
    qtd: number;
};

// Props
export interface ItemCardProps extends Item {
    onChangeQtd?: (qtd: number) => void;
}

export const ItemCard = (props: ItemCardProps) => {
    const [clicando, setClicando] = useState(false);

    // 🔥 agora vem do props
    const qtd = props.qtd;

    const menos = () => {
        if (clicando) return;
        setClicando(true);

        if (qtd > 0) {
            props.onChangeQtd?.(qtd - 1);
        }

        setTimeout(() => setClicando(false), 100);
    };

    const mais = () => {
        if (clicando) return;
        setClicando(true);

        props.onChangeQtd?.(qtd + 1);

        setTimeout(() => setClicando(false), 100);
    };

    const total = props.valor * qtd;

    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Text style={styles.nome}>{props.nome}</Text>
                <View>
                    <Text style={styles.valor}>
                        Valor: R${props.valor.toFixed(2).replace(".", ",")}
                    </Text>
                </View>
            </View>

            <Text style={styles.descricao}>{props.desc}</Text>

            <Text style={styles.valor}>
                {qtd > 0 
                    ? `Total: R$ ${total.toFixed(2).replace(".", ",")}` 
                    : "Nenhum item"}
            </Text>

            <View style={styles.controles}>
                <TouchableOpacity style={styles.botao} onPress={menos}>
                    <Text style={styles.textoBotao}>-1</Text>
                </TouchableOpacity>

                <Text style={styles.contador}>{qtd}</Text>

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