import React, { useCallback, memo } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";

// Gere os dados fora do componente para não recriar a cada render
const produtos = Array.from({ length: 1000 }, (_, i) => ({
  id: String(i),
  nome: `Produto ${i}`,
  // preço fixo para evitar re-render por Math.random()
  preco: (i * 3.57 % 500).toFixed(2),
}));

const Item = memo(({ nome, preco }) => (
  <View style={styles.itemCard}>
    <Text style={styles.nome}>{nome}</Text>
    <Text style={styles.preco}>R$ {preco}</Text>
  </View>
));

export default function ListaOtimizada() {
  const renderItem = useCallback(
    ({ item }) => <Item nome={item.nome} preco={item.preco} />,
    []
  );

  const keyExtractor = useCallback((item) => item.id, []);

  // Informar o tamanho dos itens ajuda o FlatList a virtualizar melhor
  const ITEM_HEIGHT = 68; // deve bater com o styles.itemCard
  const getItemLayout = useCallback(
    (_data, index) => ({
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * index,
      index,
    }),
    []
  );

  return (
    <FlatList
      data={produtos}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      getItemLayout={getItemLayout}
      initialNumToRender={16}
      windowSize={10}
      maxToRenderPerBatch={24}
      removeClippedSubviews
      contentContainerStyle={styles.listContent}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  listContent: {
    paddingVertical: 8,
  },
  separator: {
    height: 8,
  },
  itemCard: {
    height: 68,
    backgroundColor: "#f8f9fa",
    padding: 12,
    borderRadius: 10,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  nome: {
    fontWeight: "700",
    fontSize: 16,
    marginBottom: 4,
  },
  preco: {
    color: "#6b7280",
    fontSize: 14,
  },
});
