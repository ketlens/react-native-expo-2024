import { StatusBar } from "expo-status-bar";
import { BackHandler, Button, StyleSheet, Text, View } from "react-native";
import { useAuth } from "../hooks/Auth";
import { router } from "expo-router";

export default function Page() {
  const { singnIn, singOut } = useAuth();

  const handlerEntrarSuper = async () => {
    try {
      await singnIn({ email: "super@email.com", password: " A123456a!" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aplicativo Pronto para Usar</Text>
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
});
