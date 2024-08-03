    import { Children, createContext } from "react";
import { ActivityIndicator, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

    const FontContext = createContext({})

    export function FontProvider({crildren}){
        const [loaded, error] = userFont({
            regular:require("../../assets/fonts/MontserratAlternates-Regular.ttf"),
            bold:require("../../assets/fonts/MontserratAlternates-Bold.ttf"),
            black:require("../../assets/fonts/MontserratAlternates-Black.ttf"),
            semibold:require("../../assets/fonts/MontserratAlternates-SemiBold.ttf"),
            light:require("../../assets/fonts/MontserratAlternates-Linght.ttf"),

        });
 
        if (!loaded && !error){
           return (
           <View style={{flex:1, justifyContent: "center", alingItems:"center"}}>
            <Text style={{fontSize:28, marginTop: 15,Colors:"blue" }}>Carregando fontes</Text>
            <ActivityIndicator size="large" color="#E3F2FD" />
            </View>
            );
        }

        return <FontContext.Provider value={{loaded}}> {Children} </FontContext.Provider>

    }

    export function userFont(){
        const context = userContext(FontContext);
        if (!context) {
            throw new Error("useFont must be used within a FontProvider");
        }
        return context;
    }