import React from 'react'
import { View, Text,ImageBackground,  Button, StyleSheet, TouchableWithoutFeedback, Platform } from 'react-native'
//import Background from '../generale/background';
const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground style={ styles.imgBackground } 
                    resizeMode='cover' 
                    source={require('/Users/eder/Desktop/MyWeddingPlanner-crna/MyWeedingPlanner/assets/images/mariage-theme-champetre.jpeg')}>
            <TouchableWithoutFeedback>
            <Text style={styles.homebutton}
            title="Pannel"
            onPress={() => navigation.navigate('pannel')}
            >Panel</Text>
            </TouchableWithoutFeedback>
            
            <TouchableWithoutFeedback>
            <Text style={styles.homebutton}
            title="Note"
            onPress={() => navigation.navigate('Note')}
            >Note</Text>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
            <Text style={styles.homebutton}
            title="Guest"
            onPress={() => navigation.navigate('Guest')}
            >Guest</Text>
            </TouchableWithoutFeedback>

            

            <TouchableWithoutFeedback>
            <Text style={styles.homebutton}
            title="Photo"
            onPress={() => navigation.navigate('Photo')}
            >Photo</Text>
            </TouchableWithoutFeedback>

            </ImageBackground>    
        </View>
        
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        
        
      
      
    },
    imgBackground: {
        width: '100%',
        height: '100%',
        flex: 1 
    },
    homebutton:{
        
        flex: 1,
        margin: 20,
        backgroundColor: 'pink',
        margin: 10,
        color:'white',
        textAlign: 'center',
        fontSize: 50,
        paddingTop: 70,
         
    },

    
    
    
});
export default Home
