/**
 *  Created by wangjun on 2017/12/14.
 **/
import React from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Alert,
    Dimensions
} from 'react-native'

export default class EnterInfo extends React.Component{
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: navigation.state.params?navigation.state.params.title:null,
        backPress:navigation.state.params?navigation.state.params.navigatePress:null
    })
    constructor(props){
        super(props)

    }
    navigatePress = async () => {
        let test = await 1
        test && this.props.navigation.goBack(null)
    }
    componentDidMount(){
        // 如何在静态方法中使用this
        this.props.navigation.setParams({
            navigatePress:this.navigatePress
        })
    }
    render(){
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    multiline
                    defaultValue={this.props.navigation.state.params.defaultInfo}
                />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F5F6F9'
    },
    input:{
        width:Dimensions.get('window').width,
        backgroundColor:'#fff',
        height:186
    }
})