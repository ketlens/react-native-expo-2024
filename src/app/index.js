import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { useAnimatedKeyboard } from "react-native-reanimated";

export default function Page() {
  const {singnIn, singOut} = useAuth();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aplicativo Pronto para Usar</Text>
      <Button 
        title="Signin Super" 
        onPress={()=>
          singnIn ({email: "super@gmail.com", password: "Super123!"})
        } 
      />
        <Button title="Signin Adm" 
        onPress={()=>
          singnIn ({email: "adm@gmail.com", password: "Adm123!"})
        } 
        />
        <Button 
           title="Signin User"
           onPress={()=>
           singnIn ({email: "user@gmail.com", password: "User123!"})
          } 
           />
      <Button title="Signout" onPress={()=> singOut()} />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    justifyContent: "center",
  },
  title: {
    fontFamily: "regular",
    fontSize: 20,
  }
});
