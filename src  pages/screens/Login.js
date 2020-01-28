import React, { Component } from 'react'
import {connect} from 'react-redux'
import {logIn} from '../redux/action/login'
import { Text, View, StyleSheet, Image, TouchableHighlight, ActivityIndicator, Alert} from 'react-native'
import { Container, Input, Form, Item, Label } from 'native-base'
import AsyncStorage from '@react-native-community/async-storage';



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
  },
  buttonText: {
    fontFamily: 'Nunito-Regular',
    color: '#fff',
    textTransform: 'uppercase'
},
})



class Login extends Component {
  constructor(props) {
  super(props)
  this.state = {
      username: '',
      password: '',
      isLoading: false,
      isSuccess: false,
      message: '',
  }
}

async handleSubmit() {
  const { username, password } = this.state
  const data = {
      username,
      password
  }
  await this.props.dispatch(logIn(data))
  if(this.props.login.isSuccess) this.props.navigation.navigate('Home')
  //   else if(props.login.isError) Toast.show({
  //     text: "Terdapat Error di database",
  //     buttonText: "Okay",
  //     duration: 2000
  //   })
}

// async componentDidUpdate(prevProps) {
//   if (prevProps.login.isLoading !== this.state.isLoading) {
//       if (prevProps.login.isLoading === true) {
//           this.setState({
//               isLoading: true
//           })
//           console.log('masih loading')
//       } else {
//           console.log('sudah fulfill')
//           if (this.props.login.isSuccess) {
//               console.log('berhasil login')
//               await this.setState({
//                   isLoading: false,
//                   isSuccess: true,
//                   message: "Login Success.",
//               })
//               await AsyncStorage.setItem('token', this.props.login.data.auth)
//               this.handleRedirect()
//           } else {
//               console.log('gagal login')
//               await this.setState({
//                   isLoading: false,
//                   isSuccess: false,
//                   message: "Login Failed. Try Again.",
//               })
//               this.handleRedirect()
//           }
//       }
//   }
// }

// async handleRedirect() {
//   if (this.state.isSuccess) {
//       Alert.alert('Login Message', this.state.message, [
//           { text: 'OK', onPress: () => this.props.navigation.navigate('Home') },
//       ])
//   } else {
//       Alert.alert('Login Message', this.state.message)
//   }
// }




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
              <Input placeholder='Username' placeholderTextColor='#B5B5B5'
              value={this.state.username} onChange={(e) => this.setState({ username: e.nativeEvent.text })}
              />
            </Item>
            <Item regular style={styles.input}>
              <Input placeholder='Password' placeholderTextColor='#B5B5B5' secureTextEntry={true}
              value={this.state.password} onChange={(e) => this.setState({ password: e.nativeEvent.text })}
              />
            </Item>
          </Form>          
        
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.handleSubmit()}>
        {/* {this.props.login.isLoading
          ? <ActivityIndicator size="small" color="#fff" />
        }          
        : */}
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

const mapStateToProps = state => {
  return {
    login: state.login
  }
}

export default connect(mapStateToProps)(Login)
