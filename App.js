import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Router from './src  pages/config/Router'

const styles = StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: '#fff',
    }
  })

export default class App extends Component {
    render() {
        return (
        <View style={styles.root}>
            <Router />
        </View>
        )
    }
}
