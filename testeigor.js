import * as React from 'react';
import { } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


import Inicio from './Telas/Inicio';
import Itinerario from './Telas/Iti';
import localizacao from './Telas/Localizacao';
import Cadastro from './Telas/Cadastro';
import Login from './Telas/Login';
import Motorista from './Telas/Motorista';
import TelasOpcoes from './Telas/TelaOpcoes';

import { View, Text, Button, Image } from 'react-native';
import * as Animatable from "react-native-animatable";


const Drawer = createDrawerNavigator();

function HomeScreen({ navigation }) {
  return (


    <View style={{ flex: 1, color: 'white', alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }}>
      <Animatable.Image
      animation="flipInY"
        source={require('../EasyBus-master/assets/easybus.png')}
        style={{

          justifyContent: 'center',
          top:-65,
          width: 390,
          height: 300,
        }}

      />

      <Text> {'\n'}</Text>

      <View style={{
        backgroundColor: "white", width: 100,
        height: 40, borderRadius:20, top:-55,
      }} >
        <Button
          title="Entrar"
          onPress={() => navigation.navigate('Opcoes')}
        /></View>

      <Text> {'\n'}</Text>

    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" >

        {/* <Drawer.Navigator useLegacyImplementation> */}
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Inicio" component={Inicio} />
        <Drawer.Screen name="Localizacao" component={localizacao} />
        <Drawer.Screen name="Itinerario" component={Itinerario} />
        <Drawer.Screen name="Cadastro" component={Cadastro} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Opcoes" component={TelasOpcoes}/>
        <Drawer.Screen name="Motorista" component={Motorista}/>


      </Drawer.Navigator>

     
    </NavigationContainer>
  );
}