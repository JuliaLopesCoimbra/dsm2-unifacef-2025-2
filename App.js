// App.js
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const Stack = createNativeStackNavigator();

// ---------- Tela 1: Formulário ----------
function FormScreen({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmar, setConfirmar] = useState("");
  const [telefone, setTelefone] = useState("");
  const [erros, setErros] = useState({});

  function onlyDigits(s) {
    return s.replace(/\D/g, "");
  }

  function validar() {
    const _erros = {};

    // Nome
    if (!nome.trim()) {
      _erros.nome = "Informe seu nome completo.";
    } else if (nome.trim().split(" ").length < 2) {
      _erros.nome = "Digite nome e sobrenome.";
    }

    // Email (regex simples)
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      _erros.email = "Digite um e-mail válido.";
    }

    // Senha
    if (senha.length < 6) {
      _erros.senha = "A senha deve ter no mínimo 6 caracteres.";
    }

    // Confirmar
    if (confirmar !== senha) {
      _erros.confirmar = "A confirmação deve ser igual à senha.";
    }

    // Telefone (apenas números)
    const tel = onlyDigits(telefone);
    if (!tel) {
      _erros.telefone = "Informe um telefone.";
    }
    // (Opcional) Exigir tamanho mínimo, ex.: 10 ou 11 dígitos no Brasil:
    // else if (tel.length < 10) {
    //   _erros.telefone = "Digite um telefone válido (ex.: DDD + número).";
    // }

    setErros(_erros);
    return Object.keys(_erros).length === 0;
  }

  function handleSubmit() {
    if (!validar()) return;

    // Dados formatados (telefone apenas dígitos; formate como quiser)
    const payload = {
      nome: nome.trim(),
      email: email.trim(),
      telefone: onlyDigits(telefone),
    };

    navigation.navigate("Resultado", { user: payload });
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.select({ ios: "padding", android: undefined })}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.titulo}>Cadastro</Text>

        {/* Nome */}
        <TextInput
          style={styles.input}
          placeholder="Nome completo"
          value={nome}
          autoCapitalize="words"
          onChangeText={setNome}
          returnKeyType="next"
        />
        {erros?.nome ? <Text style={styles.erro}>{erros.nome}</Text> : null}

        {/* Email */}
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={setEmail}
          returnKeyType="next"
        />
        {erros?.email ? <Text style={styles.erro}>{erros.email}</Text> : null}

        {/* Senha */}
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={senha}
          secureTextEntry
          onChangeText={setSenha}
          returnKeyType="next"
        />
        {erros?.senha ? <Text style={styles.erro}>{erros.senha}</Text> : null}

        {/* Confirmar senha */}
        <TextInput
          style={styles.input}
          placeholder="Confirmar senha"
          value={confirmar}
          secureTextEntry
          onChangeText={setConfirmar}
          returnKeyType="done"
        />
        {erros?.confirmar ? (
          <Text style={styles.erro}>{erros.confirmar}</Text>
        ) : null}

        {/* Telefone (só números) */}
        <TextInput
          style={styles.input}
          placeholder="Telefone (apenas números)"
          value={telefone}
          keyboardType="numeric"
          onChangeText={(v) => setTelefone(v.replace(/\D/g, ""))}
          maxLength={15} // limite opcional
        />
        {erros?.telefone ? (
          <Text style={styles.erro}>{erros.telefone}</Text>
        ) : null}

        <Button title="Cadastrar" onPress={handleSubmit} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

// ---------- Tela 2: Resultado ----------
function ResultScreen({ route }) {
  const { user } = route.params ?? {};
  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Sem dados recebidos.</Text>
      </View>
    );
  }

  // Exemplo de formatação simples do telefone (DDD + número)
  const tel = user.telefone;
  const telFmt =
    tel.length === 11
      ? `(${tel.slice(0, 2)}) ${tel.slice(2, 7)}-${tel.slice(7)}`
      : tel.length === 10
      ? `(${tel.slice(0, 2)}) ${tel.slice(2, 6)}-${tel.slice(6)}`
      : tel; // fallback

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Dados do cadastro</Text>
      <View style={styles.card}>
        <Text style={styles.linha}>
          <Text style={styles.label}>Nome: </Text>
          {user.nome}
        </Text>
        <Text style={styles.linha}>
          <Text style={styles.label}>E-mail: </Text>
          {user.email}
        </Text>
        <Text style={styles.linha}>
          <Text style={styles.label}>Telefone: </Text>
          {telFmt}
        </Text>
      </View>
    </View>
  );
}

// ---------- App com Stack Navigator ----------
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Form"
          component={FormScreen}
          options={{ title: "Cadastro" }}
        />
        <Stack.Screen
          name="Resultado"
          component={ResultScreen}
          options={{ title: "Resultado" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, justifyContent: "center", padding: 20, gap: 8 },
  titulo: { fontSize: 24, fontWeight: "bold", marginBottom: 16, textAlign: "center" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  erro: { color: "red", marginTop: -6, marginBottom: 8 },
  card: {
    marginTop: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    backgroundColor: "#fafafa",
  },
  label: { fontWeight: "600" },
  linha: { fontSize: 16, marginBottom: 8 },
});
