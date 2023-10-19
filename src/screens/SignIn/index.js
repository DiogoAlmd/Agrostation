import React, { useState } from 'react';
import { TextInput, View, Text, StyleSheet, Button } from 'react-native';

export function SignIn(){
    return(
        <View>
            <TextInput style={styles.input} placeholder="Login"/>
            <TextInput style={styles.input} placeholder="Senha"/>
            <Button title="Entrar"/>
            <Button title="Criar Conta"/>
        </View>
    );
}



const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 10,
  },
});
