import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
import axios from 'axios'

export default class ConfigScreen extends Component {
    constructor(props) {
        super(props)
        this.state = { ipAddress: '0', port: '0'}
    }
    render() {
        return (
            <View>
                <TextInput
                    onChangeText={(val) => this.setState({ ipAddress: val })}
                    keyboardType={"numeric"}
                    value={this.state.ipAddress}
                />
                <TextInput
                    onChangeText={(val) => this.setState({ port: val })}
                    keyboardType={"numeric"}
                    value={this.state.port}
                />
            </View>
        )
    }
}