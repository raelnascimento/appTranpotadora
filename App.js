import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Inicial from './src/pages/Inicial';
import Cadastro from './src/pages/Cadastro';
import Login from './src/pages/Login';
import Veiculo from './src/pages/Veiculo';
import Pedidos from './src/pages/Pedidos';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Pedidos'>
        <Stack.Screen name="Página Inicial" component={Inicial} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Veiculo" component={Veiculo} />
        <Stack.Screen name="Pedidos" component={Pedidos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;