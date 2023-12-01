import { Text, StyleSheet, GestureResponderEvent } from "react-native"


interface Props {
    size?: number;
    fontWeight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900"
    color?: string;
    width?: number;
    height?: number;
    borderColor?: string;
    border?: number;
    padding?: number;
    marginTop?: number;
    borderRadius?: number;
    backgroundColor?: string;
    text: string;
    lineHeight?: number;
    onPress?: (event: GestureResponderEvent) => void,
}

export const CustomText: React.FC<Props> = ({
    size,
    fontWeight,
    color,
    width,
    height,
    text,
    border,
    marginTop,
    backgroundColor,
    padding,
    borderRadius,
    lineHeight,
    onPress
}) =>{
    const styles = StyleSheet.create({
        text: {
            height: height,
            fontSize: size,
            fontWeight: fontWeight,
            color: color,
            width: width,
            borderWidth: border,
            marginTop: marginTop,
            backgroundColor: backgroundColor,
            padding: padding,
            borderRadius: borderRadius,
            lineHeight: lineHeight
        }
    })

    return (
        <Text style={styles.text} onPress={onPress}>
            {text}
        </Text>
    )
}