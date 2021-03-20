// @flow
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {AppRegistry, View} from 'react-native';
import AppNavigator from './navigator';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import rootSaga from './sagas';
import {AppStyles} from './theme';

export default class App extends Component {
  render() {
    const sagaMiddleware = createSagaMiddleware();
    // mount it on the store
    const store = createStore(reducer, applyMiddleware(sagaMiddleware));
    // run the saga
    sagaMiddleware.run(rootSaga);

    return (
      <View style={AppStyles.flex}>
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      </View>
    );
  }
}

AppRegistry.registerComponent('AutoConnect', () => App);
