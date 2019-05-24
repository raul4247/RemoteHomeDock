import React, { Component } from 'react'
import TabNavigator from './navigation/TabNavigator'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Reducers } from './reducers/Reducers'

const store = createStore(Reducers)

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <TabNavigator />
            </Provider>
        )
    }
}