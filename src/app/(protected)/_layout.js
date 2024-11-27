import { Drawer } from "expo-router/drawer";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {Ionicons} from "@expo/vector-icons";
import { Button, Image, TouchableOpacity, View, Text } from "react-native";
import { useAuth } from "../../hooks/Auth/index";


function CustomDrawerContent(props) {
const {user, signOut} = useAuth();


  return (
    <View style={{ flex: 1,  }}>
      <View style={{marginTop: 20, justifyContent: "center", alignItems: "center", backgroundColor: "#f0f0f0", paddingVertical: 15, }}>
        <Image source={{uri: "https://www.github.com/ketlens.png"}} style={{ width: 100, height: 100, borderRadius: 50, margin:20 }} />
          <Text style={{fontSize: 20, textAlign: "center"}} >
            {user.user?.nome}
          </Text>
      </View>
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
    <TouchableOpacity 
  onPress={() => signOut()} 
  style={{
    justifyContent: "center",
    alignItems: "center",  // Corrigido: era alingItens
    height: 50,
    margin: 10,
    backgroundColor: "#845ec2",  // Corrigido: era background
    borderRadius: 5
  }}>
    <Text style={{ color: "white", fontFamily: "regular" }}>Deslogar</Text>
</TouchableOpacity>

    
    </View>
  );
}


const DrawerLayout = () =>{
   return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />} >
        <Drawer.Screen name="index" options={{drawerLabel: "Inicio",
        headerTitle:"Inicio", 
        drawerIcon: () => <Ionicons name="home" size={24} color="black" style={{color:"#845ec2"}} />
      }}
        />
         <Drawer.Screen name="notifica" options={{drawerLabel: "Notificações",
        headerTitle:"Notificações", 
        drawerIcon: () => <Ionicons name="notifications"  size={24} color="black" style={{color:"#845ec2"}} />
      }}
        />
       <Drawer.Screen name="notificacao" options={{drawerLabel: "Atividades",
        headerTitle:"Atividades", 
        drawerIcon: () => <Ionicons name="notifications"  size={24} color="black" style={{color:"#845ec2"}} />
      }}
        />
          <Drawer.Screen name="pesquisa" options={{drawerLabel: "Pesquisa",
        headerTitle:"Pesquisa de Livros", 
        drawerIcon: () => <Ionicons name="search"  size={24} color="black" style={{color:"#845ec2"}} />
      }}
        />
         <Drawer.Screen name="favoritos" options={{drawerLabel: "Continue lendo",
        headerTitle:"Continue Lendo", 
        drawerIcon: () => <Ionicons name="heart"  size={24} color="black" style={{color:"#845ec2"}} />
      }}
        />
         <Drawer.Screen name="livro" options={{drawerLabel: "Biblioteca",
        headerTitle:"Biblioteca", 
        drawerIcon: () => <Ionicons name="library"  size={24} color="black" style={{color:"#845ec2"}} />
      }}
        />
        <Drawer.Screen name="usuario" options={{drawerLabel: "Usuario",
        headerTitle:"Usuario", 
        drawerIcon: () => <Ionicons name="person"  size={24} color="black" style={{color:"#845ec2"}} />
      }}
        />
        <Drawer.Screen name="list" options={{drawerLabel: "Listagem",
        headerTitle:"Listagem",
        drawerIcon: () => <Ionicons name="list" size={24} color="black" style={{color:"#845ec2"}} />
      }}
        />
        <Drawer.Screen name="payment" options={{drawerLabel: "Pagamentos",
        headerTitle:"Pagamentos",
        drawerIcon: () => <Ionicons name="diamond" size={24} color="black" style={{color:"#845ec2"}} />
      }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}


export default function Layout() {
  return DrawerLayout();
}