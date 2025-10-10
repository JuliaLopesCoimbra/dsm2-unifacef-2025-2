import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();

// --------- Tela Principal (Detalhes) ---------
function HomeScreen({ navigation }) {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Contagem: {count}</Text>

      <TouchableOpacity style={styles.button} onPress={incrementCount}>
        <Text style={styles.buttonText}>Clique para aumentar</Text>
      </TouchableOpacity>

      {/* Botão para navegar até a tela Perfil */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#8E24AA" }]}
        onPress={() => navigation.navigate("Perfil")}
      >
        <Text style={styles.buttonText}>Ir para Perfil</Text>
      </TouchableOpacity>

      {/* Botão para navegar até a tela Galeria */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#1976D2" }]}
        onPress={() => navigation.navigate("Galeria")}
      >
        <Text style={styles.buttonText}>Abrir Galeria</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

// --------- Tela Perfil ---------
function PerfilScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Tela de Perfil</Text>
    </View>
  );
}

// --------- Tela Galeria ---------
function GaleriaScreen() {
  const imagens = [
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
  ];

  return (
    <ScrollView contentContainerStyle={styles.galleryContainer}>
      {imagens.map((uri, idx) => (
        <Image key={idx} source={{ uri }} style={styles.galleryImage} resizeMode="cover" />
      ))}
    </ScrollView>
  );
}

// --------- Navegação ---------
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Detalhes"
          component={HomeScreen}
          options={{ title: "Tela de Detalhes" }}
        />
        <Stack.Screen
          name="Perfil"
          component={PerfilScreen}
          options={{ title: "Meu Perfil ✨" }}
        />
        <Stack.Screen
          name="Galeria"
          component={GaleriaScreen}
          options={{
            title: "Galeria",
            headerTitleAlign: "center",
            // Ícone de câmera no topo (headerRight)
            headerRight: () => (
              <Ionicons
                name="camera"
                size={28}      // <-- Tamanho personalizado
                color="#D5006D" // <-- Cor personalizada
                style={{ marginRight: 16 }}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFB6C1", // Fundo rosado claro
    alignItems: "center",
    justifyContent: "center",
  },
  counterText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#D5006D", // Cor de texto no contador (rosa escuro)
    marginBottom: 20,
    fontFamily: "Roboto",
  },
  button: {
    backgroundColor: "#FF1493", // Rosa vibrante
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    shadowColor: "#FFEB3B",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Roboto",
  },

  // Estilos da Galeria
  galleryContainer: {
    padding: 16,
    alignItems: "center",
    gap: 16,
    backgroundColor: "#FFF0F5",
  },
  galleryImage: {
    width: "100%",
    height: 220,
    borderRadius: 12,
  },
});
