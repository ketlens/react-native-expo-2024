import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Alert, BackHandler, StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { useAuth } from "../hooks/Auth";
import { router } from "expo-router";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";


export default function App() {
  const { signIn, signOut } = useAuth();
  const [email, setEmail] = useState("super@email.com");
  const [password, setPassword] = useState("A123456a!");
  const [passwordVisibility, setPasswordVisibility] = useState(false);


  const togglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };


  const handleEntrarSuper = async () => {
    try {
      await signIn({ email, password });
      router.replace("/");
    } catch (error) {
      Alert.alert("Erro", "E-mail ou senha inválidos");
      console.log(error);
    }
  };


  return (
    <View style={styles.container}>
     <LinearGradient 
  style={{
	height: 400, 
	width: 450, 
  marginTop: -20,
	borderRadius: 5}}

	colors={[ '#28f5','#845ec2']}>

</LinearGradient>
<View>
<Image source={require('../assets/logo1.png')} style={{ width: 200, height: 200, borderRadius: 100, marginTop:-300 }} />
</View>
    
      <Text style={styles.title}>Gistliteray</Text>
      <View style={styles.inputbox}>
        <Ionicons name="mail-open-sharp" size={20} color="Black" />
        <TextInput style={styles.emailInputBox} placeholder="E-mail" value={email} onChangeText={setEmail} />
      </View>
      <View style={styles.inputbox}>
        <Ionicons name="lock-closed-sharp" size={20} color="Black" />
        <TextInput style={styles.emailInputBox} placeholder="Senha" value={password} onChangeText={setPassword} secureTextEntry={!passwordVisibility} />
        <Ionicons name={passwordVisibility ? "eye-off" : "eye"} size={20} color="Black" onPress={togglePasswordVisibility} />
      </View>
      <TouchableOpacity onPress={handleEntrarSuper} style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/about")} style={styles.button}>
        <Text style={styles.buttonText}>Sobre</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => BackHandler.exitApp()} style={styles.button}>
        <Text style={styles.buttonText}>Sair do Aplicativo</Text>
      </TouchableOpacity>
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
    backgroundColor:"#F0F8FF",
  },
  title: {
    fontFamily: "Celestial",
    fontSize: 20,
    color: "#845ec2",
  },
  inputbox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    marginHorizontal: 40,
    marginVertical: 10,
  },
  emailInputBox: {
    flex: 1,
    gap: 10,
    margin: 5,
    fontFamily: "Celestial",
    color: "#845ec2",
  },
  button: {
    borderRadius: 50,
    backgroundColor: "#845ec2",
    padding: 15,
    marginVertical: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#F0F8FF",
    fontFamily: "Celestial",
    fontSize: 14,
  },
});
