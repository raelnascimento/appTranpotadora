import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'

/*=====================================================================
                            FireBase Auth
=======================================================================*/

import { signOut, getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { async } from '@firebase/util';
import { auth } from '../firebase/Firebase';

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


/*===========================================================

                      Firebase Auth

=============================================================*/


  const [loginEmail, setLoginEmail] = useState("");
  const [loginSenha, setLoginSenha] = useState("");

  const register = async () => {

    const user = await createUserWithEmailAndPassword()

  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginSenha
      );
      console.log(user)
      navigation.navigate('Cadastro')
    } catch (error){
      console.log(error.message)
    }
  };
  
  const logout = async () => {
    await signOut(auth);
  };


/*=============================   FIM   ==============================*/



  return (
    <View style={styles.container}>

      <Text style={styles.title}>Bem-vindo(a)</Text>

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
            valueEmail={value}
            placeholder="Digite seu email"
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
            
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
            valueSenha={value}
            placeholder="Digite sua senha"
            secureTextEntry={true}
            onChange={(event) => {
              setLoginSenha(event.target.value);
            }}
          />
        )}
      />

      {errors.password && <Text style={styles.labelError}>{errors.password?.message}</Text>}

      <TouchableOpacity style={styles.button} onPress={handleSubmit(handleSingIn)} >
        <Text style={styles.buttonText} onClick={login}>Acessar</Text>
      </TouchableOpacity>
    </View>
  );
}


/*===========================================================

                             Style       

=============================================================*/



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

/*=============================   FIM   ==============================*/