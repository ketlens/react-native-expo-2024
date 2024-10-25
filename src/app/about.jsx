import {router} from "expo-router";
import { Button, Text, View, StyleSheet, TouchableOpacity } from "react-native";


export default function About() {
  return (
    <View style={{flex:1, flex: 1,
      alignItems: "center",
      padding: 24,
      justifyContent: "center",
      gap: 15,
      backgroundColor:"#F0F8FF",}}>
      <Text style={{color:"#845ec2",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
      }}>Sobre o GistLitery</Text>
      <Text style={styles.paragrafo}>O GistLitery é um aplicativo inovador que transforma o aprendizado de programação em uma experiência interativa e envolvente.</Text>
      <Text style={styles.paragrafo}> Com uma biblioteca rica em livros e artigos, o app oferece desafios práticos ao final de cada leitura, permitindo que os usuários testem suas habilidades de forma imediata.</Text>
      <Text style={styles.paragrafo}>Além disso, o GistLitery conta com um sistema de recompensas que incentiva o usuário a continuar estudando e se aprimorando.</Text>
      <Text style={styles.text}>Desenvolvido por: <Text style={{fontWeight: "bold", color: "3#8470c9"}}>Ketlen</Text></Text>
      
    <TouchableOpacity onPress={() => {router.replace("singin")}} style={styles.button}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: "#8470c9",
  },
  paragrafo: {
    fontSize: 17,
    color: "#8470c9",
    marginLeft: 20,
    marginRight: 20,
    alingItems: "center",
    fontFamily: "regular",
  },
  button: {
    borderRadius: 50,
    backgroundColor: "#845ec2",
    padding: 12,
    marginVertical: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#F0F8FF",
    fontSize: 16,
  },
});
