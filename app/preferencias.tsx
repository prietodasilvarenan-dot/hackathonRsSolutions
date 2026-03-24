// Importa o componente de card de preferência (onde o usuário escolhe quero/evito)
import { PrefCard } from '@/components/Card/pref';

// Importa navegação e leitura de parâmetros
import { Stack, router, useLocalSearchParams } from 'expo-router';

// Hooks do React
import React, { useState } from "react";

// Componentes do React Native
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

// Estilos
import { styles } from '../constants/styles';

// Componente da tela Preferências
export default function Preferencias() {

  // Pega o parâmetro "tipo" vindo da tela anterior (viagem/local)
  const { tipo } = useLocalSearchParams();

  // Estado que guarda as escolhas do usuário
  // Formato: { "Carne": "quero", "Bacon": "evito", ... }
  const [escolhas, setEscolhas] = useState<Record<string, 'quero' | 'evito' | null>>({});

  // Lista de preferências que serão exibidas
  const preferencias = [
    "Carne", "Frango", "Bacon", "Calabresa", "Ovo", "Queijo", "Cheddar",
    "Hambúrguer Vegetal", "Vegetariano", "Vegano", "Alface", "Tomate",
    "Molho Especial", "Barbecue", "Maionese", "Doce", "Chocolate",
    "Leite Condensado", "Sorvete", "Frutas", "Refrigerante", "Suco Natural",
    "Bebida Gelada", "Álcool", "Cerveja", "Vinho", "Drink", "Artesanal",
    "Duplo", "Tradicional"
  ];

  // Função chamada quando o usuário escolhe "quero" ou "evito"
  const handleEscolha = (item: string, valor: 'quero' | 'evito' | null) => {
    setEscolhas(prev => ({
      ...prev,
      // Atualiza apenas o item clicado
      [item]: valor
    }));
  };

  // Função chamada ao clicar em "Próximo"
  const handleProximo = () => {
    router.push({
      pathname: '/resultado',
      params: {
        tipo,
        // Converte o objeto em string para poder enviar pela rota
        selecionados: JSON.stringify(escolhas)
      }
    });
  };

  return (
    <View style={styles.main}>
      {/* Remove o header */}
      <Stack.Screen options={{ headerShown: false }} />
      
      {/* (⚠️ View duplicada - pode remover uma) */}
      <View style={styles.main}>

        {/* Título */}
        <Text style={styles.titulo}>
          O que você gostaria de ter em seu prato?
        </Text>

        {/* Lista rolável de preferências */}
        <ScrollView
          contentContainerStyle={{ paddingBottom: 100 }} 
          showsVerticalScrollIndicator={false}
        >

          {/* Percorre a lista e cria um PrefCard para cada item */}
          {preferencias.map((pref) => (
            <PrefCard
              key={pref} // chave única
              title={pref}
              // Quando o usuário escolhe algo no card
              onSelect={(valor) => handleEscolha(pref, valor)}
            />
          ))}
        </ScrollView>

      </View>

      {/* Navbar inferior */}
      <View style={styles.navbar}>

        {/* Botão voltar */}
        <TouchableOpacity
          style={[styles.botao, { flex: 1 }]}
          onPress={() => router.push({
            pathname: '/consulta',
            params: { tipo }
          })}
        >
          <Text style={styles.textoBotao}>Voltar</Text>
        </TouchableOpacity>

        {/* Botão próximo */}
        <TouchableOpacity
          style={[styles.botao, { flex: 1 }]}
          onPress={handleProximo}
        >
          <Text style={styles.textoBotao}>Próximo</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}