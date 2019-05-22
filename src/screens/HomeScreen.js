import React, { Component } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import axios from 'axios'

export default class HomeScreen extends Component {
    makeRequest() {
        let url = 'http://192.168.0.4:3000/'
        axios.get(url)
            .then(res => {
                console.log(res.data)
            })
    }
    render() {
        return (
            <TouchableOpacity onPress={this.makeRequest}>
                <Text>Hello</Text>
            </TouchableOpacity>
        )
    }
}