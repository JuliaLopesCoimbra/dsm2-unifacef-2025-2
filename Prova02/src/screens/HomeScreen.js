import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agenda do Dia</Text>
      <Text style={styles.name}>Julia Lopes</Text>
      <Text style={styles.role}>Engenharia de Software</Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('MeusCompromissos')}
        >
          <Text style={styles.buttonText}>Meus Compromissos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.secondButton]}
          onPress={() => navigation.navigate('CompromissosEquipe')}
        >
          <Text style={styles.buttonText}>Compromissos da Equipe</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15
  },
  name: {
    fontSize: 20
  },
  role: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 40
  },

  buttonsContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 20
  },

  button: {
    backgroundColor: '#ff4fa3',
    width: '85%',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3
  },

  secondButton: {
    backgroundColor: '#ff4fa3'
  },

  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16
  }
});
