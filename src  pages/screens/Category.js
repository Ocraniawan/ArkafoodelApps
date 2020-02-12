import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ScrollView, ImageBackground, TouchableOpacity} from 'react-native'
import {Item, ListItem, Separator, Input, Card, Container, Footer, FooterTab,Icon, Button, CardItem, Left, Thumbnail, Body, Right, } from 'native-base'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import {connect} from 'react-redux'
import {getCategories} from '../redux/action/categories'
import {APP_URL} from '../resources/config'
import Headers from '../component/header'


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
              <View style={{backgroundColor: '#F8F8F8'}}>
              <ListItem noBorder >
                    <Left>
                      <Text style={{fontWeight:'bold', color: '#494949', fontSize:18, fontWeight:'bold'}}>Categories</Text>
                    </Left>
              </ListItem>
              </View>
              <View style={styles.categories} >
              <ScrollView vertical>
              <View>
              <View style={styles.row}>
                {!this.state.isLoading && this.props.categories.data.map((v, i) =>{
                    return(
                      <View key= {v.id_categories} style={styles.cardItem}>
                      <ListItem noBorder>
                        <Left>
                        <Image style={styles.imageDetail} source={{uri: APP_URL.concat(`src/images/${v.image}`)}}/>
                        </Left>
                        <Body>
                        <Text style={styles.foodName}>{v.categories_name}</Text>
                        <Text style={styles.detail}>Lorem ipsum dolor sit amet</Text>
                        <TouchableOpacity onPress= { ()=>this.props.navigation.navigate('CategoriesId',(v.id_categories))} style={styles.ButtonDetail}>
                              <Icons name='eye' style={{color:'white', fontWeight:'bold', fontSize:20,}} />
                              <Text style={{fontSize: 16, marginLeft: 10, fontWeight:'bold', color: 'white' }}>VIEW</Text> 
                          </TouchableOpacity>
                        </Body>
                      </ListItem>
                      </View>
                    )
                })}
                </View>
                </View>
            </ScrollView> 
                </View>
                </View>
              </Container>
      </>
        )
    }
}

const styles = StyleSheet.create({
  root:{
    flex : 1,
    backgroundColor: '#F1F1F1'
  },
  categories:{
      marginLeft: 10,
      marginRight: 10,
    },
  cardItem:{
    flex:1,
    marginLeft: 15,
    marginRight:15,
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 15,
    elevation: 2,
    height: 150,
    backgroundColor: '#F8F8F8'
  },
  imageDetail:{
    height: 148,
    width: 150,
    marginTop:-15,
    marginLeft:-16,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  foodName:{
    fontWeight: "bold",
    fontSize: 18,
    alignSelf: "center",
    marginTop: -20,
    paddingTop: 15,
    paddingRight: 10,
  },
  ButtonDetail: {
    height:35,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:10,
    marginTop: 20,
    width:150,
    marginRight: 10,
    borderRadius:30,
    backgroundColor: "#719B3B",
    flexDirection: 'row',
},
detail:{
  fontSize: 14,
  alignSelf: "auto",
  marginTop: 10,
},
})



const mapStateToProps = state =>{
    return{
        categories: state.categories
    }
}

export default connect(mapStateToProps)(Category)
