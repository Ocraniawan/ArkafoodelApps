import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableHighlight, TouchableOpacity, StatusBar} from 'react-native'
import { Container, Input, Form, Item, Label } from 'native-base'



const styles = StyleSheet.create({
  imageItem:{
    marginBottom: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    height: 50,
    width: 50,
    alignSelf: "center",
    marginBottom: 20,
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
    marginBottom:40,
    width:220,
    borderRadius:30,
    alignSelf: "center",
  },
  loginButton: {
    backgroundColor: "#719B3B",
  },
  loginText: {
    color: 'white',
  },
  registerButton:{
    backgroundColor: '#719B3B'
  },
  captions:{
    fontSize: 16,
    color :'#B5B5B5',
    marginBottom:30,
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: 20,
    marginRight: 20,
  },
  body:{
    alignSelf: "center",
  },
  or:{
    fontSize: 14,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 40,
    color: '#B5B5B5'
  },
  form:{
    marginBottom: 50,

  },
  input:{
    height:45,
    marginBottom:20,
    borderRadius:30,
    width: 300,  
    alignSelf: "center",

  },
  label:{
    fontSize: 14,
    paddingBottom: 5,
    marginTop: 100,
    color: '#B5B5B5',
  },
  inputBox:{
    
  },
  textHeader:{
    fontSize: 20,
    color: '#719B3B',
    fontWeight: 'bold',
    paddingLeft: 20,
    marginBottom: 50,
    alignSelf: "center",
  },
  textblue: {
    color: '#14A6DD',
    fontFamily: 'MuseoSansRounded700',
    fontSize: 12,
    paddingLeft: 10,
  },
  wrapdaftar: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
    flexDirection: 'row',
  },
  texttiny: {
    color: '#808B8D',
    fontFamily: 'MuseoSansRounded500',
    fontSize: 12,
  },
})

export default class App extends Component {
  render() {
    return (
      <>
    <StatusBar barStyle="light-content" backgroundColor="#075E54" />
      <Container style={styles.root}>
      <View style={styles.header}>

      </View>

      <Image style={styles.imageItem} source={require('../../Images/icons.png')}/>
          <View style={styles.body}>
      <Text style={styles.textHeader}>Create New Account</Text>

        <Form style={styles.form}>
        <Item regular style={styles.input}>
              <Input style={styles.inputBox} placeholder='Name' placeholderTextColor='#B5B5B5'/>
            </Item>
            <Item  regular style={styles.input}>
              <Input style={styles.inputBox} placeholder='Username' placeholderTextColor='#B5B5B5'/>
            </Item>
            <Item regular style={styles.input}>
              <Input placeholder='Password' placeholderTextColor='#B5B5B5'/>
            </Item>
          </Form>          

        <TouchableHighlight style={[styles.buttonContainer, styles.registerButton]} onPress = { ()=>this.props.navigation.navigate('Home')}>
          <Text style={styles.loginText}>Register</Text>
        </TouchableHighlight>
          </View>
          <View style={styles.wrapdaftar}>
            <Text style={styles.texttiny}>Already Sign In?</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={styles.textblue}>Login</Text>
            </TouchableOpacity>
          </View>

      </Container>
      </>
    )
  }
}
 