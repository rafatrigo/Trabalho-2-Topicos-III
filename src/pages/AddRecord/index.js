import React, { useState } from 'react'

// import CheckBox from '@react-native-community/checkbox';

import CheckBox from '../../components/Checkbox'

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import { Button, Input } from 'react-native-elements'

import { useNavigation } from '@react-navigation/native'

import { supabase } from '../../services/supabase'

import { v4 as uuidv4 } from 'uuid';

export default function Auth() {
  const navigation = useNavigation()

  const [title, setTitle] = useState('')
  const [value, setValue] = useState('')
  const [date, setDate] = useState('')
  const [type, setType] = useState(false)



  return (
    <View style={styles.container}>

      <View style={styles.valuesContainer}>

        <Input
          label="Título"
          onChangeText={(title) => setTitle(title)}
          value={title}
          placeholder='Ex.: Conta de luz.'
        />

        <Input
          label="Valor"
          onChangeText={(value) => setValue(value)}
          value={value}
          placeholder='Valor em reais.'
        />

        <Input
          label="Data"
          onChangeText={(date) => setDate(date)}
          value={date}
          placeholder='Ex.: 11/09/2024'
        />

        <View style={styles.checkBoxContainer}>

          <View>
            <Text style={styles.typeTitle}>Tipo</Text>
            <CheckBox
              value={type}
              onValueChange={(type) => setType(!type)}
              style={styles.income}
            />
          </View>
          
        </View>

        <View style={styles.buttonsContainer}>
          
          <View style={styles.btnContainer}>
            <Button title="Confirmar" onPress={
              async () => {
                var typeValue;

                type == false ? typeValue = 0 : typeValue = 1;

                const uuid = uuidv4();

                console.log(typeValue);
                console.log(type)

                const { data, error } = await supabase.from('account_records').insert([
                  {
                    id: uuid,
                    label: title,
                    value: value,
                    date: date,
                    type: typeValue,
                  },
                ])

                if(!error){
                  navigation.navigate('Home');
                }
              }
              
            } />
          </View>

          <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>

        </View>
        
      </View>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    padding: 12,
  },

  valuesContainer: {
    paddingTop: 4,
    paddingBottom: 4,
  },

  checkBoxContainer: {
    marginTop: 20,
  },

  buttonsContainer: {
    marginTop: 10,
  },

  buttonsContainer: {
    marginTop: 10,
  },

  btnContainer: {
    marginTop: 5,
    marginStart: 10,
  },

  income: {
    color: "#000000",
  },

  outcome: {
    color: "#4f32ff",
  },

  typeTitle: {
    fontSize: 16,
    marginStart: 10,
    fontWeight: "bold",
    color: "#7c7c8a",
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#1E90FF',
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    backgroundColor: '#fff',
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    borderColor: '#e74c3c',
    borderWidth: 1,
    marginStart: 15,
  },
  
  buttonText: {
    color: '#e74c3c',
    fontSize: 18,
  },
})