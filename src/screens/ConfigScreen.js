import React, { Component } from 'react'
import { View, TextInput, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Scanner from '../components/Scanner'

import axios from 'axios'
import { connect } from 'react-redux'
import { updateTCPAction } from '../actions/updateTCPAction'

class ConfigScreen extends Component {
    constructor(props) {
        super(props)
        this.state = { ip: this.props.ip, port: this.props.port }
    }
    render() {
        return (
            <View>
                <TextInput
                    onChangeText={(val) => this.setState({ ip: val })}
                    keyboardType={"numeric"}
                    value={this.state.ip}
                />
                <TextInput
                    onChangeText={(val) => this.setState({ port: val })}
                    keyboardType={"numeric"}
                    value={this.state.port}
                />
                <TouchableOpacity onPress={() => this.props.updateIp(this.state.ip, this.state.port)}>
                    <Text>UPDATE</Text>
                </TouchableOpacity>
                <Text>{this.props.ip}</Text>
                <Text>{this.props.port}</Text>
                <Scanner />
            </View>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateIp: (ip, port)  => dispatch(updateTCPAction(ip, port)),
})

function mapStateToProps(state) {
    return {
        ip: state.tcpState.ip,
        port: state.tcpState.port,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfigScreen)