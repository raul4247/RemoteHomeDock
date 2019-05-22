import react from 'react'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from '../screens/HomeScreen'
import ConfigScreen from '../screens/ConfigScreen'

const TabNavigator = createBottomTabNavigator({
    Home: { screen: HomeScreen },
    Configs: { screen: ConfigScreen },
})

export default createAppContainer(TabNavigator)