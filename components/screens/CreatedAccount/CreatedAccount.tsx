import { View, StyleSheet, Image } from "react-native"
import { colors } from "../../../assets/colors";
import { CustomButton } from "../../CustomButton/CustomButton";
import { CustomText } from "../../CustomText/CustomText";


export const CreatedAccount: React.FC = () => {

  return (
  <View style={styles.wrapper}>
    <View style={styles.titleContainer}>
      <CustomText text="agro" color={colors.primaryColor} fontWeight="700" size={42}/>
      <CustomText text="station" color={colors.blackColor} fontWeight="700" size={42} />
    </View>

    <View style={styles.containerText}>
        <CustomText text="Conta Criada!" fontWeight="700" size={20}/>
        <CustomText width={280} lineHeight={20} text="Sua conta Agrostation foi criada com êxito! Clique no botão abaixo para explorar todas as incríveis funcionalidades que nosso aplicativo tem a oferecer." color={colors.greyColor}/>
    </View>

    <View style={styles.imageContainer}>
      <Image source={require('../../../assets/plantacao-1.png')} 
          style={styles.image}
          resizeMode= 'contain' />
    </View>

    <CustomButton title="Acessar conta" width={320} height={50} backgroundColor={colors.primaryColor} color={colors.whiteColor} paddingV={13} paddingH={20} borderRadius={50} bottom={50}/>
  </View>
  )
}
const styles = StyleSheet.create({

    wrapper: {
      backgroundColor: colors.whiteColor,
      flex: 1,
      justifyContent: "space-between",
      alignItems: "center",
      margin: 50,
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
      gap: 20,
      bottom: 30
    },

    image: {
      width: 300,
      height: 190
    },

    imageContainer: {
        bottom: 100
    },
  })
