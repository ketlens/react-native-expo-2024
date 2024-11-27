import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

export default function Notifications() {
  const [showFullMessage, setShowFullMessage] = useState(false);

  const handlePress = () => {
    setShowFullMessage(!showFullMessage);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Notificações</Text>
      </View>

      {/* Mensagem de boas-vindas */}
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.notificationBox}>
          <Text style={styles.notificationText}>
            {showFullMessage ? "Bem-vindo ao nosso app! Aqui você pode explorar uma vasta seleção de livros, se divertir e aprender novos conteúdos!" : "Bem-vindo! Clique para saber mais"}
          </Text>
        </View>
      </TouchableOpacity>

      {/* Exibição da mensagem completa */}
      {showFullMessage && (
        <View style={styles.fullMessageBox}>
          <Text style={styles.fullMessageText}>
            Estamos muito felizes que você tenha escolhido nosso app! Explore uma grande variedade de livros e recursos exclusivos que ajudarão no seu desenvolvimento. Fique à vontade para explorar, adicionar favoritos e muito mais!
          </Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F8FF", // Cor de fundo mais clara
  },
  header: {
    paddingTop: 50,
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#5D3FD3", // Tema roxo
  },
  notificationBox: {
    backgroundColor: "#E8E8E8",
    padding: 20,
    borderRadius: 10,
    margin: 15,
    alignItems: "center",
  },
  notificationText: {
    fontSize: 16,
    color: "#333",
  },
  fullMessageBox: {
    backgroundColor: "#9c6df3",
    padding: 20,
    borderRadius: 10,
    margin: 15,
    marginTop: 10,
    borderColor: "#5e2d89",
    borderWidth: 1,
  },
  fullMessageText: {
    fontSize: 16,
    color: "#333",
    textAlign: "justify",
  },
});
