import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Julia Cristina Lopes Coimbra</Text>

      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('FotoWeb')}
        >
          <Text style={styles.buttonText}>1) Foto da Internet</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('FotoLocal')}
        >
          <Text style={styles.buttonText}>2) Foto Local Centralizada</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Icones')}
        >
          <Text style={styles.buttonText}>3) Ícones em Linha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center', // centraliza verticalmente
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 32, // espaço abaixo do título
  },
  buttons: {
    gap: 12,
    width: '80%', // não encosta nas laterais
  },
  button: {
    backgroundColor: '#111827',
    paddingVertical: 14,
    borderRadius: 10,
    alignSelf: 'center', // garante que centraliza dentro da view
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
});
