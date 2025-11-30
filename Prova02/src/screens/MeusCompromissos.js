import React, { useCallback } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const compromissosJulia = [
  { id: '1', hora: '09:30', titulo: 'Reunião "Daily"' },
  { id: '2', hora: '14:00', titulo: 'Reunião com cliente Carros & Carros' },
  { id: '3', hora: '16:30', titulo: 'Prazo final Projeto X' },
];

export default function MeusCompromissos() {

  const renderItem = useCallback(({ item }) => (
    <View style={styles.card}>
      <Text style={styles.hora}>{item.hora}</Text>
      <Text style={styles.titulo}>{item.titulo}</Text>
    </View>
  ), []);

  return (
    <View style={styles.container}>
      <Text style={styles.nome}>Julia Lopes</Text>
      <Text style={styles.cargo}>Engenharia de Software</Text>

      <FlatList
        data={compromissosJulia}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        initialNumToRender={5}
        windowSize={10}
        style={{ marginTop: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1 },
  nome: { fontSize: 22, fontWeight: 'bold' },
  cargo: { color: 'gray', marginBottom: 10 },
  card: {
    backgroundColor: '#f1f1f1',
    padding: 12,
    borderRadius: 10,
    marginVertical: 6,
  },
  hora: { fontWeight: 'bold', fontSize: 16 },
  titulo: { fontSize: 14, marginTop: 4 },
});
