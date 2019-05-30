import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Text, View, Image} from 'react-native'

import axios from 'axios'
import { connect } from 'react-redux'
import { updateTCPAction } from '../actions/updateTCPAction'

import AsyncStorage from '@react-native-community/async-storage'
import setStorage from '../storage/storage'
import Navbar from '../components/Navbar'

class HomeScreen extends Component {
    makeRequest(endPoint) {
        let url = 'http://' + this.props.ip + ':' + this.props.port + '/' + endPoint
        axios.get(url)
            .then(res => {
                console.log(res.data)
            })
            .catch(function (error) {
                console.log('error')
            })
    }

    async componentDidMount() {
        try {
            const ip = await AsyncStorage.getItem('@ip')
            const port = await AsyncStorage.getItem('@port')
            if (ip !== null && port !== null)
                this.props.updateIp(ip, port)
            else
                setStorage(this.state.ip, this.state.port)
        } catch (e) {
            console.log(e)
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Navbar />
                <View style={styles.mainContainer}>
                    <TouchableOpacity onPress={() => { this.makeRequest('light') }}>
                        <Image style={styles.icon}
                            source={require('../../assets/imgs/switch-icon.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateIp: (ip, port) => dispatch(updateTCPAction(ip, port)),
})

const mapStateToProps = (state) => {
    return {
        ip: state.tcpState.ip,
        port: state.tcpState.port,
    }
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width:200,
        height:200,
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)