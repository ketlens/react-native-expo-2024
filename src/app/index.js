import { StatusBar } from "expo-status-bar";
import { BackHandler, Button, StyleSheet, Text, View } from "react-native";
import { useAnimatedKeyboard } from "react-native-reanimated";

export default function Page() {
  const {singnIn, singOut} = useAuth();


const handlerEntrarSuper = async () => {
  try{
    await singnIn({email: "super@email.com", password: "Super123!"});
    router.replace("/");
  } catch (error) {
    console.log(e)
  }
}

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aplicativo Pronto para Usar</Text>
      <Button 
        title="Signin Super" 
        onPress={(handlerEntrarSuper)}/>
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
           <Button title="Sobre" onPress={() => router.push("/about")} />
            <Button title="sair do aplicativo" onPress={()=>BackHandler.exitApp()} />
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
    gap: 15,
  },
  title: {
    fontFamily: "regular",
    fontSize: 20,
  }
});
