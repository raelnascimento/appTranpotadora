import { StyleSheet, Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';



export default function Inicial({navigation}) {

  return (
      <ImageBackground source={{ uri: 'https://images.pexels.com/photos/5025517/pexels-photo-5025517.jpeg?auto=compress&cs=tinysrgb&w=1600' }} style={styles.imageBackground}>


        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}> LOGIN </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cadastro')}>
        
          <Text style={styles.buttonText}> CADASTRO </Text>
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
  title: {
    fontSize: 34,
    marginBottom: 34,
    color: '#121212',
    fontWeight: 'bold'
  },
  button: {
    width: '50%',
    height: 30,
    backgroundColor: '#0F4284',
    textAlign: 'center',
    borderRadius: 10,
    marginTop: 20,


  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    padding: 5,

  },
  imageBackground: {
    justifyContent: 'center',
    width: 360,
    height: "100%",
    resizeMode: "cover",
    alignItems: "center",
    opacity:"78%"
  },


});

