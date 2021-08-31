import React, { useState, useEffect } from "react";
//import Constants  from 'expo-constants';
import { View, Text,TextInput,Pressable,Alert,Formik, Button, ImageBackground, StyleSheet,Textarea,  TouchableWithoutFeedback } from 'react-native';
//import store from '../../store';
import AddGuest from '../Guests/addGuest';
//import * as SQLite from 'expo-sqlite';

//const db = SQLite.openDatabase('test.db');

const Guest = ({ navigation }) => {
    
    

    {/*const useForceUpdate = () => {
        const [state, setState] = 
    }
    useEffect(() => {
        store.subscribe(() => {
            setGuests(store.getState().guests);
        })
    }, [])

    const changeHandler = event => {
        
        setGuest(event.target.value);
        console.log('entry on change');
        console.log('-^^^^on change^^^^-');
    };

    const onSubmit = event => {
        //console.log('click OK');
        //console.log({guest});
        event.preventDefault();
        if (guest === null) {
            console.log('none guest save in state');
            console.log('-^^^^on submit^^^^-');
            return ;
        }
        
        console.log({guests});
        store.dispatch({
            type: 'ADD_GUEST',
            payload: guest
        })
        
        console.log('guest save in state');
        
        //setGuest('');
    }*/}
    return (
        <View style={styles.container}>
       {/*<ImageBackground style={ styles.imgBackground } resizeMode='cover' source={require('/Users/eder/weedingPlanner1/assets/mariage-theme-champetre.jpeg')}>*/}
       <View style={styles.container2}> 
       <AddGuest />
       {/*<TextInput style={styles.input} 
        placeholder='enter new guest ;)' 
        value={guest} 
        onChange={changeHandler} 
        />
        
        <TouchableWithoutFeedback>
                  <View style={styles.homebutton}>
                  <Text style={styles.buttontext}
                  title="home"
                  onPress={onSubmit}
                  //onPress={(onSubmit) => Alert.alert('Simple Button pressed')}
                  >Ajouter</Text>
                  </View>
         </TouchableWithoutFeedback>
        
        
       {guests.map(guest => {
           return <Text >{guest}</Text>
       })}*/}
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
            {/*</ImageBackground>   */}
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
        width:100,
        fontSize: 80,
        backgroundColor: 'red',
        color:'white',


    }
});
export default Guest
