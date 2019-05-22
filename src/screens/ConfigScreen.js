import React, { Component } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import axios from 'axios'

export default class ConfigScreen extends Component {
    makeRequest() {
        let url = 'http://192.168.0.4:3000/'
        axios.get(url)
            .then(res => {
                console.log(res.data)
            })
    }
    render() {
        return (
            <View>
            <TouchableOpacity onPress={this.makeRequest}>
                <Text>Configs</Text>
            </TouchableOpacity>
            </View>
        )
    }
}