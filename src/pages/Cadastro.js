import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'

const schema = yup.object({
  username: yup.string().required("Informe seu nome completo"),
  email: yup.string().email("Email Invalido").required("Informe seu email"),
  password: yup.string().min(6, "A senha deve ter pelo menos 6 digitos").required("Informe sua senha"),
  cpf: yup.string().min(11, "Digite seu CPF corretamente, min 11").required("Informe seu cpf").max(11, "CPF inválido"),
  uf: yup.string().max(2, "Máximo 2 digítos").required("Informe sua UF"),
  cidade: yup.string().required("Informe sua cidade"),
  telefone: yup.string().required("Informe seu telefone"),
})


export default function Cadastro({navigation}) {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  function handleSingIn(data) {
    console.log(data),
    navigation.navigate('Veiculo')
  }



  return (
    <View style={styles.container}>

      <Text style={styles.title}>Realize seu Cadastro</Text>

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
            placeholder="Seu nome completo"
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

      <Controller
        control={control}
        name="cpf"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[
              styles.input, {
                borderWidth: errors.cpf && 1,
                borderColor: errors.cpf && '#ff375b'
              }
            ]}
            onChangeText={onChange}
            onBlur={onBlur} //chamado quando o textinput é tocado
            value={value}
            placeholder="Digite seu CPF"
            secureTextEntry={true}
          />
        )}
      />

      {errors.cpf && <Text style={styles.labelError}>{errors.cpf?.message}</Text>}

      <Controller
        control={control}
        name="cidade"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[
              styles.input, {
                borderWidth: errors.cidade && 1,
                borderColor: errors.cidade && '#ff375b'
              }
            ]}
            onChangeText={onChange}
            onBlur={onBlur} //chamado quando o textinput é tocado
            value={value}
            placeholder="Digite sua cidade"
            secureTextEntry={true}
          />
        )}
      />

      {errors.cidade && <Text style={styles.labelError}>{errors.cidade?.message}</Text>}

      <Controller
        control={control}
        name="uf"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[
              styles.input, {
                borderWidth: errors.uf && 1,
                borderColor: errors.uf && '#ff375b'
              }
            ]}
            onChangeText={onChange}
            onBlur={onBlur} //chamado quando o textinput é tocado
            value={value}
            placeholder="Digite a UF"
            secureTextEntry={true}
          />
        )}
      />
      {errors.uf && <Text style={styles.labelError}>{errors.uf?.message}</Text>}

      <Controller
        control={control}
        name="telefone"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[
              styles.input, {
                borderWidth: errors.telefone && 1,
                borderColor: errors.telefone && '#ff375b'
              }
            ]}
            onChangeText={onChange}
            onBlur={onBlur} //chamado quando o textinput é tocado
            value={value}
            placeholder="Digite seu telefone"
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

