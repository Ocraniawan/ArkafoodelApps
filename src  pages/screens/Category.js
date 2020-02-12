import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ScrollView, ImageBackground} from 'react-native'
import {Item, ListItem, Separator, Input, Card, Container, Footer, FooterTab,Icon, Button, CardItem, Left, Thumbnail, Body, Right, } from 'native-base'
import Icons from 'react-native-vector-icons/FontAwesome'
import { TouchableOpacity } from 'react-native-gesture-handler'

import {connect} from 'react-redux'
import {getCategories} from '../redux/action/categories'
import {APP_URL} from '../resources/config'

import Headers from '../component/header'
const styles = StyleSheet.create({
  root:{
    flex : 1,
    backgroundColor: '#F1F1F1'

  },

  image:{
    height: 150,
    width: 150,
    marginLeft: -5,
    borderTopLeftRadius: 15,
    // borderBottomLeftRadius: 15,
  },
  foodName:{
    fontWeight: "bold",
    fontSize: 16,
    alignSelf: "center",
    // marginTop: -10,
    marginBottom: 30,
    paddingRight: 10,
  },
  price:{
    color: 'gray',
    fontWeight: "bold",
    fontSize: 14,
    marginLeft: 10,
    marginTop: 5,
  },
  itemText:{
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomColor: 'transparent',

  },
  input:{
    color: 'white',
    borderColor: '#9D9EA3'
  },

  body:{
    flex: 1,
    // flexDirection: 'col',
  },
  row : {
    flex : 1,
    // flexDirection: 'row',
  },
  cardItem:{
    flex:1,
    marginLeft: 15,
    // marginRight:15,
    marginTop: 10,
    marginBottom: 5,
    // paddingLeft: 15,
    // backgroundColor: 'gray',
    borderRadius: 5,
    elevation: 1,
    height: 150,
  },
  textBody:{
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#696969'
  },
  textPrice:{
    fontSize: 12,
    // textAlign: 'center',
    fontWeight: 'bold',
    color: 'orange',

  },
  textRating:{
    fontSize: 12,
    // textAlign: 'center',
  },
  imageItem:{
    // marginLeft: 10,
    // marginRight: 5,
    marginBottom: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    height: 140,
    width: 150,
    // borderRadius: 100,
    // textAlignVertical: 'center',
  },
  iIcons:{
    fontSize: 20,
    // paddingBottom: -10,
    textAlign: 'right',
    marginRight: 5,
    marginTop: 5,
    color: '#9D9EA3',
  },

  searchBar:{
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    // borderColor: '#9D9EA3',
    borderRadius: 2,
    height: 50,
    backgroundColor: '#F7F7F7',
    marginBottom: 10,
  },
  icon:{
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 20,
    color: '#9D9EA3',
},
  inputBar:{
    fontSize: 14,
    // textAlign: "center",
    },
    card:{
      // height: 10,
    },
    restaurant:{
      paddingLeft: 10,
      paddingRight: 10,
    },
    cardRestaurant:{
      height: 250,
      width: 300,
    },
    Separator:{
      height: 10,
    },
    divider:{
      // borderTopColor: 'black'
      marginTop: 20,
      // height: 20,
    },
    categories:{
      marginLeft: 10,
      marginRight: 10,
      // justifyContent: "center",
    },
    cardCategories:{
    //   flex: 1,
      // // paddingLeft: 10,
      marginLeft: 10,
      // // marginTop: 10,
      // // marginRight: 10,
      marginBottom: 10,
      // borderRadius: 5,
      // elevation: 1,
      justifyContent: 'center',
    //   height: 100,
    //   width: 150,
    

    },
    imageCategories:{
      marginTop: 5,
      marginLeft: 5,
      // marginRight: 5,
      marginBottom: 2,
      width: 65,
      height: 65,
      borderRadius: 100,
      // alignContent: 'space-between'
    },
    separator:{
      marginTop: 10,
      height: 3,
      fontSize: 3,
    },
    restaurantName:{
      fontWeight: "bold",
        color: '#494949',
    },
    addCart: {
      height:35,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom:10,
      marginTop: 10,
      width:150,
      marginRight: 10,
      borderRadius:30,
      backgroundColor: "#719B3B",
  },
  counter:{
      paddingTop: 10,
    },

})


class Category extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
        }
    }

async componentDidMount() {
    await this.props.dispatch(getCategories())
    await this.setState({isLoading:false})
}

    render() {
        return (
            <>
            <Container>
              <View style={styles.root}>
                <Headers />
              {/* </Header> */}
              
      
            {/* Carosel */}
      
      
      
              <ScrollView vertical>
              <View style={styles.categories} >
              <ListItem noBorder>
                    <Left>
                      <Text style={{fontWeight:'bold', color: '#494949'}}>Categories</Text>
                    </Left>
              </ListItem>
              
              {/* <ScrollView horizontal> */}
              <View style={styles.row}>
                {!this.state.isLoading && this.props.categories.data.map((v, i) =>{
                    return(
                        <View key= {v.id_categories} style={styles.cardItem}>
                        <Item noBorder>
                            <Left>
                            <TouchableOpacity onPress = { ()=>this.props.navigation.navigate('#')}>
                                <Image style={styles.image} source={{uri: APP_URL.concat(`src/images/${v.image}`)}}/>
                            </TouchableOpacity>
                            </Left>
                            <Body>
                                <Text style={styles.foodName}>{v.categories_name}</Text>
                                <View style={styles.counter}>
                                <TouchableOpacity onPress = { ()=>this.props.navigation.navigate('#')} style={styles.addCart}>
                                    <Icons name='list' style={{color:'white', fontWeight:'bold', fontSize:18,}} />
                                </TouchableOpacity>
                                </View>
                            </Body>
                        </Item>
                    </View>

                    )


                })}

                
                </View> 
                </View>
              {/* </ScrollView> */}
              </ScrollView>
                </View>
              </Container>
      </>
        )
    }
}

const mapStateToProps = state =>{
    return{
        categories: state.categories
    }
}

export default connect(mapStateToProps)(Category)
