/**
 *  Created by wangjun on 2017/12/14.
 **/
import React from 'react'
import {Platform,BackHandler} from 'react-native'
export default class BackPressComponent extends React.Component{
    constructor(props){
        super(props)
        this.onBackAndroid=this.onBackAndroid.bind(this)
        this.props = props
    }
    componentDidMount() {
        if (Platform.OS === 'android') {
            BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }
    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    onBackAndroid(){
        const routers = this.props.routes;
        if (routers.length > 1) {
            this.props.navigation.dispatch(NavigationActions.back());
            return true;
        } else {
            if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
                //最近2秒内按过back键，可以退出应用。
                return false;
            }
            this.lastBackPressed = Date.now();
            //toastShort('再按一次退出应用');
            return true;
        }
    }
}