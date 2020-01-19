import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ScrollView, ImageBackground} from 'react-native'
import {Item, ListItem, Separator, Input, Card, Container, Footer, FooterTab,Icon, Button, CardItem, Left, Thumbnail, Body, Right, } from 'native-base'
import Icons from 'react-native-vector-icons/FontAwesome'
import { TouchableOpacity } from 'react-native-gesture-handler'


import Headers from '../component/header'
const styles = StyleSheet.create({
  root:{
    flex : 1,

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
    flexDirection: 'row',
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
    height: 190,
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
    elevation: 1,
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
      // flex:1,
      // // paddingLeft: 10,
      marginLeft: 10,
      // // marginTop: 10,
      // // marginRight: 10,
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
    separator:{
      marginTop: 10,
      height: 3,
      fontSize: 3,
    },
    restaurantName:{
      fontWeight: "bold",
        color: '#494949',
    }

})



export default class Home extends Component {
  render() {
    return (
      <>
      <Container>
        <View style={styles.root}>
          <Headers />
          <Item regular style={styles.searchBar}>
            <Icons name="search" style={styles.icon} />
            <Input style={styles.inputBar} placeholder="Let's Find some Food..." placeholderTextColor='#333333' />
          </Item>
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
            <View style={styles.cardCategories}>
              <Image style={styles.imageCategories} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgM7L5s99IRbOPcMC_ySJiTZFyWIVqADSjEtKyUCCa_FA9ZCCS&s'}}/>
              <Text style={styles.textBody}>Juice</Text>
            </View> 
          <View style={styles.cardCategories}>
              <Image style={styles.imageCategories} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1-z_864yH4lGc2jRV7dXcf8qJveC-g_fEsRZX_RPdsRXADiDZWg&s'}}/>
              <Text style={styles.textBody}>Fish</Text>
            </View>
            <View style={styles.cardCategories}>
              <Image style={styles.imageCategories} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOP2oyWisuI3Qy_xnZBlZi3aVDb7J6rPLeWVpN-UdhXJixiBPy&s'}}/>
              <Text style={styles.textBody}>Duck</Text>
            </View> 
            <View style={styles.cardCategories}>
              <Image style={styles.imageCategories} source={{uri:'https://cdn0.iconfinder.com/data/icons/cartoon-food/512/Food_512-01.png'}}/>
              <Text style={styles.textBody}>Rice</Text>
            </View> 
          </View>
          <View style={styles.row}>
            <View style={styles.cardCategories}>
              <Image style={styles.imageCategories} source={{uri:'https://www.pngrepo.com/png/17299/170/cup.png'}}/>
              <Text style={styles.textBody}>Coffe</Text>
            </View> 
          <View style={styles.cardCategories}>
              <Image style={styles.imageCategories} source={{uri:'https://www.pngrepo.com/png/164664/170/chicken.png'}}/>
              <Text style={styles.textBody}>Chicken</Text>
            </View>
            <View style={styles.cardCategories}>
              <Image style={styles.imageCategories} source={{uri:'https://cdn2.iconfinder.com/data/icons/food-and-drinks-flat-circle-shadow-vol-4/100/noodle__food__pasta__asia__fastfood__chinese__eat-512.png'}}/>
              <Text style={styles.textBody}>Noodles</Text>
            </View> 
            <View style={styles.cardCategories}>
              <Image style={styles.imageCategories} source={{uri:'https://cdn0.iconfinder.com/data/icons/kameleon-free-pack-rounded/110/Food-Dome-512.png'}}/>
              <Text style={styles.textBody}>Others</Text>
            </View> 
          </View>
        {/* </ScrollView> */}
        </View>
        {/* <ListItem/> */}
        


        <View style={styles.body}>
        <ListItem noBorder>
              <Left>
                <Text style={{fontWeight:'bold', color: '#494949'}}>Recommended For You</Text>
                {/* <Text >Handpicked based on your past order</Text> */}
              </Left>
              <Right>
                <TouchableOpacity onPress = { ()=>this.props.navigation.navigate('Item')}>
                <Text style={{color:'#2578D9', fontWeight:'bold'}}>See All</Text>
                </TouchableOpacity>
              </Right>
        </ListItem>
          <ScrollView horizontal>
          <View style={styles.row}>
          <TouchableOpacity onPress = { ()=>this.props.navigation.navigate('Detail')}>
          <View style={styles.cardItem}>
              <Image style={styles.imageItem} source={require('../../Images/DummyItem.jpg')}/>
              <Text style={styles.textBody}>Food Name</Text>
              <Item style={styles.itemText} noBorder>
              <Text style={styles.textRating}>4.5</Text>
              <Text style={styles.textPrice}>Rp 10.000</Text>
              </Item>
            </View> 
          </TouchableOpacity>
            <View style={styles.cardItem}>
              <Image style={styles.imageItem} source={require('../../Images/DummyItem.jpg')}/>
              <Text style={styles.textBody}>Food Name</Text>
              <Item style={styles.itemText} noBorder>
              <Text style={styles.textRating}>4.5</Text>
              <Text style={styles.textPrice}>Rp 10.000</Text>
              </Item>
            </View>  
          </View>
          <View style={styles.row}>
            <View style={styles.cardItem}>
              <Image style={styles.imageItem} source={require('../../Images/DummyItem.jpg')}/>
              <Text style={styles.textBody}>Food Name</Text>
              <Item style={styles.itemText} noBorder>
              <Text style={styles.textRating}>4.5</Text>
              <Text style={styles.textPrice}>Rp 10.000</Text>
              </Item>
            </View> 
            <View style={styles.cardItem}>
              <Image style={styles.imageItem} source={require('../../Images/DummyItem.jpg')}/>
              <Text style={styles.textBody}>Food Name</Text>
              <Item style={styles.itemText} noBorder>
              <Text style={styles.textRating}>4.5</Text>
              <Text style={styles.textPrice}>Rp 10.000</Text>
              </Item>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.cardItem}>
              <Image style={styles.imageItem} source={require('../../Images/DummyItem.jpg')}/>
              <Text style={styles.textBody}>Food Name</Text>
              <Item style={styles.itemText} noBorder>
              <Text style={styles.textRating}>4.5</Text>
              <Text style={styles.textPrice}>Rp 10.000</Text>
              </Item>
            </View> 
            <View style={styles.cardItem}>
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





        {/* //**Restaurant */ }
        <ListItem noBorder>
              <Left>
                <Text style={{fontWeight:'bold', color: '#494949'}}>Our Partners</Text>
              </Left>
              <Right>
              <TouchableOpacity onPress = { ()=>this.props.navigation.navigate('Item')}>
                <Text style={{color:'#2578D9', fontWeight:'bold'}}>See All</Text>
              </TouchableOpacity>
              </Right>
        </ListItem>  
        <View style={styles.restaurant}>
        <ScrollView horizontal>
        <View style={styles.row}>
        <Card style={styles.cardRestaurant}>
          <CardItem style={{height:50}}>
              <Left>
                <Thumbnail style={{height:40, width:40}} source={{uri: 'https://cdn4.vectorstock.com/i/1000x1000/31/73/fast-food-combo-icon-hamburge-pizza-drink-vector-21933173.jpg'}} />
                <Body>
                  <Text style={styles.restaurantName}>Arkademy Restaurant</Text>
                  <Text note style={{color: '#696969'}}>Bogor</Text>
                </Body>
              </Left>
          </CardItem>
          <CardItem cardBody>
             <Image source={{uri: 'https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342.jpg'}} style={{height: 150, width: null, flex: 1}}/>
           </CardItem>
          <CardItem style={{height:50}}>
            <Text style={{fontSize:12, color: '#696969'}}>Start Your day with a cup of Coffe</Text>
          </CardItem>
        </Card>

        <Card style={styles.cardRestaurant}>
          <CardItem style={{height:50}}>
              <Left>
                <Thumbnail style={{height:40, width:40}} source={{uri: 'https://cdn4.vectorstock.com/i/1000x1000/31/73/fast-food-combo-icon-hamburge-pizza-drink-vector-21933173.jpg'}} />
                <Body>
                  <Text style={styles.restaurantName}>Arkademy Restaurant</Text>
                  <Text note style={{color: '#696969'}}>Bogor</Text>
                </Body>
              </Left>
          </CardItem>
          <CardItem cardBody>
             <Image source={{uri: 'https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342.jpg'}} style={{height: 150, width: null, flex: 1}}/>
           </CardItem>
          <CardItem style={{height:50}}>
            <Text style={{fontSize:12, color: '#696969'}}>Start Your day with a cup of Coffe</Text>
          </CardItem>
        </Card>

        <Card style={styles.cardRestaurant}>
          <CardItem style={{height:50}}>
              <Left>
                <Thumbnail style={{height:40, width:40}} source={{uri: 'https://cdn4.vectorstock.com/i/1000x1000/31/73/fast-food-combo-icon-hamburge-pizza-drink-vector-21933173.jpg'}} />
                <Body>
                  <Text style={styles.restaurantName}>Arkademy Restaurant</Text>
                  <Text note style={{color: '#696969'}}>Bogor</Text>
                </Body>
              </Left>
          </CardItem>
          <CardItem cardBody>
             <Image source={{uri: 'https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342.jpg'}} style={{height: 150, width: null, flex: 1}}/>
           </CardItem>
          <CardItem style={{height:50}}>
            <Text style={{fontSize:12, color: '#696969'}}>Start Your day with a cup of Coffe</Text>
          </CardItem>
        </Card>

        <Card style={styles.cardRestaurant}>
          <CardItem style={{height:50}}>
              <Left>
                <Thumbnail style={{height:40, width:40}} source={{uri: 'https://cdn4.vectorstock.com/i/1000x1000/31/73/fast-food-combo-icon-hamburge-pizza-drink-vector-21933173.jpg'}} />
                <Body>
                  <Text style={styles.restaurantName}>Arkademy Restaurant</Text>
                  <Text note style={{color: '#696969'}}>Bogor</Text>
                </Body>
              </Left>
          </CardItem>
          <CardItem cardBody>
             <Image source={{uri: 'https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342.jpg'}} style={{height: 150, width: null, flex: 1}}/>
           </CardItem>
          <CardItem style={{height:50}}>
            <Text style={{fontSize:12, color: '#696969'}}>Start Your day with a cup of Coffe</Text>
          </CardItem>
        </Card>
        
          </View>
        </ScrollView>
        </View>
        


        {/* <Text>We've got you covered</Text> */}

        <View style={styles.body}>
        <ListItem noBorder>
              <Left>
                <Text style={{fontWeight:'bold', color: '#494949',}}>Because You Like Fish</Text>
                {/* <Text >Handpicked based on your past order</Text> */}
              </Left>
              <Right>
                <Text style={{color:'#2578D9', fontWeight:'bold'}}>See All</Text>
              </Right>
        </ListItem>
          <ScrollView horizontal>
          <View style={styles.row}>
            <View style={styles.cardItem}>
              <Image style={styles.imageItem} source={require('../../Images/DummyItem.jpg')}/>
              <Text style={styles.textBody}>Food Name</Text>
              <Item style={styles.itemText} noBorder>
              <Text style={styles.textRating}>4.5</Text>
              <Text style={styles.textPrice}>Rp 10.000</Text>
              </Item>
            </View> 
            <View style={styles.cardItem}>
              <Image style={styles.imageItem} source={require('../../Images/DummyItem.jpg')}/>
              <Text style={styles.textBody}>Food Name</Text>
              <Item style={styles.itemText} noBorder>
              <Text style={styles.textRating}>4.5</Text>
              <Text style={styles.textPrice}>Rp 10.000</Text>
              </Item>
            </View>  
          </View>
          <View style={styles.row}>
            <View style={styles.cardItem}>
              <Image style={styles.imageItem} source={require('../../Images/DummyItem.jpg')}/>
              <Text style={styles.textBody}>Food Name</Text>
              <Item style={styles.itemText} noBorder>
              <Text style={styles.textRating}>4.5</Text>
              <Text style={styles.textPrice}>Rp 10.000</Text>
              </Item>
            </View> 
            <View style={styles.cardItem}>
              <Image style={styles.imageItem} source={require('../../Images/DummyItem.jpg')}/>
              <Text style={styles.textBody}>Food Name</Text>
              <Item style={styles.itemText} noBorder>
              <Text style={styles.textRating}>4.5</Text>
              <Text style={styles.textPrice}>Rp 10.000</Text>
              </Item>
            </View> 
          </View>
          <View style={styles.row}>
            <View style={styles.cardItem}>
              <Image style={styles.imageItem} source={require('../../Images/DummyItem.jpg')}/>
              <Text style={styles.textBody}>Food Name</Text>
              <Item style={styles.itemText} noBorder>
              <Text style={styles.textRating}>4.5</Text>
              <Text style={styles.textPrice}>Rp 10.000</Text>
              </Item>
            </View> 
            <View style={styles.cardItem}>
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
        {/* <Footer>
          <FooterTab style={{backgroundColor:'#F7F7F7'}}>
            <Button vertical>
              <Icon name="apps" style={{fontSize:30, color:'black'}}/>
              <Text>Home</Text>
            </Button>
            <Button vertical>
              <Micons name="food" style={{fontSize:30, color:'black'}}/>
              <Text>Food</Text>
            </Button>
            <Button vertical>
              <Iicons name="md-restaurant" style={{fontSize:30, color:'black'}} />
              <Text>Restaurant</Text>
            </Button>
            <Button vertical>
              <Icon name="person" style={{fontSize:30, color:'black'}}/>
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer> */}
      </Container>
      </>
    )
  }
}

