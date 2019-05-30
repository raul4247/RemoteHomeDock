import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Theme from '../style/Theme'

export default class Navbar extends Component {

    render() {
        return (
            <View style={styles.navbarContainer}>
                <Text style={styles.text}>Remote Home Dock</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    navbarContainer: {
        backgroundColor: Theme.primary,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontFamily: 'Roboto-Thin',
        fontSize: 30,
        textAlign: 'center',
        color: Theme.primaryText,
    },
})
