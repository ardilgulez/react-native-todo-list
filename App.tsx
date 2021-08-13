import React, { useCallback, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import DraggableFlatList, {
    RenderItemParams,
} from "react-native-draggable-flatlist";
import ListItem from "./components/ListItem";

import initialData from "./assets/fake-data";

export default function App() {
    const [data, setData] = useState(initialData);

    const renderItem = useCallback(
        ({ item, index, drag, isActive }: RenderItemParams<Item>) => {
            return (
                <ListItem
                    item={item}
                    index={index}
                    drag={drag}
                    isActive={isActive}
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
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f1f1f1",
        alignItems: "stretch",
        justifyContent: "center",
    },
});
