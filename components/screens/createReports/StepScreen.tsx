import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { CustomInput } from "../../CustomInput/CustomInput";
import { CustomButton } from "../../CustomButton/CustomButton";
import { colors } from "../../../assets/colors";
import { CustomText } from "../../CustomText/CustomText";
import Select from "../Select/Select";
import { StackTypes } from '../../routes/StackNavigator';
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { db } from "../../../src/config/firebase";
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';


type Params = {
    nome: string;
}


export default function StepScreen() {
    const [userUid, setUserUid] = useState("");
    const [etapa, setEtapa] = useState<number>(1);
    const [selectedValue, setSeletectedValue] = useState<string>("");
    const [tamanhoDaArea, setTamanhoDaArea] = useState<number>(0);
    const [vGastoCorrecaoSolo, setVGastoCorrecaoSolo] = useState<number>(0);
    const [vGastoFertilizante, setVGastoFertilizante] = useState<number>(0);
    const [vGastoHerbicidas, setVGastoHerbicidas] = useState<number>(0);
    const [vGastoMaoObra, setVGastoMaoObra] = useState<number>(0);
    const [vGastoItens, setVGastoItens] = useState<number>(0);
    const [vGastoMQuadrado, setValorGastoMQuadrado] = useState<number>(0);
    const [valorTotal, setValorTotal] = useState<number>(0);
    const [done, setDone] = useState<boolean>(false)

    const route = useRoute<RouteProp<Record<string, Params>, string>>();

    const { nome } = route.params;

    const navigation = useNavigation<StackTypes>();
    const auth = getAuth();

    const [isShown, setIsShown] = useState<boolean>(false)
    
    useEffect(() => {
        setSeletectedValue("")
        setTamanhoDaArea(0)
        setVGastoCorrecaoSolo(0)
        setVGastoFertilizante(0)
        setVGastoHerbicidas(0)
        setVGastoItens(0)
        setValorTotal(0)
        setVGastoMaoObra(0),
        setValorGastoMQuadrado(0)
        setDone(false)

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUserUid(user.uid);
            }
          });
      
          //console.log("userid " + userUid);
          // Cleanup function
          return () => unsubscribe();
      }, []);

      useEffect(() => {
        // Soma dos valores em cada etapa
        const total =
          vGastoCorrecaoSolo +
          vGastoMQuadrado +
          vGastoFertilizante +
          vGastoHerbicidas +
          vGastoMaoObra +
          vGastoItens;

          setValorTotal(total);
      }, [
        vGastoCorrecaoSolo,
        vGastoMQuadrado,
        vGastoFertilizante,
        vGastoHerbicidas,
        vGastoMaoObra,
        vGastoItens,
      ]);


    const handleSelected = (value: string) => {
        setIsShown(false)
        if(value == selectedValue) {
            setIsShown(true)
        }
        setSeletectedValue(value)
    }

    const gerarRelatorio = () => {
        setEtapa(etapa + 1)
        setDone(true)
        geraRelatorio();
    }

    const geraRelatorio = async () => {
        try { 
          await addDoc(collection(db, "Reports"), {
            nome,
            tamanhoDaArea,
            selectedValue,
            vGastoMQuadrado,
            vGastoCorrecaoSolo,
            vGastoFertilizante,
            vGastoHerbicidas,
            vGastoMaoObra,
            vGastoItens,
            userUid
          });
          console.log("gerou");    
        } catch (error) {
          console.error("Erro ao gerar relatorio:", error);
        }
      };

    const categoria = ["Área", "Cultura", "Correção de solo", "Fertilizantes", "Herbicidas", "Terceirização", "Itens diversos"]
    const cultura = ["Grãos", "Hortaliças", "Frutas", "Floricultura"]

    return (
        <View style={styles.wrapper}>
            {!done && (
                <>
            <View style={styles.stepContainer}>
                <CustomText text={`Etapa ${etapa} de 7:`} fontWeight="bold" size={20}/>
                <CustomText text={` ${categoria[etapa-1]}`} size={20} />
            </View>
            
            <View style={styles.insertContainer}>
                <CustomText text="Insira os dados necessários nos campos abaixo" />
            </View>
            </>
            )}


            <View style={styles.inputContainer}>
                {etapa == 1 && 
                <>
                    <View style={{gap: 8}}>
                        <CustomText text="Tamanho da área m²" />
                        <CustomInput height={50} width={315} backgroundColor={colors.pinkColor} placeholder="18000" onChangeText={(text) => setTamanhoDaArea(Number(text))} color={colors.greyColor} placeholderTextColor={colors.greyColor}/>
                    </View>
                    
                    
                    <View style={[styles.buttonContainer, {height: "95%"}]}>
                        <CustomButton title="Próxima etapa" width={315} height={50} size={16} color={colors.whiteColor} backgroundColor={tamanhoDaArea == 0 ? colors.greyColor : colors.primaryColor } paddingV={13} paddingH={20} borderRadius={20} disabled={tamanhoDaArea == 0 ? true : false} onPress={() => setEtapa(etapa + 1)}/>
                        <CustomButton title="Voltar etapa" width={315} height={50} size={16} color={colors.greyColor} onPress={() => setEtapa(etapa - 1)}/>
                    </View>
                </>
        }
                {etapa == 2 &&
                <View style={{gap: 8}}>
                     <CustomText text="Selecione o tipo de cultura" />

                    <View style={{gap: 8}}>
                        <Select optionsSelect={cultura} onValueChange={handleSelected} label="Grãos"/>
                    </View>

                    {selectedValue != "" && (
                    <View>
                        <View>
                            <CustomInput width={315} height={50} backgroundColor={colors.pinkColor} placeholder="R$ 45,00" onChangeText={(text) => setValorGastoMQuadrado(Number(text))} color={colors.greyColor} placeholderTextColor={colors.greyColor}/>
                        </View>
                        <View style={[styles.buttonContainer, {height: "68%"}]}>
                            <CustomButton title="Próxima etapa" width={315} height={50} size={16} color={colors.whiteColor} backgroundColor={selectedValue == "" ? colors.greyColor : colors.primaryColor } paddingV={13} paddingH={20} borderRadius={20} disabled={tamanhoDaArea == 0 ? true : false} onPress={() => setEtapa(etapa + 1)}/>
                            <CustomButton title="Voltar etapa" width={315} height={50} size={16} color={colors.greyColor} onPress={() => setEtapa(etapa - 1)}/>
                        </View>
                    </View>

                    )}
                        <View style={[styles.buttonContainer, {height: "95%"}]}>
                            <CustomButton title="Próxima etapa" width={315} height={50} size={16} color={colors.whiteColor} backgroundColor={selectedValue == "" ? colors.greyColor : colors.primaryColor } paddingV={13} paddingH={20} borderRadius={20} disabled={tamanhoDaArea == 0 ? true : false} onPress={() => setEtapa(etapa + 1)}/>
                            <CustomButton title="Voltar etapa" width={315} height={50} size={16} color={colors.greyColor} onPress={() => setEtapa(etapa - 1)}/>
                        </View>
                </View>
                }

                {etapa == 3 &&
                <View>
                    <View style={{gap: 8}}>
                        <CustomText text="Valor gasto com a correção de solo" />
                        <CustomInput height={50} width={315} backgroundColor={colors.pinkColor} placeholder="Valor (R$)" onChangeText={(text) => setVGastoCorrecaoSolo(Number(text))} color={colors.greyColor} placeholderTextColor={colors.greyColor}/>
                    </View>

                    <View style={[styles.buttonContainer, {height: "95%"}]}>
                        <CustomButton title="Próxima etapa" width={315} height={50} size={16} color={colors.whiteColor} backgroundColor={vGastoCorrecaoSolo == 0 ? colors.greyColor : colors.primaryColor } paddingV={13} paddingH={20} borderRadius={20} disabled={vGastoCorrecaoSolo == 0 ? true : false} onPress={() => setEtapa(etapa + 1)}/>
                        <CustomButton title="Voltar etapa" width={315} height={50} size={16} color={colors.greyColor} onPress={() => setEtapa(etapa - 1)}/>
                    </View>
                </View>
                }
                
                {etapa == 4 &&
                <View>
                    <View style={{gap: 8}}>
                        <CustomText text="Valor gasto fertilizante" />
                        <CustomInput height={50} width={315} backgroundColor={colors.pinkColor} placeholder="Valor (R$)" onChangeText={(text) => setVGastoFertilizante(Number(text))} color={colors.greyColor} placeholderTextColor={colors.greyColor}/>
                    </View>

                    <View style={[styles.buttonContainer, {height: "95%"}]}>
                        <CustomButton title="Próxima etapa" width={315} height={50} size={16} color={colors.whiteColor} backgroundColor={vGastoFertilizante == 0 ? colors.greyColor : colors.primaryColor } paddingV={13} paddingH={20} borderRadius={20} disabled={vGastoFertilizante == 0 ? true : false} onPress={() => setEtapa(etapa + 1)}/>
                        <CustomButton title="Voltar etapa" width={315} height={50} size={16} color={colors.greyColor} onPress={() => setEtapa(etapa - 1)}/>
                    </View>
                </View>
                }

                {etapa == 5 &&
                <View>
                    <View style={{gap: 8}}>
                        <CustomText text="Valor gasto herbicidas (m²)" />
                        <CustomInput height={50} width={315} backgroundColor={colors.pinkColor} placeholder="Valor (R$)" onChangeText={(text) => setVGastoHerbicidas(Number(text))} color={colors.greyColor} placeholderTextColor={colors.greyColor}/>
                    </View>

                    <View style={[styles.buttonContainer, {height: "95%"}]}>
                        <CustomButton title="Próxima etapa" width={315} height={50} size={16} color={colors.whiteColor} backgroundColor={vGastoHerbicidas == 0 ? colors.greyColor : colors.primaryColor } paddingV={13} paddingH={20} borderRadius={20} disabled={vGastoHerbicidas == 0 ? true : false} onPress={() => setEtapa(etapa + 1)}/>
                        <CustomButton title="Voltar etapa" width={315} height={50} size={16} color={colors.greyColor} onPress={() => setEtapa(etapa - 1)}/>
                    </View>
                </View>
                }

                {etapa == 6 &&
                <View>
                    <View style={{gap: 8}}>
                        <CustomText text="Valor gasto com mão de obra" />
                        <CustomInput height={50} width={315} backgroundColor={colors.pinkColor} placeholder="Valor (R$)" onChangeText={(text) => setVGastoMaoObra(Number(text))} color={colors.greyColor} placeholderTextColor={colors.greyColor}/>
                    </View>

                    <View style={[styles.buttonContainer, {height: "95%"}]}>
                        <CustomButton title="Próxima etapa" width={315} height={50} size={16} color={colors.whiteColor} backgroundColor={vGastoMaoObra == 0 ? colors.greyColor : colors.primaryColor } paddingV={13} paddingH={20} borderRadius={20} disabled={vGastoMaoObra == 0 ? true : false} onPress={() => setEtapa(etapa + 1)}/>
                        <CustomButton title="Voltar etapa" width={315} height={50} size={16} color={colors.greyColor} onPress={() => setEtapa(etapa - 1)}/>
                    </View>
                </View>
                }

                {etapa == 7 &&
                <View>
                    <View style={{gap: 8}}>
                        <CustomText text="Gasolina para equipamentos" />
                        <CustomInput height={50} width={315} backgroundColor={colors.pinkColor} placeholder="Valor (R$)" onChangeText={(text) => setVGastoItens(Number(text))} color={colors.greyColor} placeholderTextColor={colors.greyColor}/>
                    </View>

                    <View style={[styles.buttonContainer, {height: "95%"}]}>
                        <CustomButton title="Gerar" width={315} height={50} size={16} color={colors.whiteColor} backgroundColor={vGastoItens == 0 ? colors.greyColor : colors.primaryColor } paddingV={13} paddingH={20} borderRadius={20} disabled={tamanhoDaArea == 0 ? true : false} onPress={gerarRelatorio}/>
                        <CustomButton title="Voltar etapa" width={315} height={50} size={16} color={colors.greyColor} onPress={() => console.log(done)}/>
                    </View>
                </View>
                }

                {etapa == 8 &&
                <ScrollView contentContainerStyle={styles.scrollViewContent} keyboardShouldPersistTaps="handled">
                    <View style={styles.container}>
                        <CustomText text="Relatório de Custos" fontWeight="bold" size={16} />
                        <CustomText text="Plantação de Arroz Arbóreo" fontWeight="bold" size={18} />
                        <CustomText text={`Total: ${valorTotal}`} />
                        <CustomText text={`Área de: ${tamanhoDaArea} m²`} />
                    </View>


                    <View>
                        <View style={styles.cardsWrapper}>
                            <View style={styles.card}>
                                <CustomText text="Correção do solo" size={13} />
                                <CustomText text={`R$${vGastoCorrecaoSolo}`} fontWeight="bold" size={18} />
                            </View>

                            <View style={styles.card}>
                                <CustomText text="Plantio" size={13} />
                                <CustomText text={`R$${vGastoMQuadrado}`} fontWeight="bold" size={18} />
                            </View>
                        </View>


                        <View style={styles.cardsWrapper}>
                            <View style={styles.card}>
                                <CustomText text="Fertilizantes" size={13} />
                                <CustomText text={`R$${vGastoFertilizante}`} fontWeight="bold" size={18} />
                            </View>

                            <View style={styles.card}>
                                <CustomText text="Herbicidas" size={13} />
                                <CustomText text={`R$${vGastoHerbicidas}`} fontWeight="bold" size={18} />
                            </View>
                        </View>

                        <View style={styles.cardsWrapper}>
                            <View style={styles.card}>
                                <CustomText text="Itens diversos" size={13} />
                                <CustomText text={`R$${vGastoItens}`} fontWeight="bold" size={18} />
                            </View>

                            <View style={styles.card}>
                                <CustomText text="Terceirização" size={13} />
                                <CustomText text={`R$${vGastoMaoObra}`} fontWeight="bold" size={18} />
                            </View>
                        </View>
                    </View>

                    <View style={styles.total}>
                        <CustomText text="Total" />
                        <CustomText text={`R$${valorTotal}`} fontWeight="bold" color={colors.primaryColor} size={32}/>
                    </View>

                    <View style={[styles.buttonContainer, {height: "15%"}]}>
                        <CustomButton title="Ir para relatórios" width={315} height={50} size={16} color={colors.whiteColor} backgroundColor={colors.primaryColor } borderRadius={20} onPress={() => navigation.navigate("Reports")} />
                    </View>
                </ScrollView>
                }
            </View>
            <View>
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

    stepContainer: {
        width: "100%",
        height: "15%",
        justifyContent: "center",
        alignItems: "flex-end",
        flexDirection: "row",
        marginBottom: 40 
    },

    insertContainer: {
        width: "100%",
        height: "8%",
        alignItems: "center"
    },

    inputContainer: {
        alignItems: "flex-start",
        height: "100%"
    },

    buttonContainer: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },

    card: {
        backgroundColor: colors.pinkColor,
        width: "43%",
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        gap: 7,
        marginTop: 7,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    cardsWrapper: {
        flexDirection: "row",
        gap: 7,
        justifyContent: "center",
    },

    total: {
        backgroundColor: colors.pinkColor,
        marginTop: 20,
        marginLeft: 20,
        width: "88%",
        height: "10%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    scrollViewContent: {
        flexGrow: 1,
      },

      container: {
        marginTop: 60,
        justifyContent: "center",
        alignItems: "center"
      }
})