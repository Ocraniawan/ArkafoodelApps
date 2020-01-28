import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { connect } from 'react-redux';
import {logIn} from '../redux/action/login'
import { withNavigation } from 'react-navigation';

// create a component
class ProfileOriginal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            isSuccess: false,
            message: '',
        }
    }

    // async handleLogout(){
    //     const jwt = await this.props.auth.data.token
    //     if(jwt !== null){
    //         await this.props.dispatch(logout(jwt))
    //     }
    // }

    // async componentDidUpdate(prevProps) {
    //     if (prevProps.auth.isLoading !== this.state.isLoading) {
    //         if (prevProps.auth.isLoading === true) {
    //             this.setState({
    //                 isLoading: true
    //             })
    //             console.log('masih loading')
    //         } else {
    //             console.log('sudah fulfill')
    //             if (this.props.auth.isSuccess) {
    //                 console.log('berhasil logout')
    //                 await this.setState({
    //                     isLoading: false,
    //                     isSuccess: true,
    //                     message: "Logout Success.",
    //                 })
    //                 this.handleRedirect()
    //             } else {
    //                 console.log('gagal logout')
    //                 await this.setState({
    //                     isLoading: false,
    //                     isSuccess: false,
    //                     message: "Logout Failed. Try Again.",
    //                 })
    //                 this.handleRedirect()
    //             }
    //         }
    //     }
    // }

    // async handleRedirect() {
    //     if (this.state.isSuccess) {
    //         Alert.alert('Logout Message', this.state.message, [
    //             { text: 'OK', onPress: () => this.props.navigation.navigate('Splash') },
    //         ])
    //     } else {
    //         Alert.alert('Logout Message', this.state.message)
    //     }
    // }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerWrapper}>
                    <View style={{ flexDirection: 'row' }}>
                        {/* <SliderTitle title="Profile" /> */}
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('../../Images/profil.jpg')} style={{ width: 100, height: 100, borderRadius: 15, borderColor: 'white', borderWidth: 3 }} />
                        <Text style={{ fontFamily: 'Nunito-Regular', fontSize: 30, color: '#111' }}>Reynhand Sinaga</Text>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'column', width: '100%' }}>
                    <ScrollView style={{ width: '100%', height: '100%', }} showsVerticalScrollIndicator={false}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', elevation: 1, marginTop: 20, padding: 20 }}>
                            <View>
                                <Text style={{ fontFamily: 'Nunito-Regular', fontSize: 25 }}>Reynhand Sinaga</Text>
                                <Text style={{ fontFamily: 'Nunito-Regular', color: '#333', fontSize: 15 }}>hayooKuy</Text>
                            </View>
                            <View>
                                <Text style={{ fontFamily: 'Nunito-Regular', color: 'green', fontSize: 15 }} onPress={() => this.props.navigation.navigate('#')}>Change</Text>
                            </View>
                        </View>
                        {/* <TouchableOpacity style={{ backgroundColor: 'white', elevation: 1, marginTop: 20, padding: 10, flexDirection: 'row', alignItems: 'center' }} onPress={() => this.props.navigation.navigate('#')} onPress={() => this.props.navigation.navigate('#')}>
                            <Feather name="file-text" size={25} />
                            <Text style={{ fontFamily: 'Nunito-Regular', fontSize: 18, marginLeft: 10 }}>Order History</Text>
                        </TouchableOpacity> */}
                        {/* <View style={{ backgroundColor: 'white', elevation: 1, padding: 10, flexDirection: 'row', alignItems: 'center' }}>
                            <Feather name="help-circle" size={25} />
                            <Text style={{ fontFamily: 'Nunito-Regular', fontSize: 18, marginLeft: 10 }}>Help</Text>
                        </View> */}
                        <TouchableOpacity style={{ backgroundColor: 'white', elevation: 1, padding: 10, flexDirection: 'row', alignItems: 'center' }}>
                            <Feather name="log-out" size={25} color="red" />
                            <Text style={{ fontFamily: 'Nunito-Regular', fontSize: 18, marginLeft: 10, color: 'red' }}>Log Out</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#fff',
    },
    headerWrapper: {
        backgroundColor: '#eee',
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        // borderBottomLeftRadius: 50,
        // borderBottomRightRadius: 50,
        padding: 20
    },
});

const Profile = withNavigation(ProfileOriginal)

const mapStateToProps = state => {
    return {
        login: state.login,
    }
}

//make this component available to the app
export default connect(mapStateToProps)(Profile);