import React, { Component } from 'react';
import { StyleSheet, View , TextInput , TouchableOpacity , Text , StatusBar } from 'react-native';

// import Expo from 'expo';
import { StackNavigator } from 'react-navigation';

class Mobile extends Component {
   static navigationOptions = {
       title: 'Mobile'
   };
   render(){
       const { navigate } = this.props.navigation;
       return(
           <View style={styles.container}>
               {/* <statusbar
               barStyle="Light-content"
               /> */}
               <TextInput
               style={styles.input}
               placeholder="Mobile No"
               maxLength={10}
               placeholderTextColor="rgba(255,255,255,0.7)"
               returnKeyType="next"
            //    onSubmitEditing={()=> this.passwordInput.focus()}
               onSubmitEditing={()=> navigate('Password')}
               keyboardType="numeric"
               autoCapitalize="none"
               autoCorrect={false}
                />
                {/* <TextInput
               style={styles.input}
               placeholder="OTP"
               placeholderTextColor="rgba(255,255,255,0.7)"
               returnKeyType="go"
               // secureTextEntry
               autoCapitalize="none"
               autoCorrect={false}
               ref={(input) => this.passwordInput = input}
                /> */}
                <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}
                onPress = { ()=> navigate('Password')}>OK
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
   buttonContainer: {
       backgroundColor: '#2980b9',
       paddingVertical: 15
   },
   buttonText:{
       textAlign: 'center',
       color: '#ffffff',
       fontWeight: '700'
   }
})

export default Mobile;

