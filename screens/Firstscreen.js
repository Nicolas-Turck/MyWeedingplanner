import React from 'react'
import { View, Text, Button, ImageBackground, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import Homebutton from '../firstscreen/Homebutton';
const Separator = () => (
    <View style={styles.separator} />
  );
const Firstscreen = ({ navigation }) => {
    return (
        <View style={styles.container}>{/* Container principal */}
            <ImageBackground style={ styles.imgBackground } 
                    resizeMode='cover' 
                    source={require('/Users/eder/weedingPlanner1/assets/mariage-theme-champetre.jpeg')}>
                <View style={styles.container2}>
                    {/* Titre du l'application */}
                <Text style={styles.titre}>MY WEDDING PLANNER</Text>
        
                <Separator />
        
                {/* slogan */}
                <Text style={styles.text}>Votre gestionnaire de mariage</Text>
        
                <Separator />
                <TouchableWithoutFeedback>
                  <View style={styles.homebutton}>
                  <Text style={styles.buttontext}
                  title="home"
                  onPress={() => navigation.navigate('Home')}
                  >home</Text></View>
                </TouchableWithoutFeedback>
                    {/*<Button style={styles.button}
                        title="Home"
                        onPress={() => navigation.navigate('Home')} />/}
                    {/* Start  <Homebutton /> bouton*/}
                {/*<<Homebutton />*/}
            
                </View>
                
            </ImageBackground>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      color: `#ff1493`,
      borderColor: "pink", borderWidth: 0
    },
  
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  
    container2: {
      flex:1,
      marginTop: 600,
      alignItems:'center',
      justifyContent: 'center', 
    },
  
    imgBackground: {
      width: '100%',
      height: '100%',
      flex: 1 
  },
  
    titre:{
      color:`#EE6A8C`,
      fontSize:25,
      alignItems:'center',
      fontWeight: "bold",
      },
  
    text:{
      fontSize:19,
      color:`#EE6A8C`,
      fontStyle:'italic', 
    },
    homebutton: {
      borderWidth: 3, 
      height: 30,
      width:60,
      borderColor: "#ccac00",
      marginTop: 10,
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
export default Firstscreen
