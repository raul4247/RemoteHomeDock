import React, { Component } from 'react'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Reducers } from './reducers/Reducers'

import TabNavigator from './navigation/TabNavigator'

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