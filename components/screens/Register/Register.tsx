import React, { useState } from "react";
import { View, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from "react-native"
import { CustomInput } from "../../CustomInput/CustomInput";
import { colors } from "../../../assets/colors";
import { CustomButton } from "../../CustomButton/CustomButton";
import { CustomText } from "../../CustomText/CustomText";
import { StackTypes } from '../../routes/StackNavigator';
import { useNavigation } from "@react-navigation/native"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../src/config/firebase";
import { doc, setDoc } from 'firebase/firestore';


export const Register: React.FC = () => {

  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [telefone, setTelefone] = useState("");
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [userID, setUserUid] = useState("");
  const navigation = useNavigation<StackTypes>();
  
  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setUserUid(user.uid);

      await setDoc(doc(db, "users", user.uid), {
        email,
        telefone,
        nome,
        cpf,
        userID
      });
      navigation.navigate("Tab")
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
    }
  };

  return (
  <ScrollView contentContainerStyle={styles.scrollViewContent} keyboardShouldPersistTaps="handled">
  <View style={styles.wrapper}>
    <View style={styles.titleContainer}>
      <CustomText text="agro" color={colors.primaryColor} fontWeight="700" size={42}/>
      <CustomText text="station" color={colors.blackColor} fontWeight="700" size={42} />
    </View>

    <View style={styles.containerText}>
      <CustomText text="Dados pessoais" fontWeight="700" size={20}/>
      <CustomText width={270} text="Preencha o formulário abaixo para registrar sua nova conta" color={colors.greyColor}/>
    </View>

    <KeyboardAvoidingView style={styles.inputContainer} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <CustomInput height={50} width={315} backgroundColor={colors.pinkColor} placeholder="Email" onChangeText={(text) => setEmail(text)} color={colors.greyColor} placeholderTextColor={colors.greyColor}/>
      <CustomInput height={50} width={315} backgroundColor={colors.pinkColor} placeholder="Telefone" onChangeText={(text) => setTelefone(text)} color={colors.greyColor} placeholderTextColor={colors.greyColor}/>
      <CustomInput height={50} width={315} backgroundColor={colors.pinkColor} placeholder="Nome completo" onChangeText={(text) => setNome(text)} color={colors.greyColor} placeholderTextColor={colors.greyColor}/>
      <CustomInput height={50} width={315} backgroundColor={colors.pinkColor} placeholder="CPF" onChangeText={(text) => setCpf(text)} color={colors.greyColor} placeholderTextColor={colors.greyColor}/>
      <CustomInput height={50} width={315} backgroundColor={colors.pinkColor} placeholder="Senha" color={colors.greyColor} placeholderTextColor={colors.greyColor}/>
      <CustomInput height={50} width={315} backgroundColor={colors.pinkColor} placeholder="Confirmar senha" onChangeText={(text) => setPass(text)} color={colors.greyColor} placeholderTextColor={colors.greyColor}/>
    </KeyboardAvoidingView>

    <View style={styles.buttonContainer}>
      <CustomButton title="Confirmar" onPress={handleSignUp} width={320} height={50} backgroundColor={colors.primaryColor} color={colors.whiteColor} paddingV={13} paddingH={20} borderRadius={50}/>
    </View>
  </View>
  </ScrollView>
  )
}
const styles = StyleSheet.create({

    wrapper: {
      backgroundColor: colors.whiteColor,
      flex: 1,
      justifyContent: "space-around",
      alignItems: "center",
    },
    

    titleContainer: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 80
    },

    containerText: {
      flex: 1,
      marginTop: 50,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 30,
      gap: 5
    },

    inputContainer: {
      flex: 6,
      marginTop: 20,
      marginBottom: 50,
      gap: 5
    },

    scrollViewContent: {
      flexGrow: 1,
    },

    buttonContainer: {
      flex: 7
    }
  })
