import {router} from "expo-router";
import { Button, Text, View } from "react-native";


export default function About() {
  return (
    <View style={{flex:1, justifyContent: 'center', alingItems:'center'}}>
      <Text>Sobre o GistLitery</Text>
      <Text>O GistLitery é um aplicativo inovador que transforma o aprendizado de programação em uma experiência interativa e envolvente. Com uma biblioteca rica em livros e artigos, o app oferece desafios práticos ao final de cada leitura, permitindo que os usuários testem suas habilidades de forma imediata. Além disso, conta com uma comunidade colaborativa onde é possível tirar dúvidas e compartilhar conhecimentos, tornando o processo de aprendizado mais dinâmico. Com recursos de personalização e conteúdo multimídia, o CodeRead não apenas ensina a programar, mas também torna essa jornada acessível e divertida para todos os níveis de experiência.</Text>
      <Button title='Voltar' onPress={() => {router.replace("/")}} />
    </View>
  );
}
