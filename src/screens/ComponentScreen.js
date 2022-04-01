import React from "react";
import {Text, StyleSheet, View} from 'react-native';


const ComponentScreen = () => {
    const Name="David";
    const textVar = <Text style={styles.textSize}>My name is {Name}</Text>;
    return(  
        <View>
            <Text style={styles.titleSize}>Getting started with react native</Text>
            {textVar}
        </View>
    );
};

const styles = StyleSheet.create({
    titleSize: {
        fontSize: 30,
        color: "black"
    },
    textSize:{
        fontSize: 20
    }
});

export default ComponentScreen; 