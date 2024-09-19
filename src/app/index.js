import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Alert, BackHandler, Button, StyleSheet, Text, TextInput, View,  } from "react-native";
import { useAuth } from "../hooks/Auth";
import { router } from "expo-router";
import { useState } from "react";

export default function App() {
  const { singnIn, singOut } = useAuth();
  const [email, setEmail] = useState("super@email.com");
  const [password, setPassword] = useState("A123456a!");
  const [passwordVisibility, setPasswordVisibilily] = useState(false);

  const tooglePasswordVisibility = () => {
    setPasswordVisibilily(!passwordVisibility);
  };

  const handlerEntrarSuper = async () => {
    try {
      await singnIn({ email, password });
      router.replace("/");
    } catch (error) {
      Alert.alert("Erro", "E-mail ou senha inválidos");
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aplicativo Pronto para Usar</Text>
      <View style={styles.inputbox}>
        <Ionicons name="mail-open-sharp" size={20} color="Black"/>
        <TextInput style={styles.emailiputbox} placeholder="E-mail" value={email} onChangeText={setEmail} />
      </View>
      <View style={styles.inputbox}>
        <Ionicons name="lock-closed-sharp" size={20} color="Black"/>
        <TextInput style={styles.emailiputbox} placeholder="Senha" value={password} onChangeText={setPassword} secureTextEntry={passwordVisibility} />
        <Ionicons name={passwordVisibility ? "eye-off":"eye"} size={20} color="Black" onPress={tooglePasswordVisibility}/>
      </View>
      <Button title="Entrar" onPress={handlerEntrarSuper} style={styles.button} />
      <Button title="Sobre" onPress={() => router.push("/about")} />
      <Button
        title="sair do aplicativo"
        onPress={() => BackHandler.exitApp()}
      />
      <StatusBar style="auto" />
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
  },
  inputbox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    marginHorizontal: 40,
    marginVertical: 10,
  },
  emailiputbox: {
    flex: 1,
    gap: 10,
    margin: 5,
    fontFamily:"regular",
  },
  button: {
    borderRadius: 50,
    backgroundColor: "red",
    color: "blue",
    flex: 1,
    alignItems: "center",
    padding: 24,
    justifyContent: "center",
    gap: 15,
  }
});
