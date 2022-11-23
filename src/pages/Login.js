import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'

const schema = yup.object({
  username: yup.string().required("Informe seu username"),
  email: yup.string().email("Email Invalido").required("Informe seu email"),
  password: yup.string().min(6, "A senha deve ter pelo menos 6 digitos").required("Informe sua senha")
})


export default function Login( {navigation}) {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  function handleSingIn(data) {
    console.log(data),
    navigation.navigate('Cadastro')
  }



  return (
    <View style={styles.container}>

      <Text style={styles.title}>Bem-vindo(a)</Text>

      <Controller
        control={control}
        name="username"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[
              styles.input, {
                borderWidth: errors.username && 1,
                borderColor: errors.username && '#ff375b'
              }
            ]}
            onChangeText={onChange}
            onBlur={onBlur} //chamado quando o textinput é tocado
            value={value}
            placeholder="Seu username"
          />
        )}
      />

      {errors.username && <Text style={styles.labelError}>{errors.username?.message}</Text>}

      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[
              styles.input, {
                borderWidth: errors.email && 1,
                borderColor: errors.email && '#ff375b'
              }
            ]}
            onChangeText={onChange}
            onBlur={onBlur} //chamado quando o textinput é tocado
            value={value}
            placeholder="Digite seu email"
          />
        )}
      />

      {errors.email && <Text style={styles.labelError}>{errors.email?.message}</Text>}

      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[
              styles.input, {
                borderWidth: errors.password && 1,
                borderColor: errors.password && '#ff375b'
              }
            ]}
            onChangeText={onChange}
            onBlur={onBlur} //chamado quando o textinput é tocado
            value={value}
            placeholder="Digite sua senha"
            secureTextEntry={true}
          />
        )}
      />

      {errors.password && <Text style={styles.labelError}>{errors.password?.message}</Text>}

      <TouchableOpacity style={styles.button} onPress={handleSubmit(handleSingIn)} >
        <Text style={styles.buttonText}>Acessar</Text>
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
    fontSize: 34,
    marginBottom: 34,
    color: '#121212',
    fontWeight: 'bold'
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

