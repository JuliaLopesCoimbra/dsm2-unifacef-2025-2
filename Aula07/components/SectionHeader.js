import React, { memo } from "react";
import { View, Text, StyleSheet } from "react-native";

function SectionHeader({ title }) {
  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default memo(SectionHeader);

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: "#eef2ff",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    marginTop: 8,
  },
  title: { fontWeight: "800", color: "#1f2937" },
});
