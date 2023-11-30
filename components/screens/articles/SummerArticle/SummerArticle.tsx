import { View, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native"
import { ScrollView, GestureHandlerRootView } from "react-native-gesture-handler"
import { CustomText } from "../../../CustomText/CustomText"
import { colors } from "../../../../assets/colors"

export const SummerArticle: React.FC = () => {

    return (
        <GestureHandlerRootView style={styles.wrapper}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View>
                    <Image source={require('../../../../assets/floresta.png')}
                        resizeMode="contain"
                        style={styles.image} />

                    <View style={styles.card}>
                        <View style={styles.cardText}>
                            <CustomText text="Plantio no verão" size={24} fontWeight="bold" />
                            <CustomText color={colors.greyColor} width={320} size={18} text="O Brasil é abençoado com uma diversidade de climas e condições ideais para a prática do plantio em várias épocas do ano. O verão, em particular, oferece um ambiente propício para diversas culturas agrícolas. Neste artigo, vamos explorar as melhores práticas para o plantio no verão, aproveitando ao máximo as condições climáticas favoráveis." lineHeight={26} />
                            <CustomText text="Escolhendo o Local Adequado" size={24} fontWeight="bold" />
                            <CustomText text="Ao optar pelo plantio no verão, é importante selecionar um local que receba uma quantidade adequada de luz solar, com solo fértil e bem drenado. Evite áreas propensas a alagamentos, pois o excesso de água pode prejudicar o crescimento das plantas." color={colors.greyColor} size={18} lineHeight={26} />
                            <CustomText text="1. Preparando o Solo" size={24} fontWeight="bold" />
                            <CustomText text="A preparação do solo desempenha um papel crucial no sucesso do plantio no verão. Antes de iniciar o cultivo, certifique-se de que o solo esteja bem arado e livre de detritos. Adubar o solo com nutrientes adequados é essencial para fornecer às plantas os nutrientes necessários para o crescimento saudável." color={colors.greyColor} size={18} lineHeight={26} />
                            <CustomText text="2. Selecione as Culturas Adequadas" size={24} fontWeight="bold" />
                            <CustomText text="A escolha das culturas certas é essencial. No verão, culturas como milho, soja, feijão e tomate tendem a prosperar. Certifique-se de selecionar variedades de plantas que são resistentes ao calor e que se adequam ao clima da região." color={colors.greyColor} size={18} lineHeight={26} />
                            <CustomText text="3. Realizando o plantio" size={24} fontWeight="bold" />
                            <CustomText text="O plantio no verão requer atenção aos detalhes. As sementes devem ser plantadas a uma profundidade adequada e com o espaçamento correto entre elas. Isso garante que as plantas tenham espaço suficiente para crescer e receber a quantidade certa de luz solar." color={colors.greyColor} size={18} lineHeight={26} />
                            <CustomText text="4. Irrigação Adequada " size={18} fontWeight="bold" />
                            <CustomText text="Durante o verão, o clima quente e seco pode exigir um sistema de irrigação eficaz. É essencial manter as plantas adequadamente hidratadas para garantir o crescimento saudável. Monitorar o solo e as necessidades de água das plantas é fundamental para evitar o estresse hídrico." color={colors.greyColor} size={18} lineHeight={26} />
                            <CustomText text="5. Controle de Pragas e Doenças" size={24} fontWeight="bold" />
                            <CustomText text="O plantio no verão pode ser afetado por pragas e doenças. Esteja atento a qualquer sinal de infestação e tenha um plano de ação para o controle de pragas e doenças. Isso pode incluir o uso de métodos orgânicos ou químicos, dependendo das necessidades específicas da cultura." color={colors.greyColor} size={18} lineHeight={26} />
                            <CustomText text="6. A Colheita no Momento Adequado" size={24} fontWeight="bold" />
                            <CustomText text="A colheita no verão deve ser realizada no momento apropriado, quando as culturas atingirem o estágio de maturação ideal. Isso varia de acordo com a cultura, portanto, esteja familiarizado com os indicadores de maturação para cada planta que você está cultivando." color={colors.greyColor} size={18} lineHeight={26} />
                            <CustomText text="Em resumo, o plantio no verão oferece oportunidades abundantes para a agricultura bem-sucedida. Ao seguir as práticas recomendadas e prestar atenção às necessidades específicas de cada cultura, você pode colher os benefícios do verão e obter uma colheita abundante e saudável. Lembre-se sempre de adaptar suas técnicas às condições locais e às características da sua área de cultivo." size={18} lineHeight={26} color={colors.greyColor} />
                            <CustomText text="Leia também:" size={24} fontWeight="bold" />
                        </View>
                    </View>
                            <View>
                                <TouchableOpacity style={styles.clickableCardContainer}>
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
                                <TouchableOpacity style={styles.clickableCardContainer}>
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

                            <View style={styles.clickableCardWrapper}>
                                <TouchableOpacity style={styles.clickableCardContainer}>
                                    <Image source={require("../../../../assets/safra-em-alta.png")} style={styles.clickableCardImage} resizeMode="contain" />
                                    <View style={styles.clickableCard}>
                                        <View style={styles.clickableCardText}>
                                            <CustomText text="Clima" size={12} />
                                            <CustomText text="Safra em alta" color={colors.darkBlueColor} fontWeight="bold" />
                                            <CustomText text="Clima favorece a semeadura do trigo e do milho na região do Rio Grande do Sul. As condições..." color={colors.leadGrey} />
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
    },

    cafeLavoura: {
        width: 120,
        height: 150,
        top: 5
    }
});