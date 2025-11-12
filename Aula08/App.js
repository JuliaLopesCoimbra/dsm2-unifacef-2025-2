// App.js
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import * as ImagePicker from "expo-image-picker";

export default function App() {
  const [avatarUri, setAvatarUri] = useState(null);

  async function abrirCamera() {
    // Pede permissão da câmera
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permissão necessária", "Precisamos da câmera para tirar sua foto.");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1], // quadrado, bom pra avatar
      quality: 0.7,
    });

    if (!result.canceled) {
      setAvatarUri(result.assets[0].uri);
    }
  }

  async function abrirGaleria() {
    // Pede permissão da galeria
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permissão necessária", "Precisamos da galeria para escolher uma foto.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.7,
    });

    if (!result.canceled) {
      setAvatarUri(result.assets[0].uri);
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.title}>Perfil do Usuário</Text>

      {/* Avatar */}
      <View style={styles.avatarWrapper}>
        {avatarUri ? (
          <Image source={{ uri: avatarUri }} style={styles.avatarImage} />
        ) : (
          <View style={styles.avatarPlaceholder}>
            <Text style={styles.avatarInitials}>U</Text>
          </View>
        )}
      </View>

      <Text style={styles.subtitle}>Toque nos botões para alterar sua foto</Text>

      {/* Botões */}
      <View style={styles.buttonsRow}>
        <View style={styles.button}>
          <Button title="Tirar Foto" onPress={abrirCamera} />
        </View>
        <View style={styles.button}>
          <Button title="Galeria" onPress={abrirGaleria} />
        </View>
      </View>
    </View>
  );
}

const AVATAR_SIZE = 140;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 24,
  },
  avatarWrapper: {
    marginBottom: 16,
  },
  avatarPlaceholder: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarInitials: {
    fontSize: 40,
    fontWeight: "700",
    color: "#555",
  },
  avatarImage: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 24,
  },
  buttonsRow: {
    flexDirection: "row",
    gap: 12,
  },
  button: {
    flex: 1,
    marginHorizontal: 4,
  },
});
