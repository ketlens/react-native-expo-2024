import { Stack } from "expo-router";
import { AppProvider } from "../hooks";
import {useAuth} from "../hooks/Auth";

export default function Layourt(){
const {user} = userAuth();
    return (
    <AppProvider>
        <Stack />
    </AppProvider>
    );  
}