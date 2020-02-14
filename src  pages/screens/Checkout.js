import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TextInput} from 'react-native';
import { Container, Button, Footer, FooterTab } from 'native-base';

export default class Checkout extends Component {
    render() {
        return (
            <>
            <Container>
            <View style={styles.root}>
            <View style={styles.header}>
                <View style={styles.wraplogo}>
                    <Image style={styles.logo} source={require('../../Images/Card.jpg')}/>
                </View>
            </View>
            <View style={styles.body}>
            <View style={{backgroundColor: '#F8F8F8', height: 60, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={styles.payment}>TOTAL PAYMENT</Text>
            </View>
            <View style={{backgroundColor: 'white', height: 60, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={styles.total}>Rp 62.000</Text>
            </View>
            </View>
            </View>
            <Footer >
            <FooterTab  style={{backgroundColor:'#F7F7F7'}}>
            <Button active onPress = { ()=>this.props.navigation.navigate('Meal')} style={{backgroundColor:'green', borderRadius: 15, padding: 10, margin: 10, marginBottom: 20,}}>
              <Text style={{color:'white'}}>PAY SECURE</Text>
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
  body: {
    flex: 1,
  },
    logo: {
      width: '100%',
      height: 300,
    },
    search: {
      borderWidth: 1,
      borderColor: '#fff',
      borderRadius: 4,
      height: 50,
      paddingLeft: 60,
      paddingRight: 14,
      backgroundColor: '#fff',
    },
    iconsearch: {
      height: 20,
      width: 20,
      position: 'absolute',
      top: 15,
      left: 20,
    },
    header: {
      backgroundColor: '#188168'
    },
    wrapsearch: {marginHorizontal: 30},
    payment: {
    textAlign: 'center',
    margin: 20,
    fontWeight: 'bold',
    fontSize: 18,
    },
    total: {
    textAlign: 'center',
    margin: 20,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#075E54'
    }
  });
