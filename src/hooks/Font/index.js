 import { useFonts } from "expo-font";
import { createContext, useContext } from "react";
import { ActivityIndicator, Text, View } from "react-native";

const FontContext = createContext({});

export function FontProvider({ children }) {
    const [loaded, error] = useFonts({
        Lumina:require("../../assets/fonts/CinzelDecorative-Black.ttf"),
        Arcadia:require("../../assets/fonts/CinzelDecorative-Bold.ttf"),
        Serenade:require("../../assets/fonts/CinzelDecorative-Regular.ttf"),
        Nimbus:require("../../assets/fonts/MontserratAlternates-Black.ttf"),
        Vortex:require("../../assets/fonts/MontserratAlternates-BlackItalic.ttf"),
        Echo:require("../../assets/fonts/MontserratAlternates-Bold.ttf"),
        Solstice:require("../../assets/fonts/MontserratAlternates-BoldItalic.ttf"),
        Quasar:require("../../assets/fonts/MontserratAlternates-ExtraBold.ttf"),
        Ember:require("../../assets/fonts/MontserratAlternates-ExtraBoldItalic.ttf"),
        Zenith:require("../../assets/fonts/MontserratAlternates-ExtraLight.ttf"),
        Cascade:require("../../assets/fonts/MontserratAlternates-Italic.ttf"),
        Mosaic:require("../../assets/fonts/MontserratAlternates-Light.ttf"),
        Aether:require("../../assets/fonts/MontserratAlternates-LightItalic.ttf"),
        regular:require("../../assets/fonts/MontserratAlternates-Medium.ttf"),
        Prism:require("../../assets/fonts/MontserratAlternates-MediumItalic.ttf"),
        Velvet:require("../../assets/fonts/MontserratAlternates-Regular.ttf"),
        Obsidian:require("../../assets/fonts/MontserratAlternates-SemiBold.ttf"),
        Aurora:require("../../assets/fonts/MontserratAlternates-SemiBoldItalic.ttf"),
        Harmony:require("../../assets/fonts/MontserratAlternates-Thin.ttf"),
        Radiance:require("../../assets/fonts/MontserratAlternates-ThinItalic.ttf"),
        Celestial:require("../../assets/fonts/TaiHeritagePro-Bold.ttf"),
        Whimsy:require("../../assets/fonts/TaiHeritagePro-Regular.ttf"),
        Horizon:require("../../assets/fonts/Arizonia-Regular.ttf"),
        Enigma:require("../../assets/fonts/Shrikhand-Regular.ttf"),

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