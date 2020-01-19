import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ScrollView, Touchable, TouchableOpacity} from 'react-native'
import {Header,Item, ListItem, Separator, Input, Card, Container, Footer, FooterTab,Icon, Button, CardItem, Left, Thumbnail, Body, Right, } from 'native-base'
import Icons from 'react-native-vector-icons/FontAwesome'
import Sicons from 'react-native-vector-icons/SimpleLineIcons'

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
    elevation: 3,
    height: 200,
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
    height: 140,
    width: 150,
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
      // borderRadius: 5,
      // elevation: 1,
      justifyContent: 'center'

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
    color: '#C7C7C7',
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



export default class DetailItem extends Component {
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
            <View style={styles.cardItem}>
              <Image style={styles.imageDetail} source={require('../../Images/DummyItem.jpg')}/>
              <Text style={styles.foodName}>Food Name</Text>
              <Text style={styles.restaurantName}>Arkademy Coffe Shop</Text>
              <Item style={styles.itemText} noBorder>
              <Text style={styles.Rating}>4.5 <Icons name= "star"color="orange"  style={styles.star}/></Text>
              <Text style={styles.price}>Rp 10.000</Text>
              </Item>
              {/* <View style={styles.counter}>
              <Counter start={1} minusIcon={minusIcon} plusIcon={plusIcon} touchableColor='green'/>
            </View> */}
              <TouchableOpacity style={styles.addCart}>
                <Icons name='cart-plus' style={{color:'white', fontWeight:'bold', fontSize:18,}} />
                <Text style={{color:'white', fontSize:14, fontWeight:'bold'}}>ADD TO CART</Text>
              </TouchableOpacity>
            <View style={{borderTopWidth:1, borderColor:'#B5B5B5'}}>
            <Text style={{fontWeight:'bold', fontSize:14, marginLeft:10, marginTop: 10,}}>Description : </Text>
            <Text style={styles.detail}>This Item made From Bla-bla bla-bla</Text>
            </View>
            </View>
        </View>

        {/* Review */}
        <View style={styles.reviewRating}>
            <Text style={styles.customer}>Customer Reviews</Text>
          <View style={styles.review}>
            <Text style={styles.Rating}>5 <Icons name= "star"color="orange"  style={styles.star}/></Text>
            <Text style={styles.by}>By Nova Iriani</Text>
            <Text style={styles.comment}>So far ini paling enak, pahit sama manisnya pas, untuk harga segini terbilang murah dengan rasa yang sangat expensive.</Text>
          </View>
          <View style={styles.review}>
            <Text style={styles.Rating}>4.5 <Icons name= "star"color="orange"  style={styles.star}/></Text>
            <Text style={styles.by}>By Ocraniawan</Text>
            <Text style={styles.comment}>Parah sihh ini... Kopinya enak bangat, habis minum mata langsung segar, Kwalitas sesuai harga lah..!! Next time order lagi.</Text>
          </View>
        </View>
        


        <View style={styles.body}>
        <ListItem noBorder>
              <Left>
                <Text style={{fontWeight:'bold'}}>Recommended For You</Text>
              </Left>
        </ListItem>
          <ScrollView horizontal>
          <View style={styles.row}>
            <View style={styles.recommendation}>
              <Image style={styles.imageItem} source={require('../../Images/DummyItem.jpg')}/>
              <Text style={styles.textBody}>Food Name</Text>
              <Item style={styles.itemText} noBorder>
              <Text style={styles.textRating}>4.5</Text>
              <Text style={styles.textPrice}>Rp 10.000</Text>
              </Item>
            </View> 
            <View style={styles.recommendation}>
              <Image style={styles.imageItem} source={require('../../Images/DummyItem.jpg')}/>
              <Text style={styles.textBody}>Food Name</Text>
              <Item style={styles.itemText} noBorder>
              <Text style={styles.textRating}>4.5</Text>
              <Text style={styles.textPrice}>Rp 10.000</Text>
              </Item>
            </View>  
          </View>
          <View style={styles.row}>
            <View style={styles.recommendation}>
              <Image style={styles.imageItem} source={require('../../Images/DummyItem.jpg')}/>
              <Text style={styles.textBody}>Food Name</Text>
              <Item style={styles.itemText} noBorder>
              <Text style={styles.textRating}>4.5</Text>
              <Text style={styles.textPrice}>Rp 10.000</Text>
              </Item>
            </View> 
            <View style={styles.recommendation}>
              <Image style={styles.imageItem} source={require('../../Images/DummyItem.jpg')}/>
              <Text style={styles.textBody}>Food Name</Text>
              <Item style={styles.itemText} noBorder>
              <Text style={styles.textRating}>4.5</Text>
              <Text style={styles.textPrice}>Rp 10.000</Text>
              </Item>
            </View>  
          </View>
          <View style={styles.row}>
            <View style={styles.recommendation}>
              <Image style={styles.imageItem} source={require('../../Images/DummyItem.jpg')}/>
              <Text style={styles.textBody}>Food Name</Text>
              <Item style={styles.itemText} noBorder>
              <Text style={styles.textRating}>4.5</Text>
              <Text style={styles.textPrice}>Rp 10.000</Text>
              </Item>
            </View> 
            <View style={styles.recommendation}>
              <Image style={styles.imageItem} source={require('../../Images/DummyItem.jpg')}/>
              <Text style={styles.textBody}>Food Name</Text>
              <Item style={styles.itemText} noBorder>
              <Text style={styles.textRating}>4.5</Text>
              <Text style={styles.textPrice}>Rp 10.000</Text>
              </Item>
            </View>  
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