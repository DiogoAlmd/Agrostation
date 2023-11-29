import { Text, StyleSheet } from "react-native"


interface Props {
    size?: number;
    fontWeight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900"
    color?: string;
    width?: number;
    borderColor?: string;
    border?: number;
    padding?: number;
    marginTop?: number;
    borderRadius?: number;
    backgroundColor?: string;
    text: string;
    lineHeight?: number;
}

export const CustomText: React.FC<Props> = ({
    size,
    fontWeight,
    color,
    width,
    text,
    border,
    marginTop,
    backgroundColor,
    padding,
    borderRadius,
    lineHeight
}) =>{
    const styles = StyleSheet.create({
        text: {
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
        <Text style={styles.text}>
            {text}
        </Text>
    )
}