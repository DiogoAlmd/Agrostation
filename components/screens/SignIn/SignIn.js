import { View, StyleSheet, Image } from 'react-native';
import { CustomButton } from '../../CustomButton/CustomButton.js';
import { CustomInput } from '../../CustomInput/CustomInput';
import { Title } from "../../Title/Title";
import { colors } from "../../../assets/colors";
import { useFonts } from "expo-font"

export const SignIn = (props) => {
  const [fonts] = useFonts({
    'Urbanist': require('../../../assets/Urbanist-VariableFont_wght.ttf')
  })


    return(
        <View style={styles.wrapper}>
          <Image 
          source={require('../../../assets/logo-agrostation.png')} 
          style={styles.image}
          resizeMode= 'contain' />

          <View style={styles.title}>
          <Title title="agro"
                 fontSize={40}
                 color={colors.primaryColor}
                 fontWeight={700}
                 fontFamily="Urbanist" />
          <Title title="station"
                 fontSize={40}
                 color={colors.whiteColor}
                 fontWeight={700} />
          </View>

          <View style={styles.inputContainer}>
            <CustomInput 
            placeholder="Usuário" 
            height={40} 
            width={200} 
            borderColor={colors.primaryColor} 
            border={1}
            borderRadius={10} 
            placeholderColor={colors.whiteColor} 
            />

            <CustomInput 
            placeholder="Senha" 
            height={40} 
            width={200} 
            borderColor={colors.primaryColor} 
            border={1}
            borderRadius={10} 
            placeholderColor={colors.whiteColor} 
            />
          </View>

          <View style={styles.buttonContainer}>
            <CustomButton title="Entrar" 
                          bgColor={colors.primaryColor}
                          color={colors.whiteColor}/>

            <CustomButton title="Criar conta" 
                          bgColor={colors.secondaryColor} 
                          border={1}
                          color={colors.whiteColor}
                          borderColor={colors.primaryColor} /> 
          </View>
        </View>
    );
}




  const styles = StyleSheet.create({
    wrapper: {
      height: "100%",
      width: "100%",
      backgroundColor: colors.secondaryColor,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      gap: 20
    },

    image: {
      width: 200,
      height: 200,
      marginTop: 90
    },
    
    inputContainer: {
      gap: 12,
      flex: 1
    },

    buttonContainer: {
      gap: 12,
      flex: 4,
      marginTop: 50
    },

    title: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    }
  });