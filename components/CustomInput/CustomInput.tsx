import React, { useState } from 'react';
import { TextInput, StyleSheet,  } from 'react-native';

interface Props {
    backgroundColor?: string;
    border?: number;
    borderColor?: string;
    marginBottom?: string;
    color?: string;
    height?: number;
    width?: number;
    placeholderTextColor?: string;
    borderRadius?: number;
    placeholder: string;
}


export const CustomInput:React.FC<Props> = ({
  height,
  width,
  backgroundColor,
  border,
  borderColor,
  color,
  borderRadius,
  placeholder,
  placeholderTextColor
})  => {

const styles = StyleSheet.create({
input: {
    height: height,
    width: width,
    borderColor: borderColor,
    borderWidth: border,
    borderRadius: borderRadius,
    padding: 15,
    backgroundColor: backgroundColor,
    color: color
  }
})

return (
    <TextInput style={styles.input} 
               placeholder={placeholder} 
               placeholderTextColor={placeholderTextColor}
    />      
  )
}