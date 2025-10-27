import React from "react";
import { SectionList, Text, View, StyleSheet } from "react-native";

const dados = [
  { title: "Eletrônicos", data: ["Notebook", "Smartphone", "TV"] },
  { title: "Roupas", data: ["Camiseta", "Calça", "Jaqueta"] },
  { title: "Acessórios", data: ["Relógio", "Carteira", "Cinto"] },
];

export default function ListaAgrupada() {
  return (
    <SectionList
      sections={dados}
      keyExtractor={(item, index) => `${item}-${index}`}
      renderItem={({ item }) => (
        <View style={styles.itemRow}>
          <Text style={styles.itemText}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({ section }) => (
        <View style={styles.headerWrap}>
          <Text style={styles.header}>{section.title}</Text>
        </View>
      )}
      SectionSeparatorComponent={() => <View style={styles.sectionGap} />}
      ItemSeparatorComponent={() => <View style={styles.itemGap} />}
      stickySectionHeadersEnabled
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.content}
    />
  );
}

const styles = StyleSheet.create({
  content: {
    paddingVertical: 6,
  },
  headerWrap: {
    backgroundColor: "#eef2ff",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  header: {
    fontSize: 18,
    fontWeight: "800",
    color: "#1f2937",
  },
  itemRow: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  itemText: {
    fontSize: 15,
  },
  itemGap: {
    height: 1,
    backgroundColor: "#f3f4f6",
  },
  sectionGap: {
    height: 8,
  },
});
