import React, { Component } from 'react';
import { StyleSheet, View , TextInput , TouchableOpacity , Text , StatusBar } from 'react-native';

// import Expo from 'expo';
import { StackNavigator } from 'react-navigation';

class Profile extends Component {
   static navigationOptions = {
       title: 'Profile'
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
               placeholder="Mobile Number"
               maxLength={10}
               placeholderTextColor="rgb(38, 38, 38)"
               returnKeyType="next"
               onSubmitEditing={()=> this.NameInput.focus()}
               keyboardType="numeric"
               autoCapitalize="none"
               autoCorrect={false}
               />
                <TextInput
               style={styles.input}
               placeholder="Name"
               placeholderTextColor="rgb(38, 38, 38)"
               returnKeyType="next"
               keyboardType="default"
               autoCapitalize="words"
               autoCorrect={false}
               ref={(input) => this.NameInput = input}
               onSubmitEditing={() => this.mailInput.focus()}
                />
                <TextInput
               style={styles.input}
               placeholder="E-mail Id"
               placeholderTextColor="rgb(38, 38, 38)"
               returnKeyType="next"
               autoCapitalize="none"
               autoCorrect={false}
               ref={(input) => this.mailInput = input}
               onSubmitEditing={() => this.passwordInput.focus()}
                />
                <TextInput
               style={styles.input}
               placeholder="Password"
               placeholderTextColor="rgb(38, 38, 38)"
               returnKeyType="go"
               secureTextEntry
               autoCapitalize="none"
               autoCorrect={false}
               ref={(input) => this.passwordInput = input}
                />
                <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}
                onPress = { ()=> navigate('Map')}>OK
                </Text>
                </TouchableOpacity>
           </View>

       );
   }
}

const styles = StyleSheet.create({
   container:{
       padding: 20,
       alignItems:'center'
   },
   input: {
       height: 40,
       width:250,
       backgroundColor:'rgba(255,255,255,0.2)',
       marginBottom: 10,
       color: 'black',
       paddingHorizontal:10,
   },
   buttonContainer: {
       backgroundColor: '#2980b9',
       padding:10,
       paddingHorizontal:100
   },
   buttonText:{
       textAlign: 'center',
       color: '#ffffff',
       fontWeight: '700'
   }
})

export default Profile;


