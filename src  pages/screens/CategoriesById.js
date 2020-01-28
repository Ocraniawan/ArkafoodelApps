import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image, } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title, CardItem, Item,  Input } from 'native-base'
import Headers from '../component/header'
import Icons from 'react-native-vector-icons/FontAwesome'

import {connect} from 'react-redux'
import {getCategoryById} from '../redux/action/categories'
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
        height: 150,
      },
      image:{
        height: 149,
        width: 150,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        marginTop: 1,
        paddingTop: 10,
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
      addCart: {
        height:35,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:10,
        marginTop: 10,
        width:65,
        marginRight: 10,
        borderRadius:30,
        backgroundColor: "#719B3B",
      },
      counter:{
        fontSize: 30,
        marginTop: 10,
        justifyContent: 'space-between'
      },
      item:{
        justifyContent: "space-between",
        borderBottomColor: 'transparent',
      },
    
      

})



class CategoriesById extends Component {
    constructor(props) {
    super(props)
    this.state = {
        isLoading: true,
    }
}

    async componentDidMount() {
    const {id} = this.props.navigation.state.params    
    await this.props.dispatch(getCategoryById(id))
    await this.setState({isLoading:false})
    } 


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

                {/* Item */}
                {/* <View style={{marginBottom:10,}}> */}
                <ScrollView vertical>
                <View style={styles.row}>
                
                {!this.state.isLoading && this.props.categories.data.map((v, i) =>{
                    return(
                        <View key= {v.id_item} style={styles.cardItem}>
                        <Item>
                            <Left>
                            <TouchableOpacity onPress = { ()=>this.props.navigation.navigate('Detail',{id:v.id_item})}>
                                <Image style={styles.image} source={{uri: APP_URL.concat(`src/images/${v.image}`)}}/>
                            </TouchableOpacity>
                            </Left>
                            <Body>
                                <Text style={styles.foodName}>{v.item_name}</Text>
                                <Text style={styles.price}>Rp {v.price}</Text>
                                <View style={styles.counter}>
                                <Item style={styles.item}>
                                <TouchableOpacity onPress = { ()=>this.props.navigation.navigate('Detail')} style={styles.addCart}>
                                    <Icons name='list' style={{color:'white', fontWeight:'bold', fontSize:18,}} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.addCart}>
                                    <Icons name='cart-plus' style={{color:'white', fontWeight:'bold', fontSize:18,}} />
                                </TouchableOpacity>
                                </Item>
                                </View>
                            </Body>
                        </Item>
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
        categories: state.categories
    }
}

export default connect(mapStateToProps)(CategoriesById)
