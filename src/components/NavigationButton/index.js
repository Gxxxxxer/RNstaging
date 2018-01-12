import React from 'react';
import {
    Image
} from "react-native";
import { TouchableOpacity } from 'react-native';
const IconStyle = {
    width:10,
    height:18,
    marginLeft:10
}
const runCallback = options => {
    const { callback } = options;
    let Icon = '';
    let IconStyle = {};
    if(options.name === 'back'){
        Icon = require('../../common/assets/ic_back.png')
        IconStyle = {
            width:10,
            height:18,
            marginLeft:10
        }
    }
    const buttons =
        callback && typeof callback === 'function' ? (
            <TouchableOpacity onPress={callback}>
                <Image source={Icon} style={IconStyle}/>
            </TouchableOpacity>
        ) : (
            <Image source={Icon} style={IconStyle}/>
            );

    return buttons;
};

const NavigationButton = props => {
    const propsLength = props.length;
    let Buttons = null;
    if (propsLength >= 1) {
        props.map(item => {
            Buttons = runCallback(item);
            return null;
        });
    } else {
        Buttons = runCallback(props);
    }
    return Buttons;
};
export default NavigationButton;
