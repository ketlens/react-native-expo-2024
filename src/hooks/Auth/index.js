import { createContext, useContext, useEffect, useState } from "react";
import { View, Text } from "react-native";
import { useUsersDatabase } from "../../database/useUsersDatabase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator } from "react-native";


const AuthContext = createContext({});


export const Role = {
  SUPER: "SUPER",
  ADM: "ADM",
  USER: "USER",
};


export function AuthProvider({ children }) {
  const [user, setUser] = useState({
    authenticated: null,
    user: null,
    role: null,
  });


  const { authUser } = useUsersDatabase();


  useEffect(() => {
    const loadStorageData = async () => {
      const storageUser = await AsyncStorage.getItem("@payment:user");


      if (storageUser) {
        setUser({
          authenticated: true,
          user: JSON.parse(storageUser),
          role: JSON.parse(storageUser).role,
        });
      } else {
        setUser({
          authenticated: false,
          user: null,
          role: null,
        });
      }
    };


    loadStorageData();
  },[]);


  const signIn = async ({ email, password }) => {
    const response = await authUser({ email, password });
    if (!response) {
      setUser({
        authenticated: false,
        user: null,
        role: null,
      });
      throw new Error("Usuario ou senha errados");
    }


    await AsyncStorage.setItem("@payment:user", JSON.stringify(response));
   
    setUser({
      authenticated: true,
      user: response,
      role: response.role,
    });
  };


  const signOut = async () => {
    await AsyncStorage.removeItem("@payment:user");
    setUser({
      authenticated: false,
      user: null,
      role: null,
    });
  };


  if (user.authenticated === null) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 20, marginTop: 15, color: "#253d66" }}>
          Carregando dados do usuário...
        </Text>
        <ActivityIndicator size="large" color="#3a78e0" />
      </View>
    );
  }


  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}


export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
