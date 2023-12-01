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




export const ReportsPerfomance: React.FC = () => {

    const [total, setTotal] = useState<number>();

    type Params = {
        nome: string;
        tamanhoDaArea: number;
        tipoCultura: string;
        vGastoCorrecaoSolo: number;
        vGastoFertilizante: number;
        vGastoHerbicidas: number; 
        vGastoMQuadrado: number,
        vGastoMaoObra: number,
        vGastoItens: number
    }

    const navigation = useNavigation<StackTypes>();


    const route = useRoute<RouteProp<Record<string, Params>, string>>();

    const {
        nome, 
        tamanhoDaArea, 
        tipoCultura, 
        vGastoCorrecaoSolo, 
        vGastoFertilizante, 
        vGastoItens, 
        vGastoHerbicidas, 
        vGastoMQuadrado, 
        vGastoMaoObra 
        } = route.params;

        useEffect(() => {
            // Soma dos valores em cada etapa
            const valorTotal =
              vGastoCorrecaoSolo +
              vGastoMQuadrado +
              vGastoFertilizante +
              vGastoHerbicidas +
              vGastoMaoObra +
              vGastoItens
    
              setTotal(valorTotal);
          }, [
            vGastoCorrecaoSolo,
            vGastoMQuadrado,
            vGastoFertilizante,
            vGastoHerbicidas,
            vGastoMaoObra,
            vGastoItens,
          ]);

    return (
    <ScrollView contentContainerStyle={styles.scrollViewContent} keyboardShouldPersistTaps="handled">
    <View style={styles.container}>
        <CustomText text="Relatório de Custos" fontWeight="bold" size={16} />
        <CustomText text="Plantação de Arroz Arbóreo" fontWeight="bold" size={18} />
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
        <CustomText text={`R$${total}`} fontWeight="bold" color={colors.primaryColor} size={32}/>
    </View>

    <View style={[styles.buttonContainer, {height: "15%"}]}>
        <CustomButton title="Ir para relatórios" width={315} height={50} size={16} color={colors.whiteColor} backgroundColor={colors.primaryColor } borderRadius={20} onPress={() => navigation.navigate("Reports")} />
    </View>
    </ScrollView>
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