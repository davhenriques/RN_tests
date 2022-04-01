import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Box Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        borderColor: "black",
    },
    textStyle: {
        borderWidth: 2,
        borderColor: "tomato",
        margin:20,
        padding: 2
    }
})

export default BoxScreen;