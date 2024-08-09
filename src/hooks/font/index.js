    import { useFonts } from "expo-font";
import { Children, createContext, useContext } from "react";
import { ActivityIndicator, View, Text } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

    const FontContext = createContext({})

    export function FontProvider({crildren}){
        const [loaded, error] = useFonts({
            regular:require("../../assets/fonts/MontserratAlternates-Regular.ttf"),
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
        const context = useContext(FontContext);
        if (!context) {
            throw new Error("useFont must be used within a FontProvider");
        }
        return context;
    }