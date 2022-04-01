import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const FlexScreen = () => {
    return (
        <View style={styles.viewParentStyle}>
            <View style={[styles.viewStyles, styles.view1]}></View>
            <View style={[styles.viewStyles, styles.view2]}></View>
            <View style={[styles.viewStyles, styles.view3]}></View>
        </View>
    );
}

const styles = StyleSheet.create({

    viewParentStyle: {
        textAlign: "center",
        padding: 2,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        height: 120
    },
    viewStyles:{
        width: 80,
        height: 80
    },
    view1:{
        backgroundColor: "tomato"
    },
    view2:{
        backgroundColor: "lightblue",
        alignSelf: "flex-end"
    },
    view3:{
        backgroundColor: "lightgreen"
    },
})

export default FlexScreen;