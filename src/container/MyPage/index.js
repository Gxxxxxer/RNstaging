import React from "react";
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    NativeModules,
    InteractionManager
} from "react-native";
import BackPressComponent from '../../components/BackPressComponent'
import { ActionSheetCustom as ActionSheet } from '../../components/BottomAlert'
import InfoList from '../../components/InfoList'
const CANCEL_INDEX = 0
const DESTRUCTIVE_INDEX = 2
const options = [ '取消','确认退出' ]
const title = '退出后不会删除任何数据'
var PushNative = NativeModules.TestAddNative
export default class MyPage extends React.Component {
    constructor(props){
        super(props)
        this.backpress = new BackPressComponent(props)
    }
    static headTitle = '个人信息'
    componentDidMount(){
        this.backpress.componentDidMount()
    }
    setInfo(title,defaultInfo){
        this.props.navigation.navigate('MyEntryPage',{
            title:title,
            defaultInfo:defaultInfo,
        })
    }
    logout(){
        InteractionManager.runAfterInteractions(()=> {
            PushNative.RNOpenOneVC('测试');
        });
        // this.ActionSheet.show()
    }
    render() {
        return (
            <ScrollView
                style={styles.container}
            >
                <View style={styles.viewBg}>
                    <InfoList
                        leftTitle={"头像"}
                        isIcon={true}
                        iconUrl={{uri:'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=608288396,272&fm=173&s=0AE07A2208B147A5221174D901005060&w=540&h=586&img.JPG'}}
                    />
                    <View style={styles.lineX}></View>
                    <InfoList
                        leftTitle={"姓名"}
                        rightTitle={"苏烈"}
                    />
                    <View style={styles.lineX}></View>
                    <InfoList
                        leftTitle={"性别"}
                        rightTitle={"男"}
                    />
                </View>

                <InfoList
                    leftTitle={"实名认证"}
                    rightTitle={"已认证"}
                    titleIcon={true}
                    propsStyle={{marginTop:10,marginBottom:10}}
                />
                <View style={styles.viewBg}>
                    <InfoList
                        leftTitle={"医院"}
                        rightTitle={"微医门诊部"}
                    />
                    <View style={styles.lineX}></View>
                    <InfoList
                        leftTitle={"科室"}
                        rightTitle={"小儿呼吸科"}
                    />
                    <View style={styles.lineX}></View>
                    <InfoList
                        leftTitle={"职称"}
                        rightTitle={"主治医师"}
                    />
                </View>
                <View style={[styles.viewBg,{marginTop:10,marginBottom:10}]}>
                    <InfoList
                        arrowIcon={true}
                        leftTitle={"擅长"}
                        callback={()=>this.setInfo("擅长","强迫症，精神衰弱")}
                        rightTitle={"强迫症，精神衰弱"}
                    />
                    <View style={styles.lineX}></View>
                    <InfoList
                        arrowIcon={true}
                        leftTitle={"擅长"}
                        callback={()=>this.setInfo("擅长","强迫症，精神衰弱")}
                        rightTitle={"强迫症，精神衰弱"}
                    />
                </View>

                <TouchableOpacity
                    onPress={()=>{this.logout()}}>
                    <Text
                        style={{
                            backgroundColor:'#fff',
                            lineHeight:55,
                            width:Dimensions.get('window').width,
                            textAlign:'center',
                            marginBottom:8,
                            fontSize: 16,
                            color: '#FF0000'
                        }}
                    >安全退出</Text>
                </TouchableOpacity>
                <ActionSheet
                    ref={o => this.ActionSheet = o}
                    title={title}
                    message={'你好'}
                    tintColor={'red'}
                    options={options}
                    cancelButtonIndex={CANCEL_INDEX}
                    destructiveButtonIndex={DESTRUCTIVE_INDEX}
                    onPress={this.handlePress}
                />
            </ScrollView>


        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F5F6F9',
    },
    viewBg:{
        backgroundColor:'#fff'
    },
    lineX:{
        height:1,
        width:Dimensions.get('window').width -15,
        marginLeft:15,
        backgroundColor:'#F5F6F9'
    }
})