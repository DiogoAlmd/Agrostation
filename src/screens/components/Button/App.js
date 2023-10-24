import React from "react"
import { Text, StyleSheet, TouchableOpacity } from "react-native"

export const CustomButton = props => {
    return (
        <TouchableOpacity style={[styles.button, { 
          backgroundColor: `${props.bgColor}`, 
          borderWidth: `${props.border}`, 
          borderColor: `${props.borderColor}`}]} 
          >
            <Text>
                {props.title}
            </Text>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    button: {
        width: "95%",
        padding: 10,
        borderRadius: 20
    }
});