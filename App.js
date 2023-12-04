
import React from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native';


const styleInput = () =>  {
  return{
      outlineStyle: 'none'

    }
}

const Login = () => {
  return(
    <View style={[styles.div, { height: '100vh' }]}>
    <Text style={styles.title}>Patrimônio Master</Text>

    <View style={styles.divInputs}>
      <View style={styles.inputs}>
        <Text style={styles.textInput}>Login:</Text>
        <TextInput style={[styles.input, styleInput()]}/>
      </View>
      <View style={styles.inputs}> 
        <Text style={styles.textInput}>Senha:</Text>
        <TextInput style={[styles.input, styleInput()]}/>
      </View>
        <TouchableOpacity style={styles.button} activeOpacity={0.7}  >
          <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>
        <Text style={{textAlign:'center', color:'#385898' }}>Esqueceu a senha?</Text>
    </View>
  </View>
  )
}

const Password = () => {
  return(
    <View style={[styles.div, { height: '100vh' }]}>
    <Text style={styles.title}>Patrimônio Master</Text>

    <View style={styles.divInputs}>
      <View style={styles.inputs}>
        <Text style={styles.textInput}>Login:</Text>
        <TextInput style={[styles.input, styleInput()]}/>
      </View>
        <Text style={{textAlign:'center', color:'#385898' }}>Esqueceu a senha?</Text>
    </View>
  </View>
  )
}



export default function App() {
  return (
    <View style={styles.container}>
      <Login />
      <Password/>
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center',
  },
  div: {
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: '2rem',
    bottom: '5rem'
  },
  divInputs: {
    display: 'flex',
    gap: '1.2rem'
  },
  inputs: {
    display:'flex',
    gap: '0.5rem',
    width: '17rem'
  },
  input: {
    border: '1px solid #000',
    height: '2.5rem',
    borderRadius: '0.5rem',
    fontSize: '1.2rem',
  },
  textInput: {
    fontSize: 20
  },
  button: {
    backgroundColor: '#1877F2',
    alignItems: 'center',
    padding: '0.5rem',
    borderRadius: '0.5rem',
    color: '#fff',
  },
  textButton: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
