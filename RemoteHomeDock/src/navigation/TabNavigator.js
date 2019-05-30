import React, { Component } from 'react'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from '../screens/HomeScreen'
import ConfigScreen from '../screens/ConfigScreen'
import Theme from '../style/Theme'
import Icon from 'react-native-vector-icons/MaterialIcons'

const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => (
                <Icon name='home' color={tintColor} size={24} />
            )
        }
    },
    Configs: {
        screen: ConfigScreen,
        navigationOptions: {
            tabBarLabel: 'Connect',
            tabBarIcon: ({ tintColor }) => (
                <Icon name='settings' color={tintColor} size={24} />
            )
        }
    },
},
    {
        tabBarOptions: {
            style: {
                backgroundColor: Theme.primaryLight,
            },
            activeTintColor: Theme.secondaryLight,
        },
    }
)

export default createAppContainer(TabNavigator)