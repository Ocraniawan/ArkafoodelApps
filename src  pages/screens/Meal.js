import React, { Component } from 'react'
import {Text, View, StyleSheet, Image, TextInput} from 'react-native';
import { Container, Button, Footer, FooterTab } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

export default class Meal extends Component {
    render() {
        return (
            <>
            <Container>
            <View style={styles.root}>
            <View style={styles.body}>
            {/* <LinearGradient colors={['green', '#6ABD0D']} style={styles.gradients}> */}
            <View style={{height: 60, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={styles.payment}>HAPPY MEAL</Text>
            </View>
            {/* </LinearGradient> */}
            </View>
            <View style={styles.header}>
                <View style={styles.wraplogo}>
                    <Image style={styles.logo} source={require('../../Images/eat.png')}/>
                </View>
            </View>
            </View>
            <Footer >
            <FooterTab  style={{backgroundColor:'#F7F7F7'}}>
            <Button active onPress = { ()=>this.props.navigation.navigate('#')} style={{backgroundColor:'green', borderRadius: 15, padding: 10, margin: 10, marginBottom: 20,}}>
              <Text style={{color:'white', fontWeight: 'bold'}}>RATE OUR MENU</Text>
            </Button>
          </FooterTab>
        </Footer>
            </Container>
            </>
        )
    }
}

const styles = StyleSheet.create({
    root: {
      flex: 1,
    },
    payment: {
        fontSize: 20,
        fontWeight: 'bold',
        // color: 'white'
    },
      logo: {
        width: '100%',
        height: 300,
        // flex: 1,
      },
      gradients: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
      },
      header: {
        flex: 1,
        backgroundColor: '#F7F8F3',
        justifyContent: 'center',
      },
    });
