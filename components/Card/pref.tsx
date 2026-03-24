// Estilos do card
import { cardStyles } from "@/constants/cardStyles";

// React
import React, { useState } from "react";

// Componentes RN
import { Text, TouchableOpacity, View } from "react-native";

// Props do componente
interface PrefCardProps {
  onSelect: (tipo: 'quero' | 'evito' | null) => void; // função para avisar o pai
  title: string; // nome da preferência (ex: "Carne")
}

// Componente
export const PrefCard = ({ title, onSelect }: PrefCardProps) => {

  // Estado local: controla qual botão está selecionado
  const [selecao, setSelecao] = useState<'quero' | 'evito' | null>(null);

  // Função chamada ao clicar
  const handlePress = (tipo: 'quero' | 'evito') => {

    // Se clicar no mesmo botão, desmarca (toggle)
    const novoValor = selecao === tipo ? null : tipo;

    // Atualiza estado local
    setSelecao(novoValor);

    // Envia valor para o componente pai
    onSelect(novoValor);
  };

  return (
    <View style={cardStyles.card}>

      {/* Título da preferência */}
      <Text style={cardStyles.label}>{title}</Text>

      {/* Botões */}
      <View style={cardStyles.buttonContainer}>

        {/* Botão QUERO */}
        <TouchableOpacity
          onPress={() => handlePress('quero')}
          style={[
            cardStyles.btnBase,
            // Aplica estilo ativo se selecionado
            selecao === 'quero' && cardStyles.btnQueroActive
          ]}
        >
          <Text style={[
            cardStyles.btnText,
            selecao === 'quero' && cardStyles.textQueroActive
          ]}>
            Quero
          </Text>
        </TouchableOpacity>

        {/* Botão EVITO */}
        <TouchableOpacity
          onPress={() => handlePress('evito')}
          style={[
            cardStyles.btnBase,
            selecao === 'evito' && cardStyles.btnEvitoActive
          ]}
        >
          <Text style={[
            cardStyles.btnText,
            selecao === 'evito' && cardStyles.textEvitoActive
          ]}>
            Evito
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};