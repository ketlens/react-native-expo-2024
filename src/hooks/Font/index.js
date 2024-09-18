 import { useFonts } from "expo-font";
import { createContext, useContext } from "react";
import { ActivityIndicator, Text, View } from "react-native";

const FontContext = createContext({});

export function FontProvider({ children }) {
    const [loaded, error] = useFonts({
        regular:require("../../assets/fonts/MontserratAlternates-Regular.ttf"),

    });

    if (!loaded && !error) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 20, marginTop: 15, color: "#253d66" }}>
                    Carregando as Fontes...
                </Text>
                <ActivityIndicator size="large" color="#3a78e0" />
            </View>
        )
    }

    return <FontContext.Provider value={{}}>{children}</FontContext.Provider>;
}

export function useFont() {
    const context = useContext (FontContext);
    if (!context) {
        throw new Error("useFont must be used within a FontProvider");
    }
    return context;
}