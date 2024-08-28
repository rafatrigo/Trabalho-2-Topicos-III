import React, { useCallback, useEffect, useState } from 'react';
import { 
  View,
  StyleSheet,
  Text,
  StatusBar,
  FlatList,
  ScrollView, 
} from 'react-native';

import { useFocusEffect, useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

import colors from '../../theme/colors'
import { supabase } from '../../services/supabase';

// const list = [
//   {
//     id: 1,
//     label: 'Boleto conta luz',
//     value: 235.89,
//     date: '17/01/2024',
//     type: 0, // despesas
//   },
//   {
//     id: 2,
//     label: 'Boleto conta água',
//     value: 137.55,
//     date: '20/01/2024',
//     type: 0, // despesas
//   },
//   {
//     id: 3,
//     label: 'Pix Cliente X',
//     value: 2500.00,
//     date: '22/01/2024',
//     type: 1, // receita / entrada
//   },
// ]

interface Account {
  id: number;
  label: string;
  value: number;
  date: string;
  type: number;
}

export default function Home({session}) {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [sumOfDebits, setSumOfDebits] = useState(0);
  const [sumOfCredits, setSumOfCredits] = useState(0);
  const [loading, setLoading] = 

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header name="Flávio Freitas" />

        <Balance entradas="15.500,00" saldo="8.000,00" gastos="7.500,00" />

        <Actions />
      </View>

      <ScrollView
        style={styles.scrollArea}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Últimas movimentações</Text>
        <FlatList
          style={styles.list}
          data={list}
          keyExtractor={ (item) => String(item.id) }
          showsVerticalScrollIndicator={false}
          renderItem={ ({ item }) => <Movements item={ item } />}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.opacity_white,
  },

  header: {

  },

  scrollArea: {
    marginTop: 80,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },

  list: {
    marginStart: 14,
    marginEnd: 14,
  },
})