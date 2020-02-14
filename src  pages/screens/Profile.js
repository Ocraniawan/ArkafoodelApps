import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

export default class Profile extends Component {

  render() {
    return (
      <>
      <StatusBar barStyle="light-content" backgroundColor="#075E54" />
      <View style={styles.container}>
          <View style={styles.header}>
        <LinearGradient colors={['#188168', '#95CE67']} style={styles.home}>
        </LinearGradient>
          </View>
          <Image style={styles.avatar} source={require('../../Images/Profil.png')}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Ocraniawan Patattan</Text>
              <Text style={styles.info}>ocraniawan@arkademian</Text>
              <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>
              
              <TouchableOpacity style={styles.buttonContainer}>
                <Feather name="settings" size={25} color="white" />
                <Text style={{ fontFamily: 'Nunito-Regular', fontSize: 18, marginLeft: 10, color: 'white' }}>Settings</Text>  
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer2}>
                <Feather name="log-out" size={25} color="white" />
                <Text style={{ fontFamily: 'Nunito-Regular', fontSize: 18, marginLeft: 10, color: 'white' }}>Log Out</Text> 
              </TouchableOpacity>
            </View>
        </View>
      </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#7EC544",
    height:200,
  },
  home: {
    alignItems: 'center',
    justifyContent: 'center',
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#188168",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:15,
    textAlign: 'center',
    marginBottom:30,
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10,
    width:250,
    borderRadius:30,
    backgroundColor: "#7EC544",
  },
  buttonContainer2: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#F95A37",
  },
});