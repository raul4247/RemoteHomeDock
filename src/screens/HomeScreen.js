import React, { Component } from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import axios from 'axios'
import { connect } from 'react-redux'

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
    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => {this.makeRequest('light')}}>
                <Text>Switch Light</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {this.makeRequest('beep')}}>
                <Text>Ping</Text>
            </TouchableOpacity>
            <Text>{this.props.ip}</Text>
            <Text>{this.props.port}</Text>
            </View>
)
    }
}

function mapStateToProps(state) {
    return {
        ip: state.tcpState.ip,
        port: state.tcpState.port,
    }
}

export default connect(mapStateToProps)(HomeScreen)