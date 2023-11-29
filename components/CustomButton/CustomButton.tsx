import React from "react"
import { Text, StyleSheet, TouchableOpacity, GestureResponderEvent } from "react-native"


interface Props {
    width?: number;
    height?: number;
    backgroundColor?: string;
    border?: number;
    borderColor?: string;
    borderRadius?: number;
    marginBottom?: number;
    color?: string;
    fontWeight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
    paddingH?: number;
    paddingV?: number;
    title?: string;
    bottom?: number;
    onPress?: (event: GestureResponderEvent) => void,
    size?: number;
}

    
export const CustomButton: React.FC<Props> = ({
    backgroundColor,
    border,
    borderColor,
    marginBottom,
    color,
    title,
    width,
    height,
    borderRadius,
    paddingH,
    paddingV,
    bottom,
    onPress,
    size
}) => {
  
const styles = StyleSheet.create({
    button: {
        width: width,
        height: height,
        paddingHorizontal: paddingH,
        paddingVertical: paddingV,
        borderRadius: borderRadius,
        backgroundColor: backgroundColor, 
        borderWidth: border, 
        borderColor: borderColor,
        justifyContent: "center",
        alignItems: 'center',
        marginBottom: marginBottom,
        bottom: bottom,
    },
    buttonText: {
      color: color,
      fontWeight: "700",
      fontSize: size
    }
})

    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}