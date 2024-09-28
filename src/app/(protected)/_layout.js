import { Drawer } from "expo-router/drawer";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {Ionicons} from "@expo/vector-icons";
import { Button, Image, TouchableOpacity, View, Text } from "react-native";
import { useAuth } from "../../hooks/Auth/index";


function CustomDrawerContent(props) {
const {user, signOut} = useAuth();


  return (
    <View style={{ flex: 1 }}>
      <View style={{marginTop: 20, justifyContent: "center", alignItems: "center", backgroundColor: "#f0f0f0", paddingVertical: 10, }}>
        <Image source={{uri: "https://www.github.com/ketlens.png"}} style={{ width: 100, height: 100, borderRadius: 50, margin:10 }} />
          <Text style={{fontSize: 20, textAlign: "center"}} >
            {user.user?.nome}
          </Text>
      </View>
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
    <TouchableOpacity onPress={()=>signOut()}
    style={{
    justifyContent:"center",
    alingItens:"center",
    height:50,
    margin:10,
    background: "#4b204b",
    color: "white",
    borderRadius: 5,}}>
      <Text style={{color:"white", fontFamily: "regular"}}>Deslogar</Text>
    </TouchableOpacity>
    <Button title="Sair"  style={{height: 100}} />
    </View>
  );
}


const DrawerLayout = () =>{
   return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />} >
        <Drawer.Screen name="index" options={{drawerLabel: "Principal",
        headerTitle:"Principal",
        drawerIcon: () => <Ionicons name="home" size={24} color="black" />
      }}
        />
        <Drawer.Screen name="list" options={{drawerLabel: "Listagem",
        headerTitle:"Listagem",
        drawerIcon: () => <Ionicons name="list" size={24} color="black" />
      }}
        />
        <Drawer.Screen name="payment" options={{drawerLabel: "Pagamentos",
        headerTitle:"Pagamentos",
        drawerIcon: () => <Ionicons name="diamond-outline" size={24} color="black" />
      }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}


export default function Layout() {
  return DrawerLayout();
}