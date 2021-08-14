import React, { useCallback, useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import DraggableFlatList, {
    RenderItemParams,
} from "react-native-draggable-flatlist";
import ListItem from "./components/ListItem";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import initialData from "../../assets/fake-data";

interface PropTypes {
    navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
}

const HomeScreen = ({ navigation }: PropTypes) => {
    const [data, setData] = useState(initialData);

    const onClick = useCallback((item: Item) => {
        return () => {
            navigation.navigate("Detail", { item });
        };
    }, []);

    const renderItem = useCallback(
        ({ item, index, drag, isActive }: RenderItemParams<Item>) => {
            return (
                <ListItem
                    item={item}
                    index={index}
                    drag={drag}
                    isActive={isActive}
                    onClick={onClick(item)}
                />
            );
        },
        []
    );

    return (
        <SafeAreaView style={styles.container}>
            <DraggableFlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                onDragEnd={({ data }) => setData(data)}
            ></DraggableFlatList>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f1f1f1",
        alignItems: "stretch",
        justifyContent: "center",
    },
});

export default HomeScreen;
