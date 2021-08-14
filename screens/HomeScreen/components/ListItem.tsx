import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { RenderItemParams } from "react-native-draggable-flatlist";

interface PropTypes<T> extends RenderItemParams<T> {
    onClick: () => void;
}

const ListItem = ({
    item,
    index,
    drag,
    isActive,
    onClick,
}: PropTypes<Item>) => {
    const setSelection = (selected: boolean) => {
        console.log(selected);
    };

    return (
        <TouchableOpacity
            style={styles.listItem}
            onPress={() => onClick()}
            onLongPress={drag}
        >
            <Text style={item.done ? styles.doneText : styles.text}>
                {item.name}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        marginTop: 15,
        marginHorizontal: 15,
        padding: 15,
        borderRadius: 10,
    },
    text: {
        fontWeight: "normal",
        color: "black",
        fontSize: 16,
    },
    doneText: {
        fontWeight: "normal",
        fontStyle: "italic",
        textDecorationLine: "line-through",
        color: "gray",
    },
});

export default ListItem;
