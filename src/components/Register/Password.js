import React, { Component } from 'react';
import { StyleSheet, View , TextInput , TouchableOpacity , Text , StatusBar } from 'react-native';

// import Expo from 'expo';
import { createStackNavigator } from 'react-navigation';

class Password extends Component {
   static navigationOptions = {
       title: 'Password'
   };
   render(){
       const { navigate } = this.props.navigation;
       return(
           <View style={styles.container}>
               {/* <statusbar
               barStyle="Light-content"
               /> */}
               {/* <TextInput
               style={styles.input}
               placeholder="Mobile No"
               placeholderTextColor="rgba(255,255,255,0.7)"
               returnKeyType="next"
               onSubmitEditing={()=> this.passwordInput.focus()}
               keyboardType="numeric"
               autoCapitalize="none"
               autoCorrect={false}
                /> */}
                <TextInput
               style={styles.input}
               placeholder="OTP"
               placeholderTextColor="rgba(255,255,255,0.7)"
               returnKeyType="next"
               returnKeyType="go"
               keyboardType="numeric"
               onSubmitEditing={()=> navigate('Map')}
               // secureTextEntry
               autoCapitalize="none"
               autoCorrect={false}
               ref={(input) => this.passwordInput = input}
                />
                <TouchableOpacity style={styles.buttonContainerone}>
                <Text style={styles.buttonText}
                onPress = { ()=> navigate('Map')}>OK
                </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainertwo}>
                <Text style={styles.buttonText}
                onPress = { ()=> navigate('Profile')}>Create Profile
                </Text>
                </TouchableOpacity>
               
           </View>

       );
   }
}

const styles = StyleSheet.create({
   container:{
       padding: 20
   },
   input: {
       height: 40,
       width:250,
       backgroundColor:'rgba(255,255,255,0.2)',
       marginBottom: 10,
       color: 'black',
       paddingHorizontal:10
   },
   buttonContainerone: {
       backgroundColor: '#2980b9',
       paddingVertical: 15,
   },
   buttonContainertwo: {
       backgroundColor: '#2980b9',
       paddingVertical: 15,
       marginTop:10
   },
   buttonText:{
       textAlign: 'center',
       color: '#ffffff',
       fontWeight: '700',
   }
})

export default Password;

