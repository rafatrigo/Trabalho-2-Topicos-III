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
      <View >
        <Text>Bem-vindo(a)</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  }
})