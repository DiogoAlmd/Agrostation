import React, { useState, useEffect } from "react";
import { View, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from "react-native"
import { CustomInput } from "../../CustomInput/CustomInput";
import { CustomText } from "../../CustomText/CustomText";
import { CustomButton } from "../../CustomButton/CustomButton";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { db } from "../../../src/config/firebase";
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { colors } from "../../../assets/colors";
import { SafeAreaView } from "react-native";



export const Create:React.FC = () => {

  const [nome, setNome] = useState<string>("");
  const [etapa, setEtapa]  = useState<number>(0);
  const [category, setCategory] = useState<string>("");
  const [inputTexts, setInputTexts] = useState<string[]>([]);
  const [inputValues, setInputValues] = useState<string[]>([]);
  const [userUid, setUserUid] = useState<string>("");
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);


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

  useEffect(() => {
    setIsButtonDisabled(etapa !== 7);
    setCategory(categories[etapa]);
    setInputTexts(textsAboveInput[etapa]);
    setInputValues(Array(textsAboveInput[etapa].length).fill(""));
  }, [etapa]);

  useEffect(() => {
    // Redefine a variável etapa quando a tela é desmontada
    return () => setEtapa(0);
  }, []);

  const categories = ["", "Área", "Cultura", "Correção de solo", "Fertilizantes", "Herbicidas", "Terceirização", "Itens diversos"];
  const textsAboveInput = [
    ["", ""],
    ["Tamanho da área", ""],
    ["Selecione o tipo de cultura", "Valor gasto por m²"],
    ["Valor gasto com a correção de todo solo", ""],
    ["Valor gasto fertilizante (m²)", ""],
    ["Valor gasto herbicidas (m²)", ""],
    ["Valor gasto com mão de obra", ""],
    ["Gasolina para equipamentos", ""],
  ];

  const setTextAboveInput = (index: number, text: string) => {
    const newInputTexts = [...inputTexts];
    newInputTexts[index] = text;
    setInputTexts(newInputTexts);
  };


  const setInputValue = (index: number, value: string) => {
    const updatedValues = [...inputValues];
    updatedValues[index] = value;
    setInputValues(updatedValues);
  };

  const renderInputs = () => {
    return textsAboveInput[etapa - 1].map((text, index) => (
      <CustomInput
        key={index}
        height={50}
        width={315}
        backgroundColor={colors.pinkColor}
        placeholder={text}
        onChangeText={(value) => setInputValue(index, value)}
        value={inputValues[index]}
        color={colors.greyColor}
        placeholderTextColor={colors.greyColor}
      />
    ));
  };


  const geraRelatorio = async () => {
    try { 
      await addDoc(collection(db, "Reports"), {
        nome,
        userUid
      });
      console.log(userUid)
    } catch (error) {
      console.error("Erro ao gerar relatorio:", error);
    }
  };

  const handleStep = () => {
    setEtapa(etapa + 1)

    if (etapa === 1) setCategory("Área");
    else if (etapa === 2) setCategory("Cultura");
    else if (etapa === 3) setCategory("Correção de solo");
    else if (etapa === 4) setCategory("Fertilizantes");
    else if (etapa === 5) setCategory("Herbicidas");
    else if (etapa === 6) setCategory("Terceirização");
    else if (etapa === 7) setCategory("Itens diversos");

    setInputValues([]);
  }

  return (
    <SafeAreaView style={styles.wrapper}>
    <ScrollView contentContainerStyle={styles.scrollViewContent} keyboardShouldPersistTaps="handled">
    <View style={styles.content}>
                
                    <View style={styles.titleContainer}>
                        <CustomText text="agro" color={colors.primaryColor} fontWeight="700" size={42} />
                        <CustomText text="station" color={colors.blackColor} fontWeight="700" size={42} />
                    </View>
                    <View style={styles.containerText}>
                            <CustomText text="Começar um novo relatório" fontWeight="bold" size={20} color={colors.blackColor} />
                            <CustomText text="Insira um nome para seu novo relatório" />
                    </View>
                    <KeyboardAvoidingView style={styles.inputContainer} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                            <CustomInput height={50} width={315} backgroundColor={colors.pinkColor} placeholder="Nome" onChangeText={(text) => setNome(text)} color={colors.greyColor} placeholderTextColor={colors.greyColor}/>
                    </KeyboardAvoidingView>
                            <View style={styles.buttonContainer}>
                                    <CustomButton onPress={handleStep} title="Próxima etapa" width={315} height={50} size={16} color={colors.primaryColor}/>
                                    <CustomButton onPress={geraRelatorio} title="Gerar Relatório" width={315} height={50} size={16} color={colors.whiteColor} backgroundColor={ isButtonDisabled ? colors.greyColor : colors.primaryColor} paddingV={13} paddingH={20} borderRadius={20} disabled={isButtonDisabled} />
                            </View>
    </View>
    </ScrollView>
    </SafeAreaView>
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
    alignItems: "center",
    marginTop: 80
  },

  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },

  containerText: {
    flex: 1,
    alignItems: "center",
    marginBottom: 30,
    gap: 10
  },

  stepContainer: {
    flex: 1,
    alignItems: "center",
    gap: 10
  },

  inputContainer: {
    flex: 6,
    justifyContent: "space-between"
  },

  buttonContainer: {
    marginBottom: 80
  },

  scrollViewContent: {
    flexGrow: 1,
  },
})
