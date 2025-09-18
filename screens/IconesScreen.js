import React from 'react';
import { View, StyleSheet} from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';

export default function IconesScreen() {
  return (
    <View style={styles.centerAll}>
      <View style={styles.iconsRow}>
        <Ionicons name="ios-planet" size={56} color="#E53935" />
        <MaterialIcons name="favorite" size={56} color="#43A047" />
        <FontAwesome name="paper-plane" size={56} color="#1E88E5" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centerAll: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  iconsRow: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-between', // espaçamento igual entre eles
    alignItems: 'center',
    paddingHorizontal: 12,
  },
});
