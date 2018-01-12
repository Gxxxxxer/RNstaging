/**
 *  Created by wangjun on 2017/12/28.
 **/
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { AsyncStorage } from 'react-native'
import SplashScreen from 'react-native-splash-screen';
import configureStore from './app/store/configureStore';
import rootSaga from './app/sagas';
import App from './test';

const store = configureStore();
// run root saga
store.runSaga(rootSaga);

export default class Root extends Component {
    constructor(props){
        super(props)


    }

    componentDidMount() {
        // 设置白屏，后续研究
        // SplashScreen.hide(); // 隐藏启动屏
    }

    render() {
        return (
            <Provider store={store}>
                <App
                    ref={ref => {
                        this.rootNav = ref;
                    }}
                />
            </Provider>
        );
    }
}
