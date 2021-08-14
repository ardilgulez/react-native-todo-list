import React from "react";
import { View, Text } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import RootStackParamList from "../../types/root-stack-param-list";

interface PropTypes {
    navigation: NativeStackNavigationProp<RootStackParamList, "Detail">;
    route: RouteProp<RootStackParamList, "Detail">;
}

const DetailScreen = ({ navigation, route }: PropTypes) => {
    return (
        <View>
            <Text>{route.params.item.name}</Text>
        </View>
    );
};

export default DetailScreen;
