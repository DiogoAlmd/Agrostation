import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { Image } from "react-native";
import { colors } from "../../../assets/colors";

type Options = {
    optionsSelect: string[]
    onValueChange: (option: string) => void;
    isEdit?: boolean,
    label: string
    defaultValue?: string;
}

export default function Select({ optionsSelect, onValueChange, label, isEdit = true, defaultValue }: Options) {

    const [open, setOpen] = useState(false)
    const [select, SetSelect] = useState(defaultValue || "");

    useEffect(() => {
        SetSelect(defaultValue || "");
      }, [defaultValue]);

    function handleSelected (options: string) {
        setOpen(false);
        SetSelect(options)
        onValueChange(options);
    }

    return (
        <View style={[styles.container, {zIndex: 20}]} >
            {isEdit ?
                <TouchableOpacity onPress={() => setOpen(!open)} style={styles.button}>
                    <Text >{select ? select : label}</Text>
                    <Image source={require("../../../assets/seta.png")} style={styles.arrow} />
                </TouchableOpacity>
                :
                <View style={styles.button}>
                    <Text >{select}</Text>
                </View>
            }


            {open && <View style={styles.optionsContainer}>
                {optionsSelect.map((options, index) => {
                    return (<TouchableOpacity onPress={() => handleSelected(options)} key={index} style={[styles.options, {zIndex: 20}]}>
                        <Text>{options}</Text>
                    </TouchableOpacity>)
                })}
            </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        marginBottom: 16,
        width: 315,
        height: 40
    },

    button: {
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1,
        flexDirection: "row",
        backgroundColor: colors.pinkColor,
        paddingHorizontal: 8,
        paddingVertical: 12,
        width: "100%",
        color: colors.whiteColor
    },

    arrow: {
        width: 20,
        height: 20
    },

    optionsContainer: {
        position: "absolute",
        width: 315,
        height: 40,
        top: "100%",
    },

    options: {
        backgroundColor: colors.pinkColor,
        paddingHorizontal: 4,
        paddingVertical: 8,
        width: "100%"
    }
})