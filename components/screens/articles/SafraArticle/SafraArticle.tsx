import { View, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native"
import { ScrollView, GestureHandlerRootView } from "react-native-gesture-handler"
import { CustomText } from "../../../CustomText/CustomText"
import { colors } from "../../../../assets/colors"
import { StackTypes } from '../../../routes/StackNavigator';
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";

export const SafrasArticle: React.FC = () => {
    const navigation = useNavigation<StackTypes>();


    return (
        <GestureHandlerRootView style={styles.wrapper}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View>
                    <Image source={require('../../../../assets/safras.png')}
                        resizeMode="contain"
                        style={styles.image} />

                    <View style={styles.card}>
                        <View style={styles.cardText}>
                            <CustomText text="Safra em Alta" size={24} fontWeight="bold" />
                            <CustomText color={colors.greyColor} width={320} size={18} text="O cenário agrícola do Brasil está testemunhando uma safra em alta, com recordes de produção e qualidade em diversas culturas. Este aumento na produção é resultado de práticas agrícolas inovadoras, tecnologia avançada e condições climáticas favoráveis. Neste artigo, exploraremos os principais fatores que contribuem para a safra em alta no país." lineHeight={26} />
                            <CustomText text="Variedades de Culturas" size={24} fontWeight="bold" />
                            <CustomText text="A diversidade geográfica do Brasil permite o cultivo de uma ampla variedade de culturas, desde grãos até frutas e legumes. A seleção das variedades certas de culturas desempenha um papel crucial na obtenção de rendimentos elevados. Agricultores experientes estão aproveitando essa diversidade para escolher as culturas que melhor se adaptam às condições de seus campos." color={colors.greyColor} size={18} lineHeight={26} />
                            <CustomText text="1. Tecnologia Agrícola" size={24} fontWeight="bold" />
                            <CustomText text="A tecnologia desempenha um papel fundamental na safra em alta. Agricultores estão adotando práticas agrícolas modernas, como a agricultura de precisão, o uso de drones para monitoramento, e a aplicação de fertilizantes e defensivos de maneira mais eficiente. Isso não apenas aumenta a produtividade, mas também reduz os impactos ambientais." color={colors.greyColor} size={18} lineHeight={26} />
                            <CustomText text="2. Clima Favorável" size={24} fontWeight="bold" />
                            <CustomText text="As condições climáticas têm um impacto significativo na agricultura. O Brasil, com sua vasta extensão territorial, oferece uma variedade de climas adequados para diferentes culturas. A regularidade das estações e a disponibilidade de água contribuem para colheitas consistentes e de alta qualidade.." color={colors.greyColor} size={18} lineHeight={26} />
                            <CustomText text="3. Investimentos em Infraestrutura" size={24} fontWeight="bold" />
                            <CustomText text="Os investimentos em infraestrutura, como estradas e armazéns, estão facilitando o transporte e o armazenamento de produtos agrícolas. Isso permite que os agricultores colham e distribuam suas colheitas de maneira eficaz, garantindo que os produtos cheguem aos mercados internos e externos em condições ideais." color={colors.greyColor} size={18} lineHeight={26} />
                            <CustomText text="4. Sustentabilidade" size={18} fontWeight="bold" />
                            <CustomText text="A sustentabilidade tornou-se uma prioridade para a agricultura brasileira. Os agricultores estão adotando práticas que visam a conservação do solo e a preservação dos recursos naturais. A agricultura sustentável não apenas protege o meio ambiente, mas também ajuda a garantir colheitas futuras de alta qualidade." color={colors.greyColor} size={18} lineHeight={26} />
                            <CustomText text="5. Parcerias Estratégicas" size={24} fontWeight="bold" />
                            <CustomText text="O café se dá muito bem em climas tropicais e não exige muitas regas, já que não suporta solos encharcados. O ideal é realizar a inspeção frequente da plantação para verificar se as árvores precisam ser hidratadas ou se necessitam de combate à insolação excessiva." color={colors.greyColor} size={18} lineHeight={26} />
                            <CustomText text="Leia também:" size={24} fontWeight="bold" />
                        </View>
                    </View>
                            <View>
                                <TouchableOpacity style={styles.clickableCardContainer} onPress={() => navigation.navigate("Caatinga") }>
                                    <Image source={require("../../../../assets/Caatinga.png")} style={styles.clickableCardImage} resizeMode="contain" />
                                    <View style={styles.clickableCard}>
                                        <View style={styles.clickableCardText}>
                                            <CustomText text="Clima" size={12} />
                                            <CustomText text="Sementes da caatinga" color={colors.darkBlueColor} fontWeight="bold" />
                                            <CustomText text="As sementes da Caatinga brasileira são uma parte vital da flora desta região semiárida..." color={colors.leadGrey} />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View>
                                <TouchableOpacity style={styles.clickableCardContainer} onPress={() => navigation.navigate("Verao")}>
                                    <Image source={require("../../../../assets/Melancia.png")} style={styles.clickableCardImage} resizeMode="contain" />
                                    <View style={styles.clickableCard}>
                                        <View style={styles.clickableCardText}>
                                            <CustomText text="Clima" size={12} />
                                            <CustomText text="Plantio no verão" color={colors.darkBlueColor} fontWeight="bold" />
                                            <CustomText text="Incluem sementes de plantas como o girassol, a abóbora, o milho, o tomate, o pimentão..." color={colors.leadGrey} />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View>
                                <TouchableOpacity style={styles.clickableCardContainer} onPress={() => navigation.navigate("Cafe")}>
                                    <Image source={require("../../../../assets/lavoura.png")} style={styles.clickableCardImage} resizeMode="contain" />
                                    <View style={styles.clickableCard}>
                                        <View style={styles.clickableCardText}>
                                            <CustomText text="Clima" size={12} />
                                            <CustomText text="Manejo eficiente da lavroura de café" color={colors.darkBlueColor} fontWeight="bold" />
                                            <CustomText text="Incluem sementes de plantas como o girassol, a abóbora, o milho, o tomate, o pimentão..." color={colors.leadGrey} />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                    </View>
            </ScrollView>
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },

    image: {
        width: 450,
        height: 370,
        left: -30.5
    },

    card: {
        borderRadius: 20,
        backgroundColor: "#FFFFFF",
        padding: 15,
        marginTop: -20
    },

    cardText: {
        marginTop: 20, // Ajuste a margem superior para mover o conteúdo para cima
        gap: 45
    },

    scrollViewContent: {
        flexGrow: 1,
    },

    clickableCardContainer: {
        flexDirection: "row",
        marginHorizontal: 10
    },

    clickableCard: {
        width: "70%",
        height: 133,
        backgroundColor: colors.beigeColor,
        marginTop: 13,
        right: 5

    },

    clickableCardImage: {
        width: 100,
        height: 150,
        top: 5
    },

    clickableCardText: {
        marginTop: 10,
        marginLeft: 6,
        flex: 1,
        alignItems: "flex-start",
        gap: 5
    },

    clickableCardWrapper: {
        marginBottom: 10
    }
});