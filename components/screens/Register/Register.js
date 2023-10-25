import { View, StyleSheet } from "react-native"
import { Title } from "../../Title/Title";
import { CustomInput } from "../../CustomInput/CustomInput";
import { colors } from "../../../assets/colors";
import { Container } from "./Register-style";
import { CustomButton } from "../../CustomButton/CustomButton";


export const Register = () => {

  return (
  <View style={styles.wrapper}>
    <View style={styles.titleContainer}>
      <Title title="agro" color={colors.primaryColor} fontWeight={700} fontSize={42}/>
      <Title title="station" color={colors.blackColor} fontWeight={700} fontSize={42} />
    </View>


    <View style={styles.containerText}>
      <Title title="Dados pessoais" fontWeight={700} fontSize={20}/>
      <Title title="Preencha o formulário abaixo para criar a conta" color={colors.greyColor}/>
    </View>

    <Container gap={5} flex={6} marginBottom={50}>
      <CustomInput height={50} width={315} backgroundColor={colors.pinkColor} placeholder="Email" color={colors.greyColor}/>
      <CustomInput height={50} width={315} backgroundColor={colors.pinkColor} placeholder="Telefone" color={colors.greyColor}/>
      <CustomInput height={50} width={315} backgroundColor={colors.pinkColor} placeholder="Nome completo" color={colors.greyColor}/>
      <CustomInput height={50} width={315} backgroundColor={colors.pinkColor} placeholder="CPF" color={colors.greyColor}/>
      <CustomInput height={50} width={315} backgroundColor={colors.pinkColor} placeholder="Senha" color={colors.greyColor}/>
      <CustomInput height={50} width={315} backgroundColor={colors.pinkColor} placeholder="Confirmar senha" color={colors.greyColor}/>
    </Container>

      <CustomButton title="Confirmar" bgColor={colors.primaryColor} color={colors.whiteColor}/>
  </View>
  )
}
const styles = StyleSheet.create({

    wrapper: {
    backgroundColor: colors.whiteColor,
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center"
    },

    titleContainer: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    },

    containerText: {
      flex: 1,
      alignItems: "center",
      marginTop: 35,
      marginBottom: 30
    }
  })
