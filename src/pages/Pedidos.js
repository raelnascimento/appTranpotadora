import { StyleSheet, Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';



export default function Pedidos({navigation}) {

  return (


  <ImageBackground source={{ uri: 'https://static.vecteezy.com/ti/vetor-gratis/t2/1234086-brilhante-gradiente-azul-diagonal-listras-gratis-vetor.jpg' }} style={styles.imageBackground}>

        <div style={styles.pedidos}>
          <Text>
              oi 
          </Text>
        </div>
        
        <TouchableOpacity style={styles.buttonAceitar} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>✓ Aceitar  </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRecusar} onPress={() => navigation.navigate('Cadastro')}>
          <Text style={styles.buttonText}>✕ Recusar </Text>
        </TouchableOpacity>
        

  </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F4284',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 18,
    width: "100%",
    height: "100%",
    padding: 0,
    margin: 0
  },

  pedidos:{
    width: '80%',
    height: '30%',
    backgroundColor: '#FFFFFf',    
    borderRadius: 10,
    marginTop: '0%',
  },

  title: {
    fontSize: 34,
    marginBottom: 34,
    color: '#121212',
    fontWeight: 'bold'
  },
  buttonAceitar: {
    width: '30%',
    height: '15%',
    backgroundColor: '#0F4284',    
    borderRadius: 10,
    marginTop: 20,
  },
  buttonRecusar: {
    width: '30%',
    height: '15%',
    marginTop: 20,
    backgroundColor: '#ff0000',    
    borderRadius: 10,

  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    margin: '15%',
    textAlign: 'center',

  },
  imageBackground: {
    justifyContent: 'center',
    width: '100',
    height: "100%",
    resizeMode: "cover",
    alignItems: "center",
    opacity:"78%"
  },


});

