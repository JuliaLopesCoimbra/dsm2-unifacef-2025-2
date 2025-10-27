import React, { useMemo, useState, useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  SectionList,
  StyleSheet,
  useWindowDimensions,
  Platform,
} from "react-native";
import ProductItem from "./components/ProductItem";
import SectionHeader from "./components/SectionHeader";

const PRODUCTS = [
  { id: "1", name: "Notebook Pro 14", price: 7499.9, category: "Eletrônicos" },
  { id: "2", name: "Smartphone X", price: 3999.0, category: "Eletrônicos" },
  { id: "3", name: "TV 55\" 4K", price: 3599.0, category: "Eletrônicos" },
  { id: "4", name: "Camiseta Dry", price: 79.9, category: "Roupas" },
  { id: "5", name: "Calça Jeans Slim", price: 159.9, category: "Roupas" },
  { id: "6", name: "Jaqueta Corta-Vento", price: 299.0, category: "Roupas" },
  { id: "7", name: "Relógio Pulse", price: 499.0, category: "Acessórios" },
  { id: "8", name: "Carteira Couro", price: 139.9, category: "Acessórios" },
  { id: "9", name: "Cinto Social", price: 89.9, category: "Acessórios" },
];

export default function App() {
  const [query, setQuery] = useState("");
  const { width } = useWindowDimensions();

  // Escala leve para tipografia responsiva
  const base = Math.min(Math.max(width / 380, 0.9), 1.2);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return PRODUCTS;
    return PRODUCTS.filter((p) => p.name.toLowerCase().includes(q));
  }, [query]);

  // Agrupar por categoria → SectionList
  const sections = useMemo(() => {
    const map = new Map();
    for (const p of filtered) {
      if (!map.has(p.category)) map.set(p.category, []);
      map.get(p.category).push(p);
    }
    return Array.from(map.entries()).map(([title, data]) => ({ title, data }));
  }, [filtered]);

  const keyExtractor = useCallback((item) => item.id, []);

  const renderItem = useCallback(
    ({ item }) => <ProductItem name={item.name} price={item.price} />,
    []
  );

  const renderSectionHeader = useCallback(
    ({ section }) => <SectionHeader title={section.title} />,
    []
  );

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style={Platform.OS === "ios" ? "dark" : "auto"} />
      <View style={styles.container}>
        <Text style={[styles.title, { fontSize: 20 * base }]}>
          Catálogo Interativo
        </Text>

        <View style={styles.searchWrap}>
          <TextInput
            placeholder="Filtrar por nome (ex: TV, Camiseta...)"
            value={query}
            onChangeText={setQuery}
            style={[styles.input, { fontSize: 14 * base, height: 44 }]}
            clearButtonMode="while-editing"
          />
        </View>

        <SectionList
          sections={sections}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          stickySectionHeadersEnabled
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          // Otimizações
          initialNumToRender={12}
          windowSize={10}
          maxToRenderPerBatch={24}
          removeClippedSubviews
          getItemLayout={(data, index) => ({
            length: 72,
            offset: 72 * index,
            index,
          })}
          ListEmptyComponent={
            <Text style={styles.empty}>Nenhum produto encontrado.</Text>
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#f4f5f7" },
  container: { flex: 1, padding: 16, gap: 12 },
  title: { fontWeight: "700", textAlign: "center" },
  searchWrap: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  input: { paddingHorizontal: 4 },
  listContent: { paddingBottom: 16 },
  empty: { textAlign: "center", padding: 24, color: "#6b7280" },
});
