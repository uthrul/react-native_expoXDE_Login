import React, { Component } from 'react';
import {  
    View, Text, TextInput, 
    TouchableOpacity, StyleSheet
} from 'react-native';

export default class Myform extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput 
            placeholder="username"
            style={styles.Input}
        />
        <TextInput 
            placeholder="password"
            style={styles.Input}
        />
        <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttontext}>Let's Go</Text>
        </TouchableOpacity>
        <View>
            <Text style={styles.buttontext}>
                instagram @noize_code Product
            </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    Input: {
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        paddingLeft: 20,
        marginBottom: 10,
    },
    buttonContainer:{
        backgroundColor: '#27ae69',
        paddingVertical: 16,
        marginBottom: 100,
    },
    buttontext:{
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold'
    }
  });
