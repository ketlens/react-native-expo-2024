import {router} from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function About() {
  return (
    <View style={{flex:1, justifyContent: 'center', alingItems:'center'}}>
      <Text>Sobre o App</Text>
      <Text>Meu nome é Ketlen</Text>
      <Button title='Voltar' onPress={() => {router.replace("/")}} />
    </View>
  );
}