import React, { Component } from 'react'
import { Text, View , Image, StyleSheet, ScrollView} from 'react-native'
import {Container, Header, Left, Body, Right, Button, Item, ListItem, Footer, FooterTab } from 'native-base'
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
    backgroundColor: '#F1F1F1'
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
    height: 148,
    width: 148,
    marginTop: -13,
    marginLeft: -16,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  foodName:{
    fontWeight: "bold",
    fontSize: 16,
    alignSelf: "flex-start",
    marginTop: -45,
    paddingTop: 15,
    paddingRight: 10,
  },
  price:{
    color: '#F95A37',
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 10,
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
        <View>
        <View style={styles.row}>
        {/* {!this.state.isLoading && this.props.carts.data.map((v, i) =>{
        return( */}
            <View  style={styles.cardItem}>
            <ListItem noBorder>
              <Left>
              <Image style={styles.imageDetail} source={{uri: 'https://d1nabgopwop1kh.cloudfront.net/v2/culinary-asset/guys1L+Yyer9kzI3sp/pb0CG1j2bhflZGFUZOoIf1YMmzMd/HaD8U/YhZI+EvjMM+6RmcSU0aUVNGx3wRqN5pBLGBOk639fAet4tgiIy9L+7sT5hcOIOtYd+66EshPLsvpzfof6rq/pTireVLxj86V6f4PFs2699pDbJivr/+3H1fIRyZK0PQ4R/UhKweWK6szQezUrWk33Udxrbs9L7qg=='}}/>
              </Left>
              <Body>
              <Text style={styles.foodName}>Ayam Geprek Sambalado</Text>
              <Text style={styles.price}>Rp 16.000</Text>
              <View style={styles.counter}>
                <Counter start={1} minusIcon={minusIcon} plusIcon={plusIcon} touchableColor='green'/>
              </View>
              </Body>
            </ListItem>
            </View>
            <View  style={styles.cardItem}>
            <ListItem noBorder>
              <Left>
              <Image style={styles.imageDetail} source={{uri:'https://www.herworld.co.id/gallery/teaser/Cara-Membuat-Jus-Wortel-yang-Enak_41_20180115184500.jpg'}}/>
              </Left>
              <Body>
              <Text style={styles.foodName}>Juice Wortel</Text>
              <Text style={styles.price}>Rp 10.000</Text>
              <View style={styles.counter}>
                <Counter start={1} minusIcon={minusIcon} plusIcon={plusIcon} touchableColor='green'/>
              </View>
              </Body>
            </ListItem>
            </View>
            <View  style={styles.cardItem}>
            <ListItem noBorder>
              <Left>
              <Image style={styles.imageDetail} source={{uri: 'https://cdn-u1-gnfi.imgix.net/post/large-manfaat-minum-kopi-luwak-hitam-abc-secangkir-061b1206042eb1a237587c15e4f66138.jpg'}}/>
              </Left>
              <Body>
              <Text style={styles.foodName}>Toraja Coffe</Text>
              <Text style={styles.price}>Rp 20.000</Text>
              <View style={styles.counter}>
                <Counter start={1} minusIcon={minusIcon} plusIcon={plusIcon} touchableColor='green'/>
              </View>
              </Body>
            </ListItem>
            </View>
        </View>
        </View>
        </ScrollView>
        </View>
        <Footer >
          <FooterTab  style={{backgroundColor:'#F7F7F7'}}>
            <Button disabled style={{borderRadius: 15, margin:10, backgroundColor:'#F7F7F7'}}>
              <Text style={{color:'green', fontSize:16, fontWeight: 'bold'}}>Rp 62.000</Text>
            </Button>
            <Button active onPress = { ()=>this.props.navigation.navigate('Checkout')} style={{backgroundColor:'green', borderRadius: 15, paddingBottom: 10, marginEnd: 10,}}>
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
