import { View, Text, Image, StyleSheet } from "react-native";


export default function List() {
  return (
    <View style={styles.contener}>
      <View>
      <Image source={{uri: "https://i.pinimg.com/564x/8b/ef/79/8bef79210d10860ad47cb213f9ccc8bd.jpg"}} style={styles.log} />
      </View>
      <View style={styles.user}>
        <Image source={{uri: "https://i.pinimg.com/736x/94/d1/8d/94d18d8b0b5e219c87d4b2c5650f07d7.jpg"}} style={styles.loga} />
        <Text style={styles.ola}>Nome: <Text style={{fontWeight: "bold", color: "3#8470c9"}}>Ketlen</Text></Text>
      </View>
      <View style={styles.imas}>
      < Image source={{uri: "https://i.pinimg.com/enabled/564x/ca/ac/d2/caacd2078010cd1041dec484aace0910.jpg"}} style={styles.ima} />
      < Image source={{uri: "https://i.pinimg.com/564x/9a/dc/68/9adc684f40a45456fbffa813b4401104.jpg"}} style={styles.ima} />
      < Image source={{uri: "https://i.pinimg.com/564x/90/7f/10/907f10be3d9f2adc8cddb895da751c9a.jpg"}} style={styles.ima} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  contener: { 
    flex: 1, 
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    backgroundColor: "#F0F8FF", 
  },
    user:{
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    log:{
      width: 400, 
      height: 150, 
      borderRadius: 7, 
      marginTop: 2,
    },
    loga:{
      width: 150, 
      height: 150, 
      borderRadius: 75, 
      marginLeft:-126,
      marginTop: -80,
    },
    ola:{
      color: "#845ec2",
      fontFamily: "regular",
      fontSize: 20,
      textAlign: "center",
      marginTop: -40,
      marginLeft: 1,
    },
  imas:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  ima: {
     width: 80, 
     height: 50, 
     borderRadius: 50, 
     margin:30,
  },
});


