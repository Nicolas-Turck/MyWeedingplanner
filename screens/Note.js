import React from 'react'
import { View, Text, Button, TextInput, StyleSheet, ImageBackground, TouchableWithoutFeedback } from 'react-native'
import Inputname from '../note/Inputname';

const Note = ({ navigation }) => {
    return (
        <View style={styles.container}>
       <ImageBackground style={ styles.imgBackground } 
                    resizeMode='cover' 
                    source={require('/Users/eder/weedingPlanner1/assets/mariage-theme-champetre.jpeg')}>
           <View style={styles.container2}>  
           <TextInput
                style={styles.input}
                onEndEditing={text => conEndEditingHandler(text)}
                placeholder='Novelle Note'
           />
           <TouchableWithoutFeedback>
                  <View style={styles.homebutton}>
                  <Text style={styles.buttontext}
                  title="home"
                  onPress={() => navigation.navigate('Home')}
                  >Ajouter</Text>
                  </View>
        </TouchableWithoutFeedback>
        </View>
        </ImageBackground>        
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    imgBackground: {
        width: '100%',
        height: '100%',
        flex: 1 
    },
    container2: {
        
        marginTop: 10,
        alignItems:'center',
        justifyContent: 'center', 
      },
    input: {
        height: 100,
        width:300,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:20,
        borderColor:'pink',
        backgroundColor:'white',
      },
      homebutton: {
     
        borderWidth: 3, 
        height: 30,
        width:90,
        borderColor: "#ccac00",
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 10,
        backgroundColor: '#ccac00',
        
    },
    buttontext: {
        fontSize: 20,
        color:'white',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
});
export default Note
