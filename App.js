import React, { Component } from 'react'
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import storage from './src  pages/redux/store'

import { Text, View, StyleSheet } from 'react-native'
import Router from './src  pages/config/Router'

const {store, persistor} = storage()

const styles = StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: '#fff',
    }
  })

export default class App extends Component {
    render() {
        return (
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <View style={styles.root}>
              <Router />
            </View>
          </PersistGate>
        </Provider>
        )
    }
}
