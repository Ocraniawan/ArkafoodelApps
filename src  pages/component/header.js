import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import{Header, Item, Input} from 'native-base'
import Icons from 'react-native-vector-icons/FontAwesome'
import Sicons from 'react-native-vector-icons/SimpleLineIcons'


const styles = StyleSheet.create({
header:{
    backgroundColor: 'white'
  },
  search:{
    backgroundColor: 'white',
    justifyContent: "space-between",
    marginRight : 20,
    marginLeft: 20,
    
  },
  icon:{
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 20,
    color: '#9D9EA3',
  },
  sIcon:{
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 20,
    color: '#9D9EA3',
  },
  textHeader:{
    color: '#719B3B',
    fontFamily: 'Narrow',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 18,
  },
  searchBar:{
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
    height: 40,
    backgroundColor: '#F7F7F7',
    marginBottom: 10,
},
  inputBar:{
    fontSize: 14,
},
icon:{
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 20,
    color: '#9D9EA3',
},

})

export default class Headers extends Component {
    render() {
        return (
            <View style={styles.header}>
            <Header searchBar rounded style={styles.header}>
            <Item style={styles.search}>
              {/* <Icons name="navicon" style={styles.icon} /> */}
              <Item regular style={styles.searchBar}>
                    <Icons name="search" style={styles.icon} />
                    <Input style={styles.inputBar} placeholder="Let's Find some Food..." placeholderTextColor='#333333' />
              </Item>
              <Text style={styles.textHeader}>A R K A F O O D E L</Text>
            </Item>
          </Header>
            </View>
        )
    }
}
