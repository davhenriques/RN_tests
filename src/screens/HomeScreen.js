import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';

const HomeScreen = ({ navigation }) => {
  return(  
    <View>
      <Text style={styles.text}>dsa</Text>
      <Button 
        onPress={()=> navigation.navigate("CompSc")}
        style={styles.buttonComponents} title='Go to Components' 
      />
     <Button 
        onPress={()=> navigation.navigate("List")}
        style={styles.buttonComponents} title='Go to List Demo' 
      />
     <Button 
        onPress={()=> navigation.navigate("ImageScreen")}
        style={styles.buttonComponents} title='Go to Image Screen' 
      />
     <Button 
        onPress={()=> navigation.navigate("CounterScreen")}
        style={styles.buttonComponents} title='Go to Counter Screen' 
      />
     <Button 
        onPress={()=> navigation.navigate("ColorScreen")}
        style={styles.buttonComponents} title='Go to Color Screen' 
      />
     <Button 
        onPress={()=> navigation.navigate("RedGreenBlue")}
        style={styles.buttonComponents} title='Go to triple Color Screen' 
      />
     <Button 
        onPress={()=> navigation.navigate("TextScreen")}
        style={styles.buttonComponents} title='Text Input demo' 
      />
     <Button 
        onPress={()=> navigation.navigate("BoxScreen")}
        style={styles.buttonComponents} title='Box Screen (styles)' 
      />
     <Button 
        onPress={()=> navigation.navigate("FlexScreen")}
        style={styles.buttonComponents} title='Flex Screen (styles)' 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  buttonComponents:{
    marginHorizontal: 30
  }
});

export default HomeScreen;
