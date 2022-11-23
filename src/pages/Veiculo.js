import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'

const schema = yup.object({
  chavepix: yup.string().required("Informe seu nome completo"),
})


export default function Veiculo({navigation}) {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  function handleSingIn(data) {
    console.log(data),
    navigation.navigate('Home')
  }



  return (
    <View style={styles.container}>

      <Text style={styles.title}>Cadastro do Veiculo</Text>

      <Controller
        control={control}
        name="chavepix"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[
              styles.input, {
                borderWidth: errors.chavepix&& 1,
                borderColor: errors.chavepix && '#ff375b'
              }
            ]}
            onChangeText={onChange}
            onBlur={onBlur} //chamado quando o textinput é tocado
            value={value}
            placeholder="Seu nome completo"
          />
        )}
      />

      

      <Controller
        control={control}
        name="cnh"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[
              styles.input, {
                borderWidth: errors.cnh && 1,
                borderColor: errors.cnh && '#ff375b'
              }
            ]}
            onChangeText={onChange}
            onBlur={onBlur} //chamado quando o textinput é tocado
            value={value}
            placeholder="Digite sua CNH"
          />
        )}
      />

      

      <Controller
        control={control}
        name="docveiculo"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[
              styles.input, {
                borderWidth: errors.docveiculo && 1,
                borderColor: errors.docveiculo && '#ff375b'
              }
            ]}
            onChangeText={onChange}
            onBlur={onBlur} //chamado quando o textinput é tocado
            value={value}
            placeholder="Digite o documento do veiculo"
            secureTextEntry={true}
          />
        )}
      />

      

      <Controller
        control={control}
        name="modeloveiculo"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[
              styles.input, {
                borderWidth: errors.modeloveiculo && 1,
                borderColor: errors.modeloveiculo && '#ff375b'
              }
            ]}
            onChangeText={onChange}
            onBlur={onBlur} //chamado quando o textinput é tocado
            value={value}
            placeholder="Digite o modelo do veiculo"
            secureTextEntry={true}
          />
        )}
      />

      

      <Controller
        control={control}
        name="placaveiculo"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[
              styles.input, {
                borderWidth: errors.placaveiculo && 1,
                borderColor: errors.placaveiculo && '#ff375b'
              }
            ]}
            onChangeText={onChange}
            onBlur={onBlur} //chamado quando o textinput é tocado
            value={value}
            placeholder="Digite a placa do veiculo"
            secureTextEntry={true}
          />
        )}
      />

      

      <Controller
        control={control}
        name="anoveiculo"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[
              styles.input, {
                borderWidth: errors.anoveiculo && 1,
                borderColor: errors.anoveiculo && '#ff375b'
              }
            ]}
            onChangeText={onChange}
            onBlur={onBlur} //chamado quando o textinput é tocado
            value={value}
            placeholder="Digite o ano do veiculo"
            secureTextEntry={true}
          />
        )}
      />
      


      <TouchableOpacity style={styles.button} onPress={handleSubmit(handleSingIn)} >
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F4284',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 18
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    color: '#121212',
    fontWeight: 'bold',
    color: 'white'
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 15,
    margin: 5,
    borderWidth: 1,
    borderColor: 'black'
  },
  button: {
    width: '50%',
    height: 30,
    backgroundColor: 'green',
    textAlign: 'center',
    borderRadius: 10,
    marginTop: 20
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    padding: 2
  },

  labelError: {
    alignSelf: 'flex-start',
    color: '#ff375b',
    marginBottom: 8,
    paddingLeft: 15
  }

});

