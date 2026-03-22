import { ItemCard } from "@/components/Card";
import { styles } from "@/constants/styles";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { bebidas } from "../components/Card/cardapio/bebidas";
import { burguers } from "../components/Card/cardapio/burguers";
import { sobremesas } from "../components/Card/cardapio/sobremesas";

export default function Menu() {
    const { tipo } = useLocalSearchParams();

    return (
        <View style={{ flex: 1 }}>

            {/* SCROLL */}

            <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
                
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                  Burgers
              </Text>

              {burguers.map(item => (
                  <ItemCard key={item.id} {...item} />
              ))}

              <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 20 }}>
                  Bebidas
              </Text>

              {bebidas.map(item => (
                  <ItemCard key={item.id} {...item} />
              ))}

              <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 20 }}>
                  Sobremesas
              </Text>

              {sobremesas.map(item => (
                  <ItemCard key={item.id} {...item} />
              ))}

            </ScrollView>

            {/* BOTÕES */}
            <View style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                flexDirection: "row",
                gap: 10,
                padding: 10,
                backgroundColor: "#fff",
                borderTopWidth: 1
            }}>
                
                <TouchableOpacity
                    style={[styles.botao, { flex: 1 }]}
                    onPress={() => router.push('/consulta')}
                >
                    <Text style={styles.textoBotao}>Voltar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.botaoSecundario, { flex: 1 }]}
                    onPress={() => 
                      router.push({
                        pathname: '/carrinho',
                        params: { tipo }
                      })
                    }
                >
                    <Text style={styles.textoBotao}>Carrinho</Text>
                </TouchableOpacity>

            </View>

        </View>
    );
}