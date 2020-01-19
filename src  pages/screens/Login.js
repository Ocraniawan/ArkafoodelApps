import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableHighlight} from 'react-native'
import { Container, Input, Form, Item, Label } from 'native-base'



const styles = StyleSheet.create({
  imageItem:{
    marginBottom: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    height: 100,
    width: 100,
    alignSelf: "center",
    marginBottom: 50,
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
  facebookButton:{
    backgroundColor: '#456CB0'
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
    marginBottom: 20,
    color: '#B5B5B5'
  },
  form:{
    marginBottom: 20,

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
    marginBottom: 10,
    color: '#B5B5B5',
  },
  inputBox:{
    paddingBottom: 10,
  }
})

export default class App extends Component {
  render() {
    return (
      <>
      <Container style={styles.root}>
      <View style={styles.header}>

      </View>

          <View style={styles.body}>
              <Image style={styles.imageItem} source={require('../../Images/icons.png')}/>

        <Form style={styles.form}>
            <Item regular style={styles.input}>
              <Input placeholder='Username' placeholderTextColor='#B5B5B5'/>
            </Item>
            <Item regular style={styles.input}>
              <Input placeholder='Password' placeholderTextColor='#B5B5B5'/>
            </Item>
          </Form>          
        
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress = { ()=>this.props.navigation.navigate('Home')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        <Text style={styles.or}>OR</Text>

        <TouchableHighlight style={[styles.buttonContainer, styles.facebookButton]}>
          <Text style={styles.loginText}>Facebook Login</Text>
        </TouchableHighlight>
          </View>

      </Container>
      </>
    )
  }
}
