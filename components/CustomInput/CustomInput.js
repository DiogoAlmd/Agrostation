import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { Input } from "./CustomInput-style";

export const CustomInput = props => {

const styles = StyleSheet.create({
input: {
    height: props.height,
    width: props.width,
    borderColor: props.borderColor,
    borderWidth: props.border,
    borderRadius: props.borderRadius,
    padding: 15,
    placeholderTextColor: props.placeholderColor,
    backgroundColor: props.backgroundColor,
    color: props.color
  }
})

return (
    <TextInput style={styles.input} 
               placeholder={props.placeholder}/>      
  )
}
