import React from 'react';
import { 
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';

import { useNavigation } from '@react-navigation/native'

export default function SignIn() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.message}>Bem-vindo(a)</Text>
      </View>

      <View styule={styles.containerForm}>
        <Text style={styles.title}>E-mail</Text>
        <TextInput 
          placeholder="Inform e-mail de acesso..."
          style={styles.input}
        />

        <Text style={styles.title}>Senha</Text>
        <TextInput 
          placeholder="Inform senha de acesso..."
          secureTextEntry={true}
          style={styles.input}
        />

        <TouchableOpacity 
          style={styles.button}
          onPress={ () => navigation.navigate('Home') }
        >
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRegister}>
          <Text style={styles.registerText}>
            Não possui uma conta? Registre-se...
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d8b7ff",
  },

  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%',
  },
  
})