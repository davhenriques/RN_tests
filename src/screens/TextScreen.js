import React, {useState} from "react";
import {View, Text, Button, StyleSheet, TextInput} from "react-native";
// import { onChange } from "react-native-reanimated";


const TextScreen = () => {
    const [textInput, setTextInput] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    return(
        <View style={styles.screenView}>
            <Text>Enter your password here</Text>
            <Button 
                title="Show/Hide password"
                onPress={()=>setShowPassword(!showPassword)}
            />
            <TextInput 
                style={styles.TextInput}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Type your name here"
                secureTextEntry={showPassword}
                value={textInput}
                onChangeText={newText => setTextInput(newText) } 
            />
            {textInput.length<5?<Text>Your password must be at least 5 characters long</Text>: null}
        </View>

    );

};
const styles = StyleSheet.create({
    TextInput:{
        borderColor: "black",
        margin: 2,
        borderRadius: 20,
        borderWidth: 1,
        fontSize: 20,
        justifyContent: 'flex-start',
        padding: 6,
        marginTop: 4
    },
    screenView:{
        padding: 20
    }
});

export default TextScreen;
