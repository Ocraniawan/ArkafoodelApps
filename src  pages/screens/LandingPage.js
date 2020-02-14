import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableHighlight, StatusBar} from 'react-native'
import { Container } from 'native-base'



const styles = StyleSheet.create({
  imageItem:{
    marginBottom: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    height: 200,
    width: 200,
    alignSelf: "center",
    marginBottom: 30,
  },
  root:{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F9F9F9'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    alignSelf: "center",
    backgroundColor: 'white'
  },
  loginButton: {
    backgroundColor: "#719B3B",
  },
  loginText: {
    color: 'white',
  },
  captions:{
    fontSize: 16,
    color :'#A8A8A8',
    marginBottom:30,
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: 20,
    marginRight: 20,
  },
  body:{
    alignSelf: "center",
    // marginBottom: 20,
  }
})

export default class App extends Component {
  render() {
    return (
      <>
      <StatusBar barStyle="light-content" backgroundColor="#075E54" />
      <Container style={styles.root}>
      <View>
          <View style={styles.body}>
              <Image style={styles.imageItem} source={require('../../Images/icons.png')}/>
              {/* <Text style= {styles.captions}>Your Favourite Food delivery Partner</Text> */}
              <Text style= {styles.captions}>Check Out our menus, order food and enjoy your day</Text>              
          <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress = { ()=>this.props.navigation.navigate('Login')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress = { ()=>this.props.navigation.navigate('Register')}>
            <Text>Register</Text>
        </TouchableHighlight>
          </View>
      </View>
      </Container>
      </>
    )
  }
}
