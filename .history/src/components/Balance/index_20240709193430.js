import React from 'react';
import { 
  View,
  Text,
  StyleSheet, 
} from 'react-native';

import colors from '../../theme/colors'

import { MotiView } from 'moti';

export default function Balance({ entradas, saldo, gastos }) {
  return (
    <MotiView 
      style={styles.container}
      from={{
        rotateX: "-100deg",
        opacity: 0,
      }}
      animate={{
        rotateX: "0deg",
        opacity: 1,
      }}
      transition={{
        type: "timing",
        duration: 800,
        delay: 300,
      }}
    >
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Entradas</Text>
        <View style={styles.content}>
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.income}>{entradas}</Text>
        </View>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemTitle}>Saldo</Text>
        <View style={styles.content}>
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.balance}>{saldo}</Text>
        </View>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemTitle}>Gastos</Text>
        <View style={styles.content}>
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.expenses}>{gastos}</Text>
        </View>
      </View>     
    </MotiView>
  );
}

styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: colors.opacity_black,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingStart: 12,
    paddingEnd: 12,
    marginTop: -24,
    marginStart: 14,
    marginEnd: 14,
    paddingTop: 22,
    paddingBottom: 22,
    zIndex: 99,
  },

  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  item: {
    borderWidth: 1,
    padding: 8,
    borderRadius: 8,
    borderColor: colors.opacity_black,
    alignItems: 'center',
  },

  itemTitle: {
    fontSize: 20,
    color: colors.gray_400,
  },

  currencySymbol: {
    color: colors.gray_400,
    marginRight: 6,
  },

  income: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.blue,
  },
  
  balance: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.green,
  },
  
  expenses: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.red,
  },
})