import React, { Component } from 'react'
import 'react-native-gesture-handler'
import { Text, View } from 'react-native'
import { Root } from 'native-base'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


import Mainscreen from '../screens/Home'
import DetailItem from '../screens/DetailItem'
import Items from '../screens/Items'
import Carts from '../screens/Carts'
import Category from '../screens/Category'
import Search from '../screens/Search'
import Checkout from '../screens/Checkout'
import Profile from '../screens/Profile'
import Rating from '../screens/Rating'
// import Restaurant from '../screens/Restaurant'  
import Landing from '../screens/LandingPage'
import Login from '../screens/Login'
import Register from '../screens/Register' 
import Restaurants from '../screens/Restaurant'
import CategoriesById from '../screens/CategoriesById'

const HomeNav = createStackNavigator({
    Home:{
        screen: Mainscreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    Detail:{
        screen: DetailItem,
        navigationOptions: {
            // headerShown: false,
        }
    },
    Item:{
        screen: Items,
        navigationOptions: {
        },
    },
    Restaurant:{
        screen: Restaurants,
        navigationOptions: {
            headerShown: false,
        }
    }
}, { initialRouteName: 'Home' })

HomeNav.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true
    if (navigation.state.index > 0) {
        tabBarVisible = false
    }
    return {
        tabBarVisible,
    }
}

const CategoryNav = createStackNavigator({
    Category: {
        screen: Category,
        navigationOptions: {
            headerShown: false,
        },
    },
    Search: {
        screen: Search,
        navigationOptions: {
            headerShown: false,
        },
    },
    CategoriesId: {
        screen: CategoriesById,
        navigationOptions: {
            headerShown: false,
        },
    },
}, {
    initialRouteName: 'Category',
})

CategoryNav.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    }
}

const CartNav = createStackNavigator({
    Cart: {
        screen: Carts,
        navigationOptions: {
            headerShown: false,
        },
    },
    Checkout: {
        screen: Checkout,
        navigationOptions: {
            headerShown: false,
        },
    },
    Rating: {
        screen: Rating,
        navigationOptions: {
            headerShown: false,  
        },
    },
}, {
    initialRouteName: 'Cart',
})

CartNav.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    }
}

const ProfileNav = createStackNavigator({
    Profile: {
        screen: Profile,
        navigationOptions: {
            headerShown: false,
        },
    },
}, {
    initialRouteName: 'Profile',
})

const BottomNav = createBottomTabNavigator({
    Home: {
        screen: HomeNav,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <Icon name="home" size={30} color={tintColor} />;
            },
        },
    },
    Category: {
        screen: CategoryNav,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <Icon name="food" size={30} color={tintColor} />;
            },
        },
    },
    Cart: {
        screen: CartNav,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <Icon name="cart" size={30} color={tintColor} />;
            },
        },
    },
    Profile: {
        screen: ProfileNav,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <Icon name="face-profile" size={30} color={tintColor} />;
            },
        },
    },
}, {
    initialRouteName: 'Home',
    tabBarOptions: {
        activeTintColor: '#719B3B',
        activeBackgroundColor: 'white',
        inactiveTintColor: '#909090',
        style: {
            backgroundColor: 'white',
            borderTopColor: 'transparent',
        }
    }
})


const LandingNav = createSwitchNavigator({
    Landing:{
        screen:Landing,
        navigationOptions: {
            headerShown: false,
            tabBarVisible: false, 
        }
    },
    Login:{
        screen:Login,
        navigationOptions:{
            headerShown: false,
            tabBarVisible: false, 
        }
    },
    Register:{
        screen: Register,
        navigationOptions:{
            headerShown: false,
            tabBarVisible: false, 
        }
    },
},{
    initialRouteName: 'Landing'
})

const SwitchNav = createSwitchNavigator({
    LandingNav,
    BottomNav,
}, {
    initialRouteName: 'BottomNav',
})




const AppContainer = createAppContainer(SwitchNav)

// create a component
class Router extends Component {
    render() {
        return (
            <Root>
                <AppContainer />
            </Root>
        );
    }
}

//make this component available to the app
export default Router;