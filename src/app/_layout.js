import { Stack } from "expo-router";
import { AppProvider } from "../hooks";

export default function Layourt(){
    return (
    <AppProvider>
        <Stack />
    </AppProvider>
    );  
}