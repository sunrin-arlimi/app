import { ReactNode } from "react";
import { StyleSheet, Pressable, Text } from "react-native";

interface FilterSelectButtonProps {
    children?: ReactNode;
    onPress: () => void;
    selected: boolean;
}

export default function FilterSelectButton({ children, onPress, selected }: FilterSelectButtonProps) {
    return (
        <Pressable style={[style.button, selected ? style.buttonSelected : null]}>
            <Text style={[style.text, selected ? style.textSelected : null]}>
                {children}
            </Text>
        </Pressable>
    )
}

const style = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',

        paddingVertical: 6,
        paddingHorizontal: 12,

        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#ededed",

        backgroundColor: 'white',

        marginLeft: 17.5,
        marginRight: -9.5,
    },
    buttonSelected: {
        backgroundColor: "#477AFF",
    },
    text: {
        color: 'black',

        fontSize: 14,
    },
    textSelected: {
        color: 'white',
    }
})