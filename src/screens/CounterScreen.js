import React, {useReducer} from "react";
import {View, Text, Button , StyleSheet} from 'react-native'

const reducer= ( state, action ) => {
// state === {counter: 0}
// action ==== { type: "change_counter", paylaod: number}
    return {...state, counter: state.counter + action.payload};
}

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, {counter: 0});
    const {counter} = state;
    console.log(state);
    return (
        <View>
            <View style={styles.buttonStyle}>
                <Button
                    styles={styles.buttonStyle}
                    onPress={()=> {dispatch({type: "change_counter", payload: 1})}}
                    title='Increase'
                />
            </View>
            <View style={styles.buttonStyle}>
                <Button
                    styles={styles.buttonStyle}
                    onPress={()=> dispatch({type: "change_counter", payload: -1})}
                    title='Decrease'
                    marginVertical="5"
                />
            </View>
            <Text>Value: {counter}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonStyle:{
        marginVertical: 5
    }
});

export default CounterScreen