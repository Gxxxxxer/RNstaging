/**
 *  Created by wangjun on 2017/12/15.
 **/
import React from 'react'
import {
    View,
    Text,
    ScrollView,
    StyleSheet
} from 'react-native'

export default class ArrangePage extends React.Component{
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: navigation.state.params?navigation.state.params.title:null,
        backPress:navigation.state.params?navigation.state.params.navigatePress:null
    })
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.type}>
                    <View style={styles.list}>
                        <Text style={{fontSize:15}}>图文问诊</Text>
                    </View>
                    <View style={{borderBottomWidth:2,borderBottomColor:'rgba(229, 234, 240,0.42)',marginBottom:1}}/>
                    <View style={[styles.list,styles.borderT]}>
                        <Text>每日接单上限</Text>
                        <Text>32单</Text>
                    </View>
                </View>
                <View style={styles.type}>
                    <View style={styles.list}>
                        <Text style={{fontSize:15}}>视话问诊</Text>
                    </View>
                    <View style={{borderBottomWidth:2,borderBottomColor:'rgba(229, 234, 240,0.42)',marginBottom:1}}/>
                    <View style={[styles.list,styles.borderT]}>
                        <View style={styles.leftBorder}/>
                        <View
                            style={{alignItems:'center',flexDirection:'column'}}
                        >
                            <View style={{width:100}}><Text style={styles.dateStyle}>今天</Text></View>
                            <View style={{width:100}}><Text style={styles.dateNumStyle}>2017-08-04</Text></View>
                        </View>
                        <View
                            style={{alignItems:'center',flexDirection:'column',}}
                        >
                            <View><Text style={styles.rightTime}>09:00-16:00</Text></View>
                            <View><Text style={styles.rightTime}>18:00-20:00</Text></View>
                        </View>
                    </View>
                    <View style={[styles.list,styles.borderT]}>
                        <View
                            style={{alignItems:'center',flexDirection:'column'}}
                        >
                            <View style={{width:100}}><Text style={styles.dateStyle}>周五</Text></View>
                            <View style={{width:100}}><Text style={styles.dateNumStyle}>2017-08-04</Text></View>
                        </View>
                        <View
                            style={{alignItems:'center',flexDirection:'column'}}
                        >
                            <View><Text>09:00-16:00</Text></View>
                            <View><Text>18:00-20:00</Text></View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F5F6F9',
        paddingLeft:5,
        paddingRight:5
    },
    type:{
        backgroundColor:'#fff',
        borderRadius:8,
        paddingLeft:15,
        paddingRight:15,
        marginTop:15
    },
    borderT:{
        borderTopWidth:1,
        borderTopColor:'rgba(229, 234, 240,0.42)'
    },
    list:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingTop:14,
        paddingBottom:14

    },
    dateStyle:{
        fontSize: 14,
        color: '#28354C',
        textAlign:'left',
        marginBottom:3
    },
    dateNumStyle:{
        fontSize:12,
        color:'#A6A8B6'
    },
    rightTime:{
        color:'#28354C',
    },
    leftBorder:{
        position:'absolute',
        left:-15,
        top:20,
        // marginTop:-10,
        width:3,
        height:20,
        backgroundColor:'#589BFF',
    }
})