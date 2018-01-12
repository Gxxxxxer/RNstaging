/**
 *  Created by wangjun on 2017/12/11.
 **/
import React from 'react'
import {
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

const Button  = (props) => {
    return (
        <TouchableOpacity
            onPress={() => props.callback && props.callback()}
        >
        <LinearGradient
            colors={['#4FA4FE', '#2C77FF']}
            style={styles.linearGradient}
            start={{x: 0.0, y: 0.0}}
            end={{x: 1.0, y: 1.0}}
        >
            <Text style={[props.style,styles.btn]}>{props.text}</Text>
        </LinearGradient></TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    linearGradient: {
        borderRadius: 100,
        shadowOffset:{ width:4, height:4 },
        shadowColor:'rgb(99,167,255)',
        shadowOpacity:0.61,
        shadowRadius:10,
    },
    btn:{
        color:'#fff',
        backgroundColor: 'transparent',
    }
})

export default Button