import react from 'react'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from '../screens/HomeScreen'

const TabNavigator = createBottomTabNavigator({
    Home: { screen: HomeScreen },
})

export default createAppContainer(TabNavigator)