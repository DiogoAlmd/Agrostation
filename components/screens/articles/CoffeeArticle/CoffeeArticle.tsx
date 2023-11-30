import { View, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native"
import { ScrollView, GestureHandlerRootView } from "react-native-gesture-handler"
import { CustomText } from "../../../CustomText/CustomText"
import { colors } from "../../../../assets/colors"
import { CustomButton } from "../../../CustomButton/CustomButton"

export const CoffeeArticle: React.FC = () => {

    return (
        <GestureHandlerRootView style={styles.wrapper}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View>
                    <Image source={require('../../../../assets/cafe-artigo.png')}
                        resizeMode="contain"
                        style={styles.image} />

                    <View style={styles.card}>
                        <View style={styles.cardText}>
                            <CustomText text="Café expresso" size={24} fontWeight="bold" />
                            <CustomText color={colors.greyColor} width={320} size={18} text="O Brasil é o principal produtor e exportador de café do mundo. Com suas condições climáticas variadas, 
                            o País possibilita a plantação de uma grande variedade de espécies em diferentes temperaturas, altitudes e solos; por consequência, consegue oferecer diversos padrões de qualidade, além de aromas e sabores únicos." lineHeight={26} />
                            <CustomText text="Assim como outras culturas, a plantação de café tem técnicas e processos particulares que, se não forem seguidos, podem afetar a produção por vários anos." color={colors.greyColor} size={18} lineHeight={26} />
                            <CustomText text="Como plantar café" size={24} fontWeight="bold" />
                            <CustomText text="O plantio de café envolve detalhes que podem ter efeitos fundamentais na produtividade elevada e na qualidade do grão. Confira!" color={colors.greyColor} size={18} lineHeight={26} />
                            <CustomText text="1. Escolha o local adequado e prepare o terreno" size={24} fontWeight="bold" />
                            <CustomText text="O primeiro passo para o cultivo do café é a escolha de um local adequado para a plantação. O terreno ideal precisa ter pelo menos 1 metro de profundidade e não pode ser pedregoso ou excessivamente arenoso. Áreas de baixada são inaptas ao plantio mesmo com sistema de drenagem artificial. Espaços com ventos fortes e frios devem ser evitados." color={colors.greyColor} size={18} lineHeight={26} />
                            <CustomText text="2. Selecione a varidade adequada" size={24} fontWeight="bold" />
                            <CustomText text="Duas espécies de café são vendidas no mercado, a arábica e a robusta. As linhagens de café arábica produzem cafés mais finos e alcançam os maiores preços no mercado, com produtividade que depende de temperaturas amenas e altitudes elevadas. As linhagens robustas (canephora) produzem cafés inferiores aos da variedade arábica e têm ótima aceitação no mercado por conta dos preços mais acessíveis. Essa opção se adapta bem às regiões de baixa altitude e de temperaturas elevadas." color={colors.greyColor} size={18} lineHeight={26} />
                            <CustomText text="3. Faça o plantio" size={24} fontWeight="bold" />
                            <CustomText text="O plantio do café deve ser feito em buracos de cerca de 30 centímetros de profundidade e 25 centímetros de largura. A distância entre cada um deve ser de no mínimo 80 centímetros, para que um arbusto não interfira no desenvolvimento de outro." color={colors.greyColor} size={18} lineHeight={26} />
                            <CustomText text="4. Irrigue a plantação" size={18} fontWeight="bold" />
                            <CustomText text="O café se dá muito bem em climas tropicais e não exige muitas regas, já que não suporta solos encharcados. O ideal é realizar a inspeção frequente da plantação para verificar se as árvores precisam ser hidratadas ou se necessitam de combate à insolação excessiva." color={colors.greyColor} size={18} lineHeight={26} />
                            <CustomText text="5. Faça o controle de pragas e doenças" size={24} fontWeight="bold" />
                            <CustomText text="Os principais inimigos do café no Brasil são o bicho-mineiro e a broca-do-café. O monitoramento desses agressores e o combate a eles é fundamental e pode ser feito com inseticidas químicos e biológicos." color={colors.greyColor} size={18} lineHeight={26} />
                            <CustomText text="6. Realize a colheita" size={24} fontWeight="bold" />
                            <CustomText text="A colheita do café pode ser iniciada quando os grãos atingem o estado de maturação chamado de cereja. Isso ocorre quando a cor da casca dos grãos muda de verde para vermelho ou amarelo, dependendo da espécie." color={colors.greyColor} size={18} lineHeight={26} />
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
    }
});