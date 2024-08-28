import React from 'react';
import { 
  View,
  Text,
  StyleSheet, 
} from 'react-native';

import colors from '../../theme/colors'

import { MotiView } from 'moti';

export default function Balance({ saldo, gastos }) {
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
        <Text style={styles.itemTitle}>Saldo</Text>
        <View style={styles.content}>
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.balance}>{new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(balance)}</Text>
        </View>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemTitle}>Gastos</Text>
        <View style={styles.content}>
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.expenses}>{new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(gastos)}</Text>
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
    paddingStart: 18,
    paddingEnd: 18,
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
    padding: 12,
    borderRadius: 8,
    borderColor: colors.opacity_black,
  },

  itemTitle: {
    fontSize: 20,
    color: colors.gray_400,
  },

  currencySymbol: {
    color: colors.gray_400,
    marginRight: 6,
  },

  balance: {
    fontSize: 22,
    color: colors.green,
  },

  expenses: {
    fontSize: 22,
    color: colors.red,
  },
})