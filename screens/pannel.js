import React from 'react'
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native'

const pannel = ({ navigation }) => {
    return (
        <View style={styles.container}>
          <ImageBackground style={ styles.imgBackground } 
                    resizeMode='cover' 
                    source={require('/Users/eder/weedingPlanner1/assets/mariage-theme-champetre.jpeg')}>
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
   
    input: {
        height: 200,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
});
export default pannel
