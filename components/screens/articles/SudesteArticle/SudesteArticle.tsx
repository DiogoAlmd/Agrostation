import { View, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native"
import { ScrollView, GestureHandlerRootView } from "react-native-gesture-handler"
import { CustomText } from "../../../CustomText/CustomText"
import { colors } from "../../../../assets/colors"

export const SudesteArticle: React.FC = () => {

    return (
        <GestureHandlerRootView style={styles.wrapper}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View>
                    <Image source={require('../../../../assets/sementes-caatinga.png')}
                        resizeMode="contain"
                        style={styles.image} />

                    <View style={styles.card}>
                        <View style={styles.cardText}>
                            <CustomText text="Explorando o Sudeste Brasileiro" size={24} fontWeight="bold" />
                            <CustomText color={colors.greyColor} width={320} size={18} text="A região Sudeste do Brasil, uma das mais populosas e economicamente importantes do país, abriga uma diversidade de paisagens e ecossistemas fascinantes. Neste texto, vamos explorar como você pode contribuir para a conservação e apreciação da riqueza natural do Sudeste brasileiro, focando em como cuidar e cultivar as sementes dessa região." lineHeight={26} />
                            <CustomText text="Descobrindo o Sudeste" size={24} fontWeight="bold" />
                            <CustomText text="1. Cultivando a Diversidade do Sudeste Brasileiro" size={24} fontWeight="bold" />
                            <CustomText text="O Sudeste do Brasil é caracterizado por uma incrível variedade de ambientes, desde as florestas exuberantes da Mata Atlântica até as áreas de Cerrado e os ecossistemas costeiros. Cultivar sementes de plantas nativas dessa região pode ser uma maneira eficaz de contribuir para a preservação desses ecossistemas. Aqui estão algumas diretrizes essenciais:" color={colors.greyColor} size={18} lineHeight={26} />
                            <CustomText text="2. Escolha o Ambiente Adequado" size={24} fontWeight="bold" />
                            <CustomText text="O primeiro passo para o cultivo de sementes do Sudeste é escolher o ambiente certo para as espécies que deseja cultivar. Considere fatores como a altitude, o tipo de solo, a exposição solar e o regime de chuvas. O Sudeste abriga uma variedade de condições, e plantas específicas se adaptam a diferentes ambientes." color={colors.greyColor} size={18} lineHeight={26} />
                            <CustomText text="3. Preparando o solo" size={24} fontWeight="bold" />
                            <CustomText text="Prepare o solo de acordo com as necessidades das espécies que você deseja cultivar. Alguns preferem solos mais arenosos, enquanto outros prosperam em solos mais argilosos. Certifique-se de que o solo tenha boa drenagem, pois o Sudeste pode apresentar chuvas intensas em certas épocas do ano." color={colors.greyColor} size={18} lineHeight={26} />
                            <CustomText text="4. Selecione Espécies Nativas" size={18} fontWeight="bold" />
                            <CustomText text="O Sudeste abriga uma riqueza de espécies nativas, muitas das quais estão ameaçadas. Escolha cuidadosamente as espécies que deseja cultivar, priorizando aquelas que são nativas da região. Isso ajuda a preservar a biodiversidade local e a manter a integridade do ecossistema." color={colors.greyColor} size={18} lineHeight={26} />
                            <CustomText text="5. Plante as Sementes" size={24} fontWeight="bold" />
                            <CustomText text="Semeie as sementes de acordo com as instruções específicas de cada espécie. Algumas sementes podem precisar de escarificação, estratificação ou outros tratamentos antes do plantio. Respeite as épocas ideais de plantio de cada espécie, levando em consideração o clima local." color={colors.greyColor} size={18} lineHeight={26} />
                            <CustomText text="6. Cuidado com a Irrigação" size={24} fontWeight="bold" />
                            <CustomText text="Embora o Sudeste tenha um regime de chuvas variável ao longo do ano, é importante fornecer irrigação adicional quando necessário, especialmente para as mudas. Evite o excesso de água para prevenir o apodrecimento das raízes." color={colors.greyColor} size={18} lineHeight={26} />
                            <CustomText text="7. Proteja contra ameaças" size={24} fontWeight="bold" />
                            <CustomText text="Assim como na Caatinga, as plantas do Sudeste podem ser suscetíveis a pragas e doenças. Esteja atento a sinais de infestação e aplique medidas adequadas para proteger suas plantas. O uso de práticas orgânicas e sustentáveis é sempre recomendado." size={18} lineHeight={26} color={colors.greyColor} />
                            <CustomText text="8. Colha e Armazene com cuidado" size={24} fontWeight="bold"  />
                            <CustomText text="Quando as sementes estiverem maduras, faça a colheita. Cada espécie terá um momento ideal, e é importante coletá-las antes que se espalhem naturalmente. Armazene as sementes em local fresco e seco, etiquetando-as adequadamente para futura identificação. Cultivar e cuidar das sementes do Sudeste brasileiro não apenas contribui para a preservação da biodiversidade, mas também permite a apreciação da beleza única dessa região. Além disso, ao compartilhar seus conhecimentos e plantas com outros entusiastas, você ajuda a sensibilizar mais pessoas sobre a importância da conservação e da valorização dos ecossistemas do Sudeste."  color={colors.greyColor} size={18} lineHeight={26}/>
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