import React from "react"
import { Text, StyleSheet, TouchableOpacity } from "react-native"

    
export const CustomButton = props => {
  
const styles = StyleSheet.create({
    button: {
        width: 300,
        padding: 12,
        borderRadius: 20,
        backgroundColor: props.bgColor, 
        borderWidth: props.border, 
        borderColor: props.borderColor,
        alignItems: 'center',
        marginBottom: props.marginBottom
    },
    buttonText: {
      color: props.color,
      fontWeight: 700
    }
})

    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
                {props.title}
            </Text>
        </TouchableOpacity>
    )
}