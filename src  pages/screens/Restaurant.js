import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image, } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title, CardItem, Item,  Input, Footer } from 'native-base'
import Headers from '../component/header'
import Icons from 'react-native-vector-icons/FontAwesome'

import {connect} from 'react-redux'
import {getRestaurants} from '../redux/action/restaurant'
import {APP_URL} from '../resources/config'


const styles = StyleSheet.create({
    root:{
        flex: 1,
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
    row:{
        flex : 1,
        marginBottom: 10,
    },
    cardItem:{
        flex:1,
        marginLeft: 15,
        marginRight:15,
        marginTop: 5,
        marginBottom: 10,
        borderRadius: 15,
        elevation: 2,
        height: 200,
      },
      image:{
        height: 150,
        width: 150,
        borderTopLeftRadius: 15,
        // borderBottomLeftRadius: 15,
      },
      foodName:{
        fontWeight: "bold",
        fontSize: 16,
        alignSelf: "flex-start",
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
      item:{
        justifyContent: "space-between",
        borderBottomColor: 'transparent',
      },
    
      

})


class Restaurant extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
        }
    }

async componentDidMount() {
    await this.props.dispatch(getRestaurants())
    await this.setState({isLoading:false})
}    


    render() {
        return (
            <>
            <Container>
                <View style={styles.root}>
                <Headers />

                {/* Item */}
                {/* <View style={{marginBottom:10,}}> */}
                <ScrollView vertical>
                <View style={styles.row}>
                
                {!this.state.isLoading && this.props.restaurants.data.map((v, i) =>{
                    return(
                        <View key= {v.id_restaurant} style={styles.cardItem}>
                        <Item>
                            <Left>
                            <TouchableOpacity onPress = { ()=>this.props.navigation.navigate('Detail',{id:data.id_item})}>
                                <Image style={styles.image} source={{uri: APP_URL.concat(`src/images/${v.image}`)}}/>
                            </TouchableOpacity>
                            </Left>
                            <Body>
                                <Text style={styles.foodName}>{v.restaurant_name}</Text>
                                <View style={styles.counter}>
                                <TouchableOpacity onPress = { ()=>this.props.navigation.navigate('Detail')} style={styles.addCart}>
                                    <Icons name='list' style={{color:'white', fontWeight:'bold', fontSize:18,}} />
                                </TouchableOpacity>
                                </View>
                            </Body>
                        </Item>
                                <Text style={styles.price}>{v.description}</Text>
                    </View>                        
                    )


                })}

                </View>
                </ScrollView>
                </View>
                {/* </View> */}
            </Container>
            </>

        )
    }
}

const mapStateToProps = state =>{
    return{
        restaurants: state.restaurants
    }
}

export default connect(mapStateToProps)(Restaurant)
