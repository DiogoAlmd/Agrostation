import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

export const Reports: React.FC = () => {

  return (
    <View style={styles.wrapper}>
      
    </View>
  );
};

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "#000000",
        flex: 1,
        justifyContent: "center"
    },

    content: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 5
    },

    image: {
        width: 400,
        height: 100
    },

    button: {
        width: 300,
        alignSelf: "center",
        borderRadius: 8
    },
    
    buttonContainer: {
        alignSelf: "center",
        position: "absolute",
        bottom: 150
    },

    titleContainer: {
        alignSelf: "flex-start",
        paddingLeft: 10,
        bottom: 150
    },

    NoReportsContainer: {
      alignItems: "center"
    },

    roundedLine: {
      height: 0.5,
      width: "100%",
      backgroundColor: "#77767E",
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5
    },

    studentsContainer: {
      marginTop: 10,
      width: 340,
      borderRadius: 8,
      paddingTop: 8,
      paddingBottom: 8,
      paddingLeft: 15,
      gap: 20
    },

    reportsContainer: {
      bottom: 120
    }
})