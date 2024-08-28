import React from 'react';
import { 
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

import { useNavigation } from '@react-navigation/native'

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image
          source={require("../../assets/logo.png")}
          style={{ width: "100%" }}
          resizeMode="contain"
        />
      </View>

      <View style={styles.containerForm}>
        <Text style={styles.title}>
          Monitore e organize seus gastos de qualquer lugar!
        </Text>
        <Text style={styles.text}>Faça login para começar</Text>

        <TouchableOpacity 
          style={styles.button}
          onPress={ () => navigation.navigate('SignIn')}
        >
          <Text style={styles.buttonText}>Acessar</Text>
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
  containerLogo: {
    flex: 2,
    backgroundColor: "#d8b7ff",
    justifyContent: "center",
    alignItems: "center",
  },
  containerForm: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom
  }
});
