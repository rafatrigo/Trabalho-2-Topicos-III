import React from 'react';
import { 
  View,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity 
} from 'react-native';

import { Feather } from '@expo/vector-icons'

import colors from '../../theme/colors'

export default function Header({name}) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.username}>{name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
})