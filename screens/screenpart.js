
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'

const screenpart = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback>
            <Text style={styles.homebutton}
            title="Pannel"
            onPress={() => navigation.navigate('pannel')}
            >Panel</Text>
            </TouchableWithoutFeedback>
            
            <TouchableWithoutFeedback>
            <Text style={styles.homebutton}
            title="Photo"
            onPress={() => navigation.navigate('Photo')}
            >Photo</Text>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
            <Text style={styles.homebutton}
            title="Guest"
            onPress={() => navigation.navigate('Guest')}
            >Guest</Text>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
            <Text style={styles.homebutton}
            title="Note"
            onPress={() => navigation.navigate('Note')}
            >Note</Text>
            </TouchableWithoutFeedback>

           

            {/*<Text style={styles.block1} 
            title="Pannel"
            onPress={() => navigation.navigate('pannel')}
            >Panel
            </Text>
            <Text style={styles.block1} title="Photo"
            onPress={() => navigation.navigate('Photo')}
            >Photo
            </Text>

            <Text style={styles.block1} 
            title="Guest"
            onPress={() => navigation.navigate('Guest')}
            >Guest
            </Text>

            <Text style={styles.block1}
            title="Note"
            onPress={() => navigation.navigate('Note')}
            >Note
            
            
    </Text>*/}
        </View>
        
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop:20,
      
      
    },
    homebutton:{
        
        flex: 1,
        margin: 20,
        backgroundColor: 'pink',
        margin: 10,
        color:'white',
        textAlign: 'center',
        fontSize: 20,
        paddingTop: 70,
       
       
        
    },

    buttontext: {
        flex:1,
        fontSize: 20,
        
        color:'white',
        
    },
    
    
});
export default screenpart
