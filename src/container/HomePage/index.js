import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    StatusBar,
    Alert,
    TouchableOpacity,
    InteractionManager,
    NativeModules,
    NativeAppEventEmitter
} from "react-native";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as homeActions from '../../app/actions/home'

import Button from '../../components/Button'

var PushNative = NativeModules.TestAddNative
function mapStateToProps(state, props) {
    return {
        ...state.home
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(homeActions, dispatch)
    }
}
@connect(mapStateToProps, mapDispatchToProps)
export default class HomePage extends React.Component{
    static headTitle = '首页'
    constructor(props){
        super(props)
        this.state = {
            test:0
        }
    }
    componentWillMount(){
        // this.setState((preState,props) => ({test:preState.test +1}))
        // this.setState((preState,props) => ({test:preState.test +1}))
        this.setState({
            test:this.state.test +1
        })
        this.setState({
            test:this.state.test +1
        })
    }
    
    componentDidMount() {
        this.setState({
            test:this.state.test +1
        })
        this.setState({
            test:this.state.test +1
        })
        console.log(this.state)
        // this.props.actions.FETCH()
        // this.props.navigation.setParams({
        //     headerTitle: 'Detail1',
        //     // navigatePress: this.navigatePress,
        // });

    }
    componentWillUnmount(){
        alert('end')
    }
    toPage(options){
        // codePush.sync({
        //     updateDialog: {
        //         optionalIgnoreButtonLabel: '稍后',
        //         optionalInstallButtonLabel: '立即更新',
        //         optionalUpdateMessage: '有新版本了，是否更新？',
        //         title: '更新提示'
        //     },
        //     mandatoryInstallMode: codePush.InstallMode.IMMEDIATE,
        //     deploymentKey:'HmjywGBRqrhmpwvKweXeK96Rx9fI811eadc6-07b1-440a-960c-8adaf48dec66'
        // })
        // InteractionManager.runAfterInteractions(()=> {
        //     PushNative.popToView('pop');
        // });
        // Text才有onPress属性
        this.props.navigation.navigate(options.page,{
            ...options.other
        })
    }
    render() {
        console.log(this.state)
        return (
            <View
                style={styles.container}
            >
                <StatusBar
                    barStyle="light-content"
                />
                {/*背景图*/}
                <Image
                    source={require('../../common/assets/index_pic_banner.png')}
                    style={styles.bgImage}
                />
                <View style={styles.topContainer}>
                    {/*to Mypage*/}
                    <TouchableOpacity onPress={() => this.toPage({page:'MyPage'})}>
                        <Image
                            source={require('../../common/assets/Bitmap.png')}
                            style={{
                                width:40,
                                height:40,
                            }}
                        />
                    </TouchableOpacity>
                    {/*to Arrangepage*/}
                    <TouchableOpacity onPress={() => this.toPage({page:'ArrangePage',other:{title:'排班'}})}>
                        <Image
                            source={require('../../common/assets/index_btn_pb.png')}
                            style={{
                                width:20,
                                height:20,
                            }}
                        />
                    </TouchableOpacity>
                </View>
                {/*中间文字*/}
                <View
                    style={[styles.midText,{marginTop:100}]}
                >
                    <Text
                        style={{
                            fontSize:34,
                            color:'#fff',
                            lineHeight:48
                        }}
                    >空闲时间能赚钱</Text>
                </View>
                <View
                    style={styles.midText}
                >
                    <Text
                        style={{
                            fontSize:24,
                            color:'#fff'
                        }}
                    >轻松接单  月入过万</Text>
                </View>
                <View
                    style={{flex:1,flexDirection:'row',height:40,marginTop:'50%'}}
                >
                    <View
                        style={{flexGrow:1,}}
                    >
                        <Text style={{textAlign:'center',backgroundColor:'transparent',fontSize:24,color:'#28354C'}}>20</Text>
                        <View>
                            <Text style={{textAlign:'center',backgroundColor:'transparent',fontSize:14,color:'#C4C5CE',marginTop:5}}>今日接诊量</Text>
                        </View>
                    </View>
                    <View
                        style={{flexGrow:1,}}
                    >
                        <Text style={{textAlign:'center',backgroundColor:'transparent',fontSize:24,color:'#28354C'}}>20</Text>
                        <View>
                            <Text style={{textAlign:'center',backgroundColor:'transparent',fontSize:14,color:'#C4C5CE',marginTop:5}}>今日接诊量</Text>
                        </View>
                    </View>
                    <View style={{width:1,height:30,backgroundColor:'#E5EAF0',position:'absolute',left:'50%',top:10}}></View>
                </View>
                {/*底部按钮*/}
                <View
                    style={{
                        flexDirection:'row',
                        position:'absolute',
                        bottom:20,
                        left:'50%',
                        marginLeft:-142
                    }}
                >
                    <Button
                        text="点击接诊"
                        callback={() => {
                            InteractionManager.runAfterInteractions(()=> {
                                PushNative.RNOpenOneVC('测试');
                            });
                        }}
                        style={{
                            fontSize:20,
                            width:284,
                            textAlign:'center',
                            lineHeight:55,
                        }}
                    />
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    bgImage:{
        position:'absolute',
        width:'100%',
        height:434
    },
    topContainer:{
        // position:'absolute',
        marginTop:30,
        marginLeft:13,
        marginRight:13,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    midText:{
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor:'transparent'
    }
})
