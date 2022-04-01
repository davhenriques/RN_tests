import React, {useReducer} from "react";
import {View, Text, Button, StyleSheet} from "react-native";
import ColorCounter from "../components/ColorCounter";
const AMOUNT_TO_CHANGE = 15;

const reducer = (state, action) => {
// state === {red: number, green: number, blue: number}
// action === {type: 'change_red' || 'change_green' , payload: number}

switch(action.type){
    case "change_red":
        return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload};
    case "change_green":
        return state.green + action.payload > 255 || state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload};
    case "change_blue":
        return state.blue + action.payload > 255 || state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload};
    default:
        return state;
    
}
}

const RedGreenBlue = () => {
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue:0 })
    const {red, green, blue} = state;
    console.log(state);
    return(
        <View>
            <Text>Color Counter</Text>
            <ColorCounter 
                color="Red"
                onIncrease={() => { dispatch({type:"change_red", payload: AMOUNT_TO_CHANGE}); }}
                onDecrease={() => { dispatch({type:"change_red", payload: -1*AMOUNT_TO_CHANGE}); }} 
            />
            <ColorCounter 
                color="Green"
                onIncrease={() => { dispatch({type:"change_green", payload: AMOUNT_TO_CHANGE}); }}
                onDecrease={() => { dispatch({type:"change_green", payload: -1*AMOUNT_TO_CHANGE}); }} 
            />
            <ColorCounter 
                color="Blue"
                onIncrease={() => { dispatch({type:"change_blue", payload: AMOUNT_TO_CHANGE}); }}
                onDecrease={() => { dispatch({type:"change_blue", payload: -1*AMOUNT_TO_CHANGE}); }} 
            />
            <View style={{backgroundColor: `rgb(${red}, ${green}, ${blue})`, width: 50, height: 50, marginTop: 20, marginLeft: 10}}></View>
        </View>

    );

};


export default RedGreenBlue;


























// import React, { useReducer } from "react";
// import {View, Text, StyleSheet} from "react-native";
// // import { set } from "react-native-reanimated";
// import ColorCounter from "../components/ColorCounter"

// const COLOR_INCREMENT = 100;

// const reducer = (state, action) => {
//     // state  === {red: number, green: number, blue: number}
//     // action === {colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15}
//     switch(action.colorToChange){
//         case 'red':
//             return state.red + action.amount> 255 || state.red + action.amount < 0 
//                 ? state 
//                 :  { ...state, red: state.red + action.amount};
//         case 'green':
//             return state.green + action.amount> 255 || state.green + action.amount < 0 
//                 ? state 
//                 :{ ...state, green: state.green + action.amount};
//         case 'blue':
//             return state.blue + action.amount> 255 || state.blue + action.amount < 0 
//                 ? state 
//                 : { ...state, blue: state.blue + action.amount}
//         default: 
//             return state;
//     }
// }
// RedGreenBlue = () =>{

//     const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
//     const {red, green, blue} = state;

//     console.log(state);
//     return(
//         <View>
//             <ColorCounter 
//                 onIncrease={() => dispatch( {colorToChange: 'red', amount: COLOR_INCREMENT})} 
//                 onDecrease={() => dispatch( {colorToChange: 'red', amount: -1*COLOR_INCREMENT})} 
//                 color="Red"
//             />
//             <ColorCounter 
//                 onIncrease={() => dispatch( {colorToChange: 'green', amount: COLOR_INCREMENT})} 
//                 onDecrease={() => dispatch( {colorToChange: 'green', amount: -1*COLOR_INCREMENT})} 
//                 color="Green"
//             />
//             <ColorCounter 
//                 onIncrease={() => dispatch( {colorToChange: 'blue', amount: COLOR_INCREMENT})} 
//                 onDecrease={() => dispatch( {colorToChange: 'blue', amount: -1*COLOR_INCREMENT})} 
//                 color="Blue"
//             />
//             <View style={{
//                 height: 20, 
//                 width: 20, 
//                 backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
//         </View>   
//     )
// }


// const styles = StyleSheet.create({

// });

// export default RedGreenBlue;

//     // this was before reducer
//     // const [red, setRed] = useState(100);
//     // const [green, setGreen] = useState(255);
//     // const [blue, setBlue] = useState(100);
    
//     // const setColor = ( color, value) => {
//     //     switch(color){
//     //         case "red":
//     //             red + value < 255 && red + value > 0 ? setRed(red + value) : null;
//     //             return;
//     //         case "green":
//     //             green + value < 255 && green + value > 0 ? setGreen(green + value) : null;
//     //             return;
//     //         case "blue":
//     //             blue + value < 255 && blue + value > 0 ? setBlue(blue + value) : null;
//     //             return;
//     //         default: return;
//     //     }
//     // }