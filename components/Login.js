import React, { Component } from 'react';
import {  
    View, Text, StyleSheet, 
    Image, Dimensions, KeyboardAvoidingView,

} from 'react-native';
import Myform from './MyForm';

export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
            <Image 
                style={styles.logo}
                source={require('./images/logo.png')}
            />
            <Text style={styles.title}>Noize Code app Login</Text>
        </View>
        <View style={styles.myForm}>
                <Myform/>
            </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3D8EB9',
        width: Dimensions.get('window').width,

    },
    logoContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#fff'
    },
    logo: {
        width: 250,
        height: 70,
    },
    myForm:{
        flex:1,
    }
  });
