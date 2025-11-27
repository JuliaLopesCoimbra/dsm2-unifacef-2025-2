import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './.expo/src/screens/HomeScreen';
import MeusCompromissos from './.expo/src/screens/MeusCompromissos';
import CompromissosEquipe from './.expo/src/screens/CompromissosEquipe';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Início' }} />
        <Stack.Screen name="MeusCompromissos" component={MeusCompromissos} options={{ title: 'Meus compromissos' }} />
        <Stack.Screen name="CompromissosEquipe" component={CompromissosEquipe} options={{ title: 'Compromissos da equipe' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
