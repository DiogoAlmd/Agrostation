import { View, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native"
import { ScrollView, GestureHandlerRootView } from "react-native-gesture-handler"
import { CustomText } from "../../../CustomText/CustomText"
import { colors } from "../../../../assets/colors"

export const CaatingaArticle: React.FC = () => {

    return (
        <GestureHandlerRootView style={styles.wrapper}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View>
                    <Image source={require('../../../../assets/sementes-caatinga.png')}
                        resizeMode="contain"
                        style={styles.image} />

                    <View style={styles.card}>
                        <View style={styles.cardText}>
                            <CustomText text="Sementes da Caatinga" size={24} fontWeight="bold" />
                            <CustomText color={colors.greyColor} width={320} size={18} text="A Caatinga, um bioma único no Brasil, é lar de uma incrível diversidade de flora e fauna, e suas sementes desempenham um papel fundamental na preservação desse ecossistema árido. Descubra como cultivar e cuidar das sementes da Caatinga para contribuir com sua conservação e aproveitar seus benefícios." lineHeight={26} />
                            <CustomText text="Como cultivar Sementes da Caatinga" size={24} fontWeight="bold" />
                            <CustomText text="O cultivo e cuidado das sementes da Caatinga são essenciais para preservar essa rica biodiversidade. Aqui estão algumas diretrizes importantes:" color={colors.greyColor} size={18} lineHeight={26} />
                            <CustomText text="1. Escolha o local adequado" size={24} fontWeight="bold" />
                            <CustomText text="O primeiro passo para o cultivo de sementes da Caatinga é selecionar o local apropriado. Essas plantas são bem adaptadas a climas secos e quentes, portanto, escolha um local com boa exposição solar e solo bem drenado. Evite áreas com excesso de umidade, pois a maioria das espécies da Caatinga é adaptada à escassez de água." color={colors.greyColor} size={18} lineHeight={26} />
                            <CustomText text="2. Prepare o solo" size={24} fontWeight="bold" />
                            <CustomText text="Prepare o solo adequadamente, garantindo que ele seja arenoso e bem drenado. Se o solo for muito compacto, considere a adição de areia para melhorar a drenagem. Certifique-se de remover quaisquer ervas daninhas e detritos que possam competir com as sementes da Caatinga por recursos." color={colors.greyColor} size={18} lineHeight={26} />
                            <CustomText text="3. Escolha as espécies apropriadas" size={24} fontWeight="bold" />
                            <CustomText text="A Caatinga abriga uma grande variedade de espécies de plantas, cada uma com suas características únicas. Escolha as espécies que são nativas da sua região e que se adaptem às condições específicas do seu solo e clima." color={colors.greyColor} size={18} lineHeight={26} />
                            <CustomText text="4. Plante as sementes " size={18} fontWeight="bold" />
                            <CustomText text="As sementes da Caatinga podem ser semeadas diretamente no solo. Certifique-se de seguir as recomendações de profundidade e espaçamento para cada espécie. Geralmente, as sementes são plantadas no início da estação chuvosa para aproveitar a umidade do solo." color={colors.greyColor} size={18} lineHeight={26} />
                            <CustomText text="5. Irrigue com cuidado" size={24} fontWeight="bold" />
                            <CustomText text="Embora as plantas da Caatinga sejam resistentes à seca, é importante fornecer água suficiente para as sementes germinarem e as mudas crescerem. Evite excesso de água, pois isso pode ser prejudicial." color={colors.greyColor} size={18} lineHeight={26} />
                            <CustomText text="6. Proteja contra pragas e doenças" size={24} fontWeight="bold" />
                            <CustomText text="Assim como em qualquer cultivo, as plantas da Caatinga podem ser suscetíveis a pragas e doenças. Fique atento a sinais de infestação e tome medidas adequadas, como o uso de inseticidas naturais, para proteger suas plantas." color={colors.greyColor} size={18} lineHeight={26} />
                            <CustomText text="7. Colha as sementes" size={18} lineHeight={26} color={colors.greyColor} />
                            <CustomText text="A colheita das sementes da Caatinga deve ser feita quando estiverem maduras. Cada espécie terá seu próprio momento ideal de colheita. Armazene as sementes em local fresco e seco para preservar sua viabilidade." size={18} lineHeight={26} color={colors.greyColor} />
                            <CustomText text="Cultivar e cuidar das sementes da Caatinga não apenas contribui para a conservação desse ecossistema único, mas também oferece oportunidades para a utilização sustentável de suas plantas e sementes." color={colors.greyColor} size={18} lineHeight={26} />
                            <CustomText text="Leia também:" size={24} fontWeight="bold" />
                        </View>
                    </View>
                    <View>
                                <TouchableOpacity style={styles.clickableCardContainer}>
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