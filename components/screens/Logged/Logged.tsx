import React from "react"
import { View, StyleSheet, Image, ScrollView } from "react-native"
import { CustomText } from "../../CustomText/CustomText"
import { colors } from "../../../assets/colors"
import { CustomButton } from "../../CustomButton/CustomButton"

export const Logged: React.FC = () => {
    return (
        <ScrollView style={styles.wrapper} contentContainerStyle={styles.scrollContainer}>
            <View style={styles.topView}>
                <View style={styles.home}>
                    <CustomText text="Início" fontWeight="bold" size={24} color={colors.whiteColor} />
                </View>

                <View style={styles.title}>
                    <CustomText text="agro" size={40} color={colors.primaryColor} fontWeight="700"/>
                    <CustomText text="station" size={40} color={colors.whiteColor} fontWeight="700"/>
                </View>
            </View>

            <View style={styles.calculatorContainer}>
                <Image source={require("../../../assets/Calculadora.png")} style={styles.image} resizeMode="contain"/>
                <View style={styles.calculatorCard}>
                    <View style={styles.calculatorText}>
                        <CustomText text="Calculadora" color={colors.darkBlueColor} fontWeight="bold"/>
                        <CustomText text="Criar relatórios de custos lavoura" color={colors.leadGrey}/>
                    </View>

                    <View style={styles.calculatorButton}>
                        <CustomButton title="Acessar" backgroundColor={colors.primaryColor} paddingH={22} paddingV={15} borderRadius={18} color={colors.whiteColor} fontWeight="bold" size={15} />
                    </View>
                </View>
            </View>

            <View style={styles.discoverText}>
                <CustomText text="Descubra sobre" color={colors.darkBlueColor} size={24} fontWeight="bold" />
            </View>

          <View style={styles.discoverContainer}>
            <View style={styles.cardsWrapper}>
                <View style={styles.cardContainer}>
                    <Image source={require("../../../assets/por-do-sol.png")} style={styles.cardImage} resizeMode="contain"/>
                    <View style={styles.card}>
                        <View style={styles.cardText}>
                            <CustomText text="Nordeste" color={colors.darkBlueColor} fontWeight="bold"/>
                            <CustomText text="Confira artigos sobre o tema" color={colors.leadGrey}/>
                        </View>

                        <View style={styles.cardButton}>
                            <CustomButton title="Acessar" backgroundColor={colors.primaryColor} paddingH={22} paddingV={15} borderRadius={18} color={colors.whiteColor} fontWeight="bold" size={15} />
                        </View>
                    </View>
                </View>

                    <View style={styles.cardContainer}>
                        <Image source={require("../../../assets/fazenda.png")} style={styles.cardImage} resizeMode="contain"/>
                        <View style={styles.card}>
                            <View style={styles.cardText}>
                                <CustomText text="Sudeste" color={colors.darkBlueColor} fontWeight="bold"/>
                                <CustomText text="Confira artigos sobre o tema" color={colors.leadGrey}/>
                            </View>

                            <View style={styles.cardButton}>
                                <CustomButton title="Acessar" backgroundColor={colors.primaryColor} paddingH={22} paddingV={15} borderRadius={18} color={colors.whiteColor} fontWeight="bold" size={15} />
                            </View>
                        </View>
                    </View>
            </View>


            <View style={styles.cardsWrapper}>
                <View style={styles.cardContainer}>
                    <Image source={require("../../../assets/cafe.png")} style={styles.cardImage} resizeMode="contain"/>
                    <View style={styles.card}>
                        <View style={styles.cardText}>
                            <CustomText text="Nordeste" color={colors.darkBlueColor} fontWeight="bold"/>
                            <CustomText text="Confira artigos sobre o tema" color={colors.leadGrey}/>
                        </View>

                        <View style={styles.cardButton}>
                            <CustomButton title="Acessar" backgroundColor={colors.primaryColor} paddingH={22} paddingV={15} borderRadius={18} color={colors.whiteColor} fontWeight="bold" size={15} />
                        </View>
                    </View>
                </View>

                    <View style={styles.cardContainer}>
                        <Image source={require("../../../assets/floresta.png")} style={styles.cardImage} resizeMode="contain"/>
                        <View style={styles.card}>
                            <View style={styles.cardText}>
                                <CustomText text="Sudeste" color={colors.darkBlueColor} fontWeight="bold"/>
                                <CustomText text="Confira artigos sobre o tema" color={colors.leadGrey}/>
                            </View>

                            <View style={styles.cardButton}>
                                <CustomButton title="Acessar" backgroundColor={colors.primaryColor} paddingH={22} paddingV={15} borderRadius={18} color={colors.whiteColor} fontWeight="bold" size={15} />
                            </View>
                        </View>
                    </View>
            </View>
            

            <View style={styles.cardsWrapper}>
                <View style={styles.cardContainer}>
                    <Image source={require("../../../assets/temperos.png")} style={styles.cardImage} resizeMode="contain"/>
                    <View style={styles.card}>
                        <View style={styles.cardText}>
                            <CustomText text="Nordeste" color={colors.darkBlueColor} fontWeight="bold"/>
                            <CustomText text="Confira artigos sobre o tema" color={colors.leadGrey}/>
                        </View>

                        <View style={styles.cardButton}>
                            <CustomButton title="Acessar" backgroundColor={colors.primaryColor} paddingH={22} paddingV={15} borderRadius={18} color={colors.whiteColor} fontWeight="bold" size={15} />
                        </View>
                    </View>
                </View>

                    <View style={styles.cardContainer}>
                        <Image source={require("../../../assets/cafe-lavoura.png")} style={styles.cardImage} resizeMode="contain"/>
                        <View style={styles.card}>
                            <View style={styles.cardText}>
                                <CustomText text="Sudeste" color={colors.darkBlueColor} fontWeight="bold"/>
                                <CustomText text="Confira artigos sobre o tema" color={colors.leadGrey}/>
                            </View>

                            <View style={styles.cardButton}>
                                <CustomButton title="Acessar" backgroundColor={colors.primaryColor} paddingH={22} paddingV={15} borderRadius={18} color={colors.whiteColor} fontWeight="bold" size={15} />
                            </View>
                        </View>
                    </View>
            </View>

            <View style={styles.cardsWrapper}>
                <View style={styles.cardContainer}>
                    <Image source={require("../../../assets/sementes-caatinga.png")} style={styles.cardImage} resizeMode="contain"/>
                    <View style={styles.card}>
                        <View style={styles.cardText}>
                            <CustomText text="Nordeste" color={colors.darkBlueColor} fontWeight="bold"/>
                            <CustomText text="Confira artigos sobre o tema" color={colors.leadGrey}/>
                        </View>

                        <View style={styles.cardButton}>
                            <CustomButton title="Acessar" backgroundColor={colors.primaryColor} paddingH={22} paddingV={15} borderRadius={18} color={colors.whiteColor} fontWeight="bold" size={15} />
                        </View>
                    </View>
                </View>

                    <View style={styles.cardContainer}>
                        <Image source={require("../../../assets/flores.png")} style={styles.cardImage} resizeMode="contain"/>
                        <View style={styles.card}>
                            <View style={styles.cardText}>
                                <CustomText text="Sudeste" color={colors.darkBlueColor} fontWeight="bold"/>
                                <CustomText text="Confira artigos sobre o tema" color={colors.leadGrey}/>
                            </View>

                            <View style={styles.cardButton}>
                                <CustomButton title="Acessar" backgroundColor={colors.primaryColor} paddingH={22} paddingV={15} borderRadius={18} color={colors.whiteColor} fontWeight="bold" size={15} />
                            </View>
                        </View>
                    </View>
            </View>
           </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: colors.whiteColor
    },

    topView: {
        width: "100%",
        height: 220,
        backgroundColor: colors.darkBlueColor,
        justifyContent: "center"
    },

    home: {
        margin: 20
    },
    
    title: {
        flexDirection: "row",
        justifyContent: "center",
        top: 40
    },

    image: {
        width: 340,
        height: 150,
        borderRadius: 10,
        top: 5
    },

    scrollContainer: {
        alignItems: "center"
    },

    calculatorContainer: {
        marginTop: 60
    },

    calculatorCard: {
        flexDirection: "row",
        width: 340,
        height: 90,
        backgroundColor: colors.beigeColor
    },

    calculatorText: {
        marginTop: 15,
        marginLeft: 10,
        flex: 1,
        alignItems: "flex-start",
        gap: 8
    },

    calculatorButton: {
        flex: 1,
        alignItems: "flex-end",
        marginTop: 20,
        marginRight: 15
        
    },

    discoverText: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginTop: 30
    },

    discoverContainer: {
        marginTop: 5,
        marginBottom: 20
    },

    cardsWrapper: {
        flexDirection: "row",
        gap: 10
    },

    cardContainer: {
        marginTop: 8
    },

    card: {
        width: 165,
        height: 155,
        backgroundColor: colors.beigeColor,

    },

    cardImage: {
        flex: 1,
        width: "100%",
        top: 5
    },

    cardText: {
        marginTop: 20,
        marginLeft: 10,
        flex: 1,
        alignItems: "flex-start",
        gap: 5
    },

    cardButton: {
        flex: 1,
        alignItems: "flex-start",
        marginTop: 10,
        marginLeft: 15
    },
})