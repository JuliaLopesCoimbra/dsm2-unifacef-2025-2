import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';

// Import das telas
import HomeScreen from './screens/HomeScreen';
import FotoWebScreen from './screens/FotoWebScreen';
import FotoLocalScreen from './screens/FotoLocalScreen';
import IconesScreen from './screens/IconesScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Principal" component={HomeScreen} />
        <Stack.Screen name="FotoWeb" component={FotoWebScreen} options={{ title: 'Foto da Internet' }} />
        <Stack.Screen name="FotoLocal" component={FotoLocalScreen} options={{ title: 'Foto Local' }} />
        <Stack.Screen name="Icones" component={IconesScreen} options={{ title: 'Ícones' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
