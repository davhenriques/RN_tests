import React from "react";
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
    const Names = [
        {name: 'David Henriques', age: "23"}, 
        {name: 'Yngrid Henriques', age: "25"},
        {name: 'Alibaba cheira mal!', age: "35"},
        {name: 'Yngrid Henriques', age: "25"},
        {name: 'Alibaba cheira mal!', age: "35"},
        {name: 'Yngrid Henriques', age: "25"},
        {name: 'Alibaba cheira mal!', age: "35"}];
    return (
        <FlatList 
            data={Names}                
            keyExtractor={Names => Names.name}
            renderItem={({item}, index)=>{
                return <Text  style={styles.flatList} key={index}>{item.name} - Age {item.age}</Text>
            }} 
        />
    )
}

const styles = StyleSheet.create({
    flatList: {
        marginHorizontal: 7,
        marginVertical: 4,
        paddingHorizontal: 10,
        paddingVertical: 14,
        borderWidth: 1,
        borderRadius: 10
    }
});

export default ListScreen