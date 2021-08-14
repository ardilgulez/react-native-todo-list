import React from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import RootStackParamList from "../../types/root-stack-param-list";
import { MaterialIcons } from "@expo/vector-icons";

interface PropTypes {
    navigation: NativeStackNavigationProp<RootStackParamList, "Detail">;
    route: RouteProp<RootStackParamList, "Detail">;
}

const DetailScreen = ({ navigation, route }: PropTypes) => {
    const { item } = route.params;
    return (
        <View style={styles.wrapper}>
            <Text style={styles.titleText}>{item.name}</Text>
            <Text style={styles.descriptionText}>{item.description}</Text>
            <View style={styles.buttonBar}>
                <TouchableOpacity
                    style={[styles.detailButton, styles.deleteButton]}
                >
                    <MaterialIcons name="delete" size={32} color="white" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.detailButton, styles.editButton]}
                >
                    <MaterialIcons name="edit" size={32} color="white" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.detailButton, styles.favoriteButton]}
                >
                    <MaterialIcons name="favorite" size={32} color="white" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.detailButton, styles.doneButton]}
                >
                    <MaterialIcons name="fact-check" size={32} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    detailButton: {
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
    },
    deleteButton: {
        backgroundColor: "red",
        borderColor: "red",
    },
    favoriteButton: {
        backgroundColor: "darkblue",
        borderColor: "darkblue",
    },
    editButton: {
        backgroundColor: "orange",
        borderColor: "orange",
    },
    doneButton: {
        backgroundColor: "green",
        borderColor: "green",
    },
    wrapper: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    buttonBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "stretch",
        marginTop: 20,
        paddingHorizontal: 20,
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "flex-start",
        marginTop: 20,
        marginLeft: 20,
    },
    descriptionText: {
        fontSize: 14,
        fontWeight: "normal",
        alignSelf: "flex-start",
        marginTop: 20,
        marginLeft: 20,
    },
});

export default DetailScreen;
