import { View, Text, Button} from 'react-native';
import {useAuth} from '../../hooks/Auth';

export function Home() {
  const {signOut} = useAuth();

  return (
    <View style={{flex:1, justifyContent: 'center', alingItems:'center'}}>
      <Text>Home</Text>
      <Button title="Sair" onPress={() => signOut()} />
    </View>
  );
}
