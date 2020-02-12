import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TextInput} from 'react-native';

export default class Checkout extends Component {
    render() {
        return (
            <>
            <View style={styles.header}>
                <View style={styles.wraplogo}>
                    <Image style={styles.logo} source={require('../../Images/Card.jpg')}/>
                </View>
            </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    logo: {
      width: '100%',
      height: 300,
    },
    // wraplogo: {marginLeft: 30, marginTop: 10, marginBottom: 15, flexDirection:"row"},
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
  });
