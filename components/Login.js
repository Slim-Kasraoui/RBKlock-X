import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
const image = '../assets/campus.jpg'
export default class Login extends React.Component {
    state = {
        username: '',
        password: ''
      }

    
      render() {
        return (

          <View style={styles.container}>
            <Text style={styles.logo}>RBKlock-X</Text>
            <TextInput
              placeholder="Username"
              onChangeText={(text) => this.setState({ username: text })}
              style={styles.input}
            />
            <TextInput
              placeholder="Password"
              onChangeText={(text) => this.setState({ password: text })}
              style={styles.input}
            />
            <TouchableOpacity onPress={()=>{this.props.logIn()}} style={styles.btnContainer}>
              <Text style={styles.btn}>Clock-in</Text>
            </TouchableOpacity>
          </View>
        )
      }
}

const styles = StyleSheet.create({
 
    input: {
      height: 45,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 20,
      marginBottom: 20,
      marginHorizontal: 35,
      textAlign: 'center',
      color: "#841584",
    },
    logo: {
      fontSize: 40,
      fontWeight: "bold",
      color: "#841584",
      textAlign: 'center',
      marginBottom: 50
    },
    btnContainer: {
      
      backgroundColor: "#841584",
      borderRadius: 20,
      paddingVertical: 12,
      marginHorizontal: 35,
      marginTop: 25
    },
    btn: {
      fontSize: 20,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center"
    }
  });
  