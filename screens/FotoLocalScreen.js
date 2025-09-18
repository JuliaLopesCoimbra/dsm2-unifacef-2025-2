import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default function FotoLocalScreen() {
  return (
    <View style={styles.centerAll}>
      <Image
        source={require('../assets/local.jpeg')}
        style={styles.localImage}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  centerAll: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  localImage: { width: 280, height: 280 },
});
