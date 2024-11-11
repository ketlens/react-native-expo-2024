import { View, Text, StyleSheet, Image } from "react-native";
import { Banner } from "../../components/Banner";

export default function Home() {
  return (
    <View style={styles.container}>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0F8FF", // Cor de fundo clara
  },
  content: {
    alignItems: "center",
    flex: 2,
  },
  text: {
    color: "#845ec2",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center", // Centraliza o texto horizontalmente
  },
  sub: {
    color: "#F0F8FF",
    fontSize: 15,
    textAlign: "center",
  },
  // Estilo do quadrado transparente
  transparentBox: {
    width: 335,
    height: 250,
    justifyContent: 'flex-start',
    alignItems: 'center',
      position: "absolute", // Para que a caixa seja posicionada ao fundo
      backgroundColor: "rgba(132, 94, 194, 0.5)",
      borderRadius: 15,
      padding: 5,
      zIndex: 1, // Garante que o quadrado fique no fundo
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
  },
  boxText: {
    color: '#fff', // Texto branco para contraste
    fontSize: 18,
    textAlign: 'center',
  },
  imas:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  ima: {
     width: 70, 
     height: 50, 
     borderRadius: 15, 
     margin:30,
  },
});

