import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, Text, View , Image,TouchableWithoutFeedback,  TextInput, ImageBackground, Button, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import store from '../../store';
//import Home from './Components/Screens/Home';
//import pannel from './Components/Screens/pannel';
//import Photo from './Components/Screens/Photo';
//import Guest from './Components/Screens/Guest';
//import Note from './Components/Screens/Note';
//import Firstscreen from './Components/Screens/Firstscreen';
//import screenpart from'./Components/Screens/screenpart';


const Stack = createStackNavigator();



export default function Guest() {

    const [guest, setGuest] = useState('');
    const [guests, setGuests] = useState([]);
    useEffect(() => {
        store.subscribe(() => {
            setGuests(store.getState().guests);
        })
    }, [])

    const changeHandler = event => {
        
        setGuest(event.target.value);
        console.log('ok change handler');
        console.log(event.target.value);
    };

    const onSubmit = event => {
        console.log('click OK');
        console.log(guest);
        event.preventDefault();
        if (guest) {
            return ;
        }
        
        store.dispatch({
            type: 'ADD_GUEST',
            payload: guest
        });
        setGuest('');
    }
    return (
        <View style={styles.container}>
       <ImageBackground style={ styles.imgBackground } resizeMode='cover' source={require('/Users/eder/weedingPlanner1/assets/mariage-theme-champetre.jpeg')}>
       <View style={styles.container2}>   
       <TextInput style={styles.input} 
        placeholder='enter new guest ;)' 
        value={guest} 
        onChange={changeHandler} 
        
        />
        
        <TouchableWithoutFeedback>
                  <View style={styles.homebutton}>
                  <Text style={styles.buttontext}
                  title="home"
                  onPress={onSubmit}
                  //onPress={() => Alert.alert('Simple Button pressed')}
                  >Ajouter</Text>
                  </View>
         </TouchableWithoutFeedback>
         {guests.map(guest => {
           return <Text style={styles.guestsave}>{guests}</Text>
       })}
       {/*<
       <Button
            onPress={onSubmit}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
        />
       Button title='add' onPress={onSubmit}></Button>*/}
       
       




       
       
    
       
       {/*<TextInput
                style={styles.input} value={guest} 
                onEndEditing={text => onEndEditingHandler(text)}
                placeholder='Nouveaux Invité'
       />
       <Button title="add" placeholder="Add" />*/}
      
         {/*<TouchableWithoutFeedback>
                  <View style={styles.homebutton}>
                  <Text style={styles.buttontext}
                  title="home"
                  onPress={() => navigation.navigate('Home')}
                  >Ajouter</Text>
                  </View>
         </TouchableWithoutFeedback>  */}
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
        height: 40,
        width:300,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor:'white',
        borderColor: 'pink',
        borderRadius: 20,
        
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
    guestsave:{
        marginTop: 400,
        fontSize: 80,
    }
});