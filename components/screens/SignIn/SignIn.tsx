import React, { useState } from "react";
import { View, StyleSheet, Image } from 'react-native';
import { CustomInput } from '../../CustomInput/CustomInput';
import { colors } from "../../../assets/colors";
import { CustomButton } from '../../CustomButton/CustomButton';
import { CustomText } from '../../CustomText/CustomText';
import { StackTypes } from '../../routes/StackNavigator';
import { useNavigation } from "@react-navigation/native"
import { auth } from "../../../src/config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [errorLogin, setErrorLogin] = useState(false);
  const navigation = useNavigation<StackTypes>();
    auth;
    const login = () => {
                signInWithEmailAndPassword(auth, email, pass)
                  .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    navigation.navigate("Tab")
                    // ...
                  })
                  .catch((error) => {
                    setErrorLogin(true)
                    const errorCode = error.code;
                    const errorMessage = error.message
                    console.log("login incorreto" + errorCode + errorMessage);
                  });
    }

    return (
        <View style={styles.wrapper}>
          <Image 
          source={require('../../../assets/logo-agrostation.png')} 
          style={styles.image}
          resizeMode= 'contain' />

          <View style={styles.title}>
          <CustomText text="agro"
                 size={40}
                 color={colors.primaryColor}
                 fontWeight="700"/>
          <CustomText text="station"
                 size={40}
                 color={colors.whiteColor}
                 fontWeight="700"/>
          </View>

          <View style={styles.inputContainer}>
            <CustomInput 
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            height={50} 
            width={340} 
            borderColor={colors.primaryColor} 
            border={1}
            borderRadius={10} 
            placeholderTextColor={colors.whiteColor}
            color={colors.whiteColor} 
            />

            <CustomInput 
            placeholder="Senha"
            onChangeText={(text) => setPass(text)}
            height={50} 
            width={340} 
            borderColor={colors.primaryColor} 
            border={1}
            borderRadius={10} 
            placeholderTextColor={colors.whiteColor}
            color={colors.whiteColor} 
            />
          </View>

          <View style={styles.buttonContainer}>
            <CustomButton title="Entrar"
                          onPress={login}
                          backgroundColor={colors.primaryColor}
                          color={colors.whiteColor}
                          width={320}
                          height={50}
                          borderRadius={30}/>

            <CustomButton title="Criar conta" 
                          backgroundColor={colors.secondaryColor} 
                          color={colors.whiteColor}
                          borderColor={colors.primaryColor}
                          width={320}
                          height={50}
                          onPress={login} /> 
          </View>
          <Image source={require('../../../assets/Circulos.png')}
                 style={styles.circles}/>
        </View>
    );
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
      width: 200,
      height: 200,
      marginTop: 75
    },

    circles: {
      top: 20
    },
    
    inputContainer: {
      marginBottom: 20,
      width: "100%",
      gap: 20
    },

    buttonContainer: {
      width: "100%"
    },

    title: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    }
  });