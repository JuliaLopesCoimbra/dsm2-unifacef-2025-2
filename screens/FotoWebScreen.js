import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';

export default function FotoWebScreen({ navigation }) {
  return (
    <View style={[styles.container, { backgroundColor: '#FFD54F' }]}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1200&auto=format&fit=crop',
        }}
        style={styles.webImage}
        resizeMode="cover"
      />

      <TouchableOpacity
        style={[styles.button, { marginTop: 24 }]}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Voltar para a tela principal</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20 },
  webImage: { width: '100%', height: 320, borderRadius: 12 },
  button: {
    backgroundColor: '#111827',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: '600' },
});
