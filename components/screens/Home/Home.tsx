import React from "react"
import { View, StyleSheet, ImageBackground } from "react-native"
import { CustomText } from "../../CustomText/CustomText"
import { CustomButton } from "../../CustomButton/CustomButton"
import { colors } from "../../../assets/colors"
import { StackTypes } from '../../routes/StackNavigator';
import { useNavigation } from "@react-navigation/native"


export const Home: React.FC = () => {
    const navigation = useNavigation<StackTypes>()

    return (
        <View style={styles.wrapper}>
            <ImageBackground source={require('../../../assets/agro.png')}
                             resizeMode="cover"
                             style={styles.image}/>
            <View style={styles.card}> 
                <View style={styles.cardText}>
                <CustomText text="Agrostation" size={24} fontWeight="bold" marginTop={20}/>
                <CustomText color={colors.greyColor} width={320} size={18} text="Um app para te ajudar na gestão financeira. Torne a vida no campo mais fácil com Agrostation!"/>
                <View style={styles.buttonContainer}>
                    <CustomButton title="Avançar" backgroundColor={colors.primaryColor} width={120} height={50} color={colors.whiteColor} borderRadius={50} onPress={() => navigation.navigate("SignIn")}/>
                </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: "100%",
        backgroundColor: colors.secondaryColor,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },

    image: {
        width: "100%",
        height: "100%",
        position: "absolute"
    },

    card: {
        width: 430,
        height: 320,
        backgroundColor: "#FFFFFF",
        position: "relative",
        top: 350,
        left: 10,
        alignItems: "flex-start",
        borderRadius: 50
    },

    cardText: {
        gap: 30,
        margin: 20
    },

    buttonContainer: {
        left: 230,
        bottom: 35
    
    }
})