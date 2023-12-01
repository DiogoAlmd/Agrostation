import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { CustomInput } from "../../CustomInput/CustomInput";
import { CustomButton } from "../../CustomButton/CustomButton";
import { colors } from "../../../assets/colors";
import { CustomText } from "../../CustomText/CustomText";
import { StackTypes } from '../../routes/StackNavigator';
import { useNavigation } from "@react-navigation/native";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { db } from "../../../src/config/firebase";
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';


export default function CreateReports() {
    const [nome, setNome] = useState<string>("");
    const [userUid, setUserUid] = useState("");

    const navigation = useNavigation<StackTypes>();

    const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserUid(user.uid);
      }
    });

    console.log("userid " + userUid);
    // Cleanup function
    return () => unsubscribe();
  }, []);

  const geraRelatorio = async () => {
    try { 
      await addDoc(collection(db, "Reports"), {
        nome,
        userUid
      });
      console.log(userUid);

      // Adicionando a navegação após a criação do relatório
      navigation.navigate("StepScreen");

    } catch (error) {
      console.error("Erro ao gerar relatorio:", error);
    }
  };

    return (
        <View style={styles.wrapper}>
            <View style={styles.titleContainer}>
                <CustomText text="agro" color={colors.primaryColor} fontWeight="700" size={42} />
                <CustomText text="station" color={colors.blackColor} fontWeight="700" size={42} />
            </View>

            <View style={styles.containerText}>
                <CustomText text="Começar um novo relatório" fontWeight="bold" size={20} color={colors.blackColor} />
                <CustomText text="Insira um nome para seu novo relatório" />
            </View>

            <View style={styles.container}>
                <View>
                    <CustomInput height={50} width={315} backgroundColor={colors.pinkColor} placeholder="Nome" onChangeText={(text) => setNome(text)} color={colors.greyColor} placeholderTextColor={colors.greyColor}/>
                </View>

                <View style={styles.buttonContainer}>
                    <CustomButton title="Próxima etapa" width={315} height={50} size={16} color={colors.whiteColor} backgroundColor={nome == "" ? colors.greyColor : colors.primaryColor} paddingV={13} paddingH={20} borderRadius={20} disabled={nome == "" ? true : false} onPress={geraRelatorio} />
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    wrapper: {
        width: "100%",
        height: "100%",
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center"
    },
    
    titleContainer: {
        width: "100%",
        height: "20%",
        justifyContent: "center",
        alignItems: "flex-end",
        flexDirection: "row",
        marginBottom: 25
      },
      
      containerText: {
        alignItems: "center",
        gap: 25
      },

      container: {
        height: "55%",
        marginTop: 45,
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10
    },

    buttonContainer: {
        width: "100%",
        height: "40%",
        justifyContent: "center",
    }

})
