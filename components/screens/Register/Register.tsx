import { View, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from "react-native"
import { CustomInput } from "../../CustomInput/CustomInput";
import { colors } from "../../../assets/colors";
import { CustomButton } from "../../CustomButton/CustomButton";
import { CustomText } from "../../CustomText/CustomText";
import { StackTypes } from '../../routes/StackNavigator';
import { useNavigation } from "@react-navigation/native"


export const Register: React.FC = () => {

  const navigation = useNavigation<StackTypes>();

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
      <CustomInput height={50} width={315} backgroundColor={colors.pinkColor} placeholder="Email" color={colors.greyColor} placeholderTextColor={colors.greyColor}/>
      <CustomInput height={50} width={315} backgroundColor={colors.pinkColor} placeholder="Telefone" color={colors.greyColor} placeholderTextColor={colors.greyColor}/>
      <CustomInput height={50} width={315} backgroundColor={colors.pinkColor} placeholder="Nome completo" color={colors.greyColor} placeholderTextColor={colors.greyColor}/>
      <CustomInput height={50} width={315} backgroundColor={colors.pinkColor} placeholder="CPF" color={colors.greyColor} placeholderTextColor={colors.greyColor}/>
      <CustomInput height={50} width={315} backgroundColor={colors.pinkColor} placeholder="Senha" color={colors.greyColor} placeholderTextColor={colors.greyColor}/>
      <CustomInput height={50} width={315} backgroundColor={colors.pinkColor} placeholder="Confirmar senha" color={colors.greyColor} placeholderTextColor={colors.greyColor}/>
    </KeyboardAvoidingView>

    <View style={styles.buttonContainer}>
      <CustomButton title="Confirmar" width={320} height={50} backgroundColor={colors.primaryColor} color={colors.whiteColor} paddingV={13} paddingH={20} borderRadius={50} onPress={() => navigation.navigate("Logged")}/>
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
