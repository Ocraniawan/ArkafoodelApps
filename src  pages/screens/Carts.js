import React, { Component } from 'react'
import { Text, View , Image, StyleSheet, ScrollView, Touchable, TouchableOpacity} from 'react-native'
import {Container, Header, Left, Body, Right, Button, Icon, Title, CardItem, Item, Card, Footer, FooterTab } from 'native-base'
import Counter from "react-native-counters";
import Feather from 'react-native-vector-icons/Feather';
import Headers from '../component/header'
import {connect} from 'react-redux'
import {getCart} from '../redux/action/cart'


const minusIcon = (isMinusDisabled, touchableDisabledColor, touchableColor) => {
  return <Feather name='minus' size={20} color={isMinusDisabled ? touchableDisabledColor : touchableColor} />
};

const plusIcon = (isPlusDisabled, touchableDisabledColor, touchableColor) => {
  return <Feather name='plus' size={20} color={isPlusDisabled ? touchableDisabledColor : touchableColor} />
};

const styles = StyleSheet.create({
  root:{
    flex : 1,
  },
  row : {
    flex : 1,
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
  },
  imageDetail:{
    height: 150,
    width: 150,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  foodName:{
    fontWeight: "bold",
    fontSize: 16,
    alignSelf: "flex-start",
    marginTop: -20,
    paddingTop: 15,
    paddingRight: 10,
  },
  price:{
    color: 'orange',
    fontWeight: "bold",
    fontSize: 18,
    alignSelf: "flex-start",
  },
  counter:{
    alignSelf: 'center',
    fontSize: 30,
    marginTop: 20,
  },
}) 

class Carts extends Component {
  constructor(props) {
    super(props)
    this.state = {
        isLoading: true,
    }
}

// async componentDidMount(){
//   const {id} = this.props.params
//   this.props.dispatch(getCart(id,this.props.login.auth))
//   await this.setState({isLoading:false})
// }


  render() {
    return (
      <>
      <Container>
      <View style={styles.root}>
        <Headers />
        <ScrollView vertical>
        {/* <ListItem/> */}
        <View>
        <View style={styles.row}>
        {/* {!this.state.isLoading && this.props.carts.data.map((v, i) =>{
        return( */}
            <View  style={styles.cardItem}>
            <Item>
              <Left>
              <Image style={styles.imageDetail} source={require('../../Images/DummyItem.jpg')}/>
              </Left>
              <Body>
              <Text style={styles.foodName}>Ayam Geprek Sambalado Goyang</Text>
              <Text style={styles.price}>Rp 10.000</Text>
              <View style={styles.counter}>
                <Counter start={1} minusIcon={minusIcon} plusIcon={plusIcon} touchableColor='green'/>
              </View>
              </Body>
            </Item>
            </View>
            <View  style={styles.cardItem}>
            <Item>
              <Left>
              <Image style={styles.imageDetail} source={require('../../Images/DummyItem.jpg')}/>
              </Left>
              <Body>
              <Text style={styles.foodName}>Ayam Geprek Sambalado Goyang</Text>
              <Text style={styles.price}>Rp 10.000</Text>
              <View style={styles.counter}>
                <Counter start={1} minusIcon={minusIcon} plusIcon={plusIcon} touchableColor='green'/>
              </View>
              </Body>
            </Item>
            </View>
            {/* )


          })} */}
        </View>
        </View>
        </ScrollView>
        </View>



        <Footer >
          <FooterTab  style={{backgroundColor:'#F7F7F7'}}>
            <Button>
              <Text>Total</Text>
            </Button>
            <Button active style={{backgroundColor:'green', borderRadius: 15, paddingBottom: 10, marginEnd: 10,}}>
              <Text style={{color:'white'}}>Check Out</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
      </>
    )
  }
}
const mapStateToProps = state =>{
  return{
      carts: state.carts,
      login: state.login
  }
}

export default connect(mapStateToProps)(Carts)
