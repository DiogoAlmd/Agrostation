import React, { useState } from 'react';
import { TextInput, View, Text, StyleSheet, Button } from 'react-native';
import { CustomButton } from "../components/Button/App"
import { primaryColor, secondaryColor, whiteColor } from '../../../assets/colors';

export function SignIn(){
    return(
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Login"/>
            <TextInput style={styles.input} placeholder="Senha"/>
            <Button title="Entrar"/>
            <Button title="Criar Conta"/>



            <CustomButton title="Teste" bgColor={primaryColor}/>
            <CustomButton title="Criar conta" bgColor={secondaryColor} border="1" />

        </View>
    );
}



const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#3A0505",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"

  },

 
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 10,
  },

  
});
