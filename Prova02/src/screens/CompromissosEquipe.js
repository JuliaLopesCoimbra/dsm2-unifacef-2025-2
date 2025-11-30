import React from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';

const dadosEquipe = [
  {
    title: 'Julia Lopes',
    data: [
      '09:30: Reunião "Daily"',
      '14:00: Reunião com cliente Carros & Carros',
      '16:30: Prazo final Projeto X'
    ]
  },
  {
    title: 'Jurema (chefe)',
    data: [
      '09:30: Reunião "Daily"',
      '12:00: Almoço com a diretoria',
      '15:00: Saída Viagem'
    ]
  },
  {
    title: 'Aderbal',
    data: [
      '09:30: Reunião "Daily"',
      '13:30: Visita técnica Uni-FACEF',
      '16:30: Prazo final Projeto X'
    ]
  }
];

export default function CompromissosEquipe() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={dadosEquipe}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item}</Text>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.header}>{section.title}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1 },
  header: {
    fontSize: 20,
    backgroundColor: '#eee',
    padding: 8,
    fontWeight: 'bold',
    marginTop: 10
  },
  item: { padding: 10 }
});
