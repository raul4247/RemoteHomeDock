import React, { Component } from 'react'
import axios from 'axios'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { connect } from 'react-redux'

class Scanner extends Component {
    search() {
        let port = this.props.port
        let searchRange = [...Array(254).keys()].map((i) => {
            return 'http://192.168.0.' + (i + 1) + ':' + port
        })
        let self = this

        searchRange.map((url) => {
            axios({
                method: 'get',
                url: url,
                timeout: 1000,
            })
                .then(function (response) {
                    let newUrls = self.state.urls
                    newUrls.push(url)
                    self.setState({ url: [newUrls] })
                })
                .catch(function (error) {})
        })
    }
    constructor(props) {
        super(props)
        this.state = {
            urls: []
        }
    }
    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => { this.search() }}>
                    <Text>Search!</Text>
                </TouchableOpacity>

                {this.state.urls.map(function (url, i) {
                    return <Text key={i}>{url}</Text>
                })}
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        port: state.tcpState.port,
    }
}

export default connect(mapStateToProps)(Scanner)