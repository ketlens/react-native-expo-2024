import { createContext, useContext, useEffect, useState, View, Text } from "react";
import { useUserDatabase } from "../../database/useUserDatabase";
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
    autenticated: null,
    user: null,
    role: null,
  });

  const { authUser } = useUserDatabase();

  useEffect(() => {
    const loadStorageData = async () => {
      const storageUser = await AsyncStorage.getItem("@payment:user");

      if (storageUser) {
        setUser({
          autenticated: true,
          user: JSON.parse(storageUser),
          role: JSON.parse(storageUser).role,
        });
      } else {
        setUser({
          autenticated: false,
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
        autenticated: false,
        user: null,
        role: null,
      });
      throw new Error("User not found");
    }

    await AsyncStorage.setItem("@payment:user", JSON.stringify(response));
    
    setUser({
      autenticated: true,
      user: response,
      role: response.role,
    });
  };
  const signOut = async () => {
    await AsyncStorage.deleteItem("@payment:user");
    setUser({});
  };

  if (user.autenticated === null) {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 20, marginTop: 15, color: "#253d66" }}>
                Carregando dados do usuário...
            </Text>
            <ActivityIndicator size="large" color="#3a78e0" />
        </View>
    )
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
