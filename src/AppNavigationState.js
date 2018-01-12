import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers,NavigationActions } from 'react-navigation';
import Routers from './routers/app';
import { AsyncStorage } from 'react-native'
import SplashScreen from 'react-native-splash-screen';
@connect(state => ({ nav: state.nav }))
export default class AppWithNavigationState extends Component {
    componentWillMount(){
        // AsyncStorage.setItem('test',JSON.stringify('66'))

    }
    async componentDidMount(){
        // let data = await AsyncStorage.getItem('test')
        // const resetAction = NavigationActions.reset({
        //     index: 0,
        //     actions: [
        //         NavigationActions.navigate({routeName: 'MyPage', params: { token: '123456' }})
        //     ]
        // })
        //
        // data && this.props.dispatch(resetAction);
        SplashScreen.hide()
    }
    render() {
        const { dispatch, nav } = this.props;
        return (
            <Routers navigation={addNavigationHelpers({
                dispatch,
                state: nav,
            })}
            />
        );
    }
}