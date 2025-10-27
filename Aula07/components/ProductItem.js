import React, { memo } from "react";
import { View, Text, StyleSheet } from "react-native";

function ProductItem({ name, price }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>
        {price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
      </Text>
    </View>
  );
}

export default memo(ProductItem);

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    marginVertical: 6,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  name: { fontWeight: "700", fontSize: 16, marginBottom: 4 },
  price: { color: "#6b7280", fontSize: 14 },
});
