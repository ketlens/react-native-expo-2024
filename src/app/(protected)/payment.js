import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function List() {
  const [valor, setValor] = useState("0,00");
  const [sugestoes, setSugestoes] = useState([
    { id: 1, nome: "Pandora Heed" },
    { id: 2, nome: "Irvin Cogan" },
    { id: 3, nome: "Milt MacRitchie" },
    { id: 4, nome: "Jacquie Weathers" },
    { id: 5, nome: "Morganne Mathews" },
    { id: 6, nome: "Stepha Gascoyen" },
    { id: 7, nome: "Eveline Morilla" },
    { id: 8, nome: "Warde Bithell" },
    { id: 9, nome: "Marjorie Wolfenden" },
    { id: 10, nome: "Antonia Goodbar" },
    { id: 11, nome: "Melloney Szubert" },
    { id: 12, nome: "Carole Kuschke" },
    { id: 13, nome: "Candra Menpes" },
    { id: 14, nome: "Peadar Olivera" },
    { id: 15, nome: "Bunnie Kinsell" },
    { id: 16, nome: "Brannon Castri" },
    { id: 17, nome: "Merola Cooper" },
    { id: 18, nome: "Carree Dyne" },
    { id: 19, nome: "Cindelyn Reckless" },
    { id: 20, nome: "Flossy Sterland" },
    { id: 21, nome: "Taryn Corwin" },
    { id: 22, nome: "Karly Rimes" },
    { id: 23, nome: "Annetta Hulbert" },
    { id: 24, nome: "Pansie Lehrer" },
    { id: 25, nome: "Ilka Norster" },
    { id: 26, nome: "Hilliary Boag" },
    { id: 27, nome: "Ashlen Gotter" },
    { id: 28, nome: "Bennie Baptist" },
    { id: 29, nome: "Garnette Carney" },
    { id: 30, nome: "Mufi Clackson" },
    { id: 31, nome: "Vera Sherrell" },
    { id: 32, nome: "Phillida Groucutt" },
    { id: 33, nome: "Lorrie De Filippo" },
    { id: 34, nome: "Lulita Ovington" },
    { id: 35, nome: "Luciana Stacey" }
  ]);
  const [id, setId] = useState(1);
  const [data, setData] = useState(new Date());
  const [viewCalendar, setViewCalendar] = useState(false);
  const handleCalendar = (event, selectedDate) => {
    const currentDate = selectedDate || data; 
    setViewCalendar(false);
    setData(currentDate);
   
  };
  const [observacoes, setObservacoes] = useState("");

  return (
    
    <View style={styles.content}>
      <View style={styles.InputView}>
        <FontAwesome name="dollar" size={24} color="black" />
        <TextInput
          placeholder="Valor"
          keyboardType="decimal-pad"
          style={styles.inputvalor}
          value={valor}
          onChangeText={setValor}
        />
      </View>
      <View style={styles.InputView}>
        <Picker selectedValue={id} onValueChange={(itemValue, index)=>{setId(itemValue)}} style={{width:"100%"}}>
          {sugestoes?.map((item)=> {return <Picker.Item key={item.id} label={item.nome} value={item.id} />})}
        </Picker>
      </View>
      <View style={styles.InputView}>
        <Text onPress={()=>setViewCalendar(true)} style={styles.inputData}>
          {data.toLocaleDateString().split("T")[0]}
          </Text>
        {viewCalendar && (
            <DateTimePicker 
            value={data} 
            onChange={handleCalendar}  
            mode="date"
            testID="dateTimePicker"
            />
          )
        }
      </View>
      <View style={styles.InputView}>
        <TextInput placeholder="observações" value={observacoes} multiline={true} onChangeText={setObservacoes} style={styles.inputObservacoes} />
      </View>
      <View style={styles.Button}>
        <Button title="Salvar" />
        <Button title="Continuar" />
        <Button title="Cancelar" onPress={() => console.log('Voltar')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F0F8FF'
  },
  InputView: {
    borderWidth: 1,
    width: '100%',
    margin: 10,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
  },
  Button: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-around'
  },
  inputvalor: {
    flex: 1,
    textAlign: 'right',
    padding: 10
  },
  inputData:{
    width: '100%',
    textAlign: 'center',
    fontFamily: 'monospace',
    fontSize:20,
    padding: 10,
  },
  inputObservacoes: {
    fontSize: 16,
    flex: 1,
    fontFamily: 'monospace',
    lineHeight: 20,

  }
});
