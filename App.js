import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from './src/pages/Home';
import Cadastro from './src/pages/Cadastro';
import Login from './src/pages/Login';
import Veiculo from './src/pages/Veiculo';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Veiculo" component={Veiculo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;