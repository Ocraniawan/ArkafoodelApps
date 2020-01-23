import React, { Component } from 'react'

import { Text, View, StyleSheet, Image, ScrollView, Touchable, TouchableOpacity} from 'react-native'
import {Header,Item, ListItem, Separator, Input, Card, Container, Footer, FooterTab,Icon, Button, CardItem, Left, Thumbnail, Body, Right, } from 'native-base'
import Icons from 'react-native-vector-icons/FontAwesome'
import Ratings from 'react-native-star-rating'

import {connect} from 'react-redux'
import {getDetailItem} from '../redux/action/menu'
import {APP_URL} from '../resources/config'
import {getCommentById } from '../redux/action/review'

const styles = StyleSheet.create({
  root:{
    flex : 1,

  },
  header:{
    backgroundColor: 'white'
  },
  icon:{
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 20,
    color: '#9D9EA3',

  },
  search:{
    backgroundColor: 'white',
    justifyContent: "space-between",
    
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
  textHeader:{
    color: '#9D9EA3',
    fontFamily: 'Narrow',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 18,
  },
  body:{
    flex: 1,
    // flexDirection: 'col',
  },
  row : {
    flex : 1,
    flexDirection: 'row',
  },
  cardItem:{
    flex:1,
    marginLeft: 15,
    marginRight:15,
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 15,
    elevation: 3,
    height: 550,
  },
  recommendation:{
    flex:1,
    marginLeft: 15,
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 2,
    height: 200,
    width: 150,
  },
  textBody:{
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
    // color: '#B5B5B5',
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
    marginBottom: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 150,
    width: 148,
    alignSelf: "center"
  },
  sIcon:{
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 20,
    color: '#9D9EA3',
  },
    categories:{
      marginLeft: 10,
      marginRight: 10,
      // justifyContent: "center",
    },
    cardCategories:{
      marginLeft: 10,
      marginBottom: 10,
      justifyContent: 'center'

    },
    imageCategories:{
      marginTop: 5,
      marginLeft: 5,
      marginBottom: 2,
      width: 65,
      height: 65,
      borderRadius: 100,
      // alignContent: 'space-between'
    },
    imageDetail:{
      height: 320,
      width: 330,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      alignSelf: "center",
    },
    foodName:{
      alignSelf: "center",
      fontWeight: "bold",
      fontSize: 20,
      // marginBottom: 10,
      // backgroundColor: 'gray',
    },
    restaurantName:{
      alignSelf: "center",
      fontSize: 12,
      marginBottom: 10,
      color: '#B5B5B5'
    },
    price:{
      color: 'orange',
      fontWeight: "bold",
      fontSize: 18,
    },

    counter:{
      alignSelf: 'center',
      fontSize: 30,
      marginTop: 10,
      marginBottom: 10,
    },
    addCart: {
      height:35,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom:10,
      marginTop: 10,
      padding: 20,
      width:160,
      borderRadius:30,
      alignSelf: "center",
      backgroundColor: "#719B3B",
      color: 'white',
    },
    detail:{
      paddingLeft: 10,
    },
    customer:{
      fontSize: 20,
      fontWeight: "bold",
      paddingLeft: 20,
      marginTop: 5,
      width: '100%',

    },
    by:{
      fontSize: 16,
      fontWeight: "bold",
      marginTop: 10,
    },
    comment:{
    marginTop: 10,
    color: 'black',
    },
    review:{
      flex: 1,
      elevation: 2,
      margin: 5,
      borderRadius: 20,
      height: 150,
      padding: 20,
    },
    reviewRating: {borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#B5B5B5', marginTop: 10, marginBottom: 10,}
})



class DetailItem extends Component {
  constructor(props){
    super(props)
    this.state = {
        // data: {},
        // isFetched: false
    }
}

async componentDidMount(){
  const {id} = this.props.navigation.state.params
  await this.props.dispatch(getDetailItem(id))
  await this.props.dispatch(getCommentById(id))

// const url = APP_URL.concat(`item/${id}`)
// const item = await Axios.get(url)
// const {suggess, data} = item

// const review = APP_URL.concat(`valuation/${id}`)
// const reviews = await Axios.get(review)
// const reviewItem = reviews.data

// this.setState({data, reviewItem, isFetchedDetailItem:true, paramsId_Item:id})
}



  render() {
    return (
      <>
      <Container>
        <View style={styles.root}>
        {/* </Header> */}
        

      {/* Carosel */}



        <ScrollView vertical>
        {/* <ListItem/> */}
        <View style={styles.row}>
        {!this.props.items.isLoading && this.props.items.data.map(v=>(

            <View key= {v.id_item} style={styles.cardItem}>
              <Image style={styles.imageDetail} source={{uri: APP_URL.concat(`src/images/${v.image}`)}}/>
              <Text style={styles.foodName}>{v.item_name}</Text>
              <Text style={styles.restaurantName}>{v.restaurant_name}</Text>
              <Item style={styles.itemText} noBorder>
              <View style = { styles.Rating }>
                              <Ratings
                                  fullStarColor = { 'orange' }
                                  starSize = { 18 }
                                  disabled = { true }
                                  maxStars = { 5 }
                                  rating = { v.rating } 
                              />
                            </View>
              <Text style={styles.price}>Rp. {v.price}</Text>
              </Item>
              <TouchableOpacity style={styles.addCart}>
                <Icons name='cart-plus' style={{color:'white', fontWeight:'bold', fontSize:18,}} />
                <Text style={{color:'white', fontSize:14, fontWeight:'bold'}}>ADD TO CART</Text>
              </TouchableOpacity>
            <View style={{borderTopWidth:1, borderColor:'#B5B5B5'}}>
            <Text style={{fontWeight:'bold', fontSize:14, marginLeft:10, marginTop: 10,}}>Description : </Text>
            <Text style={styles.detail}>{v.description}</Text>
            </View>
            </View>
        ))}
        </View>
      

        {/* Review */}
        <View style={styles.reviewRating}>
            <Text style={styles.customer}>Customer Reviews</Text>
            {!this.props.comment.isLoading && this.props.comment.data.data.map((v, i) => { 
              return (
          <View style={styles.review}>
          <View style = { styles.Rating }>
                              <Ratings
                                  fullStarColor = { 'orange' }
                                  starSize = { 18 }
                                  disabled = { true }
                                  maxStars = { 5 }
                                  rating = { v.rating } 
                              />
                            </View>
            <Text style={styles.by}>By {v.username}</Text>
            <Text style={styles.comment}>{v.review}</Text>
          </View>
            )
          })} 
        </View>
        


        <View style={styles.body}>
        <ListItem noBorder>
              <Left>
                <Text style={{fontWeight:'bold'}}>Recommended For You</Text>
              </Left>
        </ListItem>
          <ScrollView horizontal>
          <View style={styles.row}>
          {/* this.props.items.isLoading && this.props.items.data.map */}
          {!this.props.items.isLoading && this.props.items.suggess.map((v, i) => { 
          return (
            <View style={styles.recommendation}>
              <Image style={styles.imageItem} source={{uri: APP_URL.concat(`src/images/${v.image}`)}}/>
              <Text style={styles.textBody}>{v.item_name}</Text>
              <Item style={styles.itemText} noBorder>
              <View style = { styles.Rating }>
                              <Ratings
                                  fullStarColor = { 'orange' }
                                  starSize = { 12 }
                                  disabled = { true }
                                  maxStars = { 5 }
                                  rating = { v.rating } 
                              />
                            </View>
              <Text style={styles.textPrice}>Rp. {v.price}</Text>
              </Item>
            </View> 
            )
           })} 
          </View>

          </ScrollView>
        </View>
          </ScrollView>   
        </View>
      </Container>
      </>
    )
  }
}

const mapStateToProps = state =>{
  return{
      items: state.items,
      comment : state.comment
  }
}

export default connect(mapStateToProps)(DetailItem)