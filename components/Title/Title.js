import { Text, StyleSheet } from "react-native"

export const Title = props => {
const styles = StyleSheet.create({
  title: {
    color: props.color,
    fontFamily: props.fontFamily,
    fontSize: props.fontSize,
    fontWeight: props.fontWeight 
  }
})
  return (
    <Text style={styles.title}>
       {props.title} 
    </Text>
  )
}