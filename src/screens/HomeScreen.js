import React, { Component } from 'react'
import { TouchableOpacity, Text } from 'react-native'

export default class HomeScreen extends Component {
    makeRequest() {
        console.log('hey')
    }
    render() {
        return (
            <TouchableOpacity onPress={this.makeRequest}>
                <Text>Hello</Text>
            </TouchableOpacity>
        )
    }
}