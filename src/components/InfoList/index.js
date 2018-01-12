/**
 *  Created by wangjun on 2017/12/12.
 **/
import React from 'react'
import {
    Text,
    Image,
    View,
    TouchableOpacity,
    TouchableHighlight,
    StyleSheet
} from 'react-native';

export default class InfoList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            icon:require('../../common/assets/Bitmap.png')
        }
    }
    componentDidMount(){
        const {iconUrl} = this.props;
        // 图片加载失败
        iconUrl && Image.prefetch(iconUrl).then((result) => {
            //当预下载成功时，返回值result是true
            this.setState({
                icon:{uri:iconUrl}
            })
        }).catch((error) => {
            //预下载图片失败
            this.setState({
                icon:require('../../common/assets/Bitmap.png')
            })
        });
    }
    _renderHasArrow(propsStyle,leftTitle,rightTitle,callback){
        return (
            <TouchableOpacity
                onPress={()=>callback && callback()}
                style={[styles.list,propsStyle]}
            >
                <Text>{leftTitle}</Text>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.rightTitle}>{rightTitle}</Text>
                    <Image
                        style={{width:9,height:16,marginLeft:5}}
                        source={require('../../common/assets/grxx_btn_next.png')}
                    />
                </View>
            </TouchableOpacity>
        )
    }
    _renderNoArrow(isIcon,titleIcon,propsStyle,leftTitle,rightTitle){
        return (
            <View
                style={[styles.list,propsStyle]}
            >
                <Text>{leftTitle}</Text>
                {isIcon ?
                    <Image
                        style={{width:40,height:40}}
                        source={this.state.icon}
                    /> :
                    titleIcon ?
                        <View style={{flexDirection:'row'}}>
                            <Image
                                style={{width:16,height:16,paddingRight:0}}
                                source={require('../../common/assets/grxx_icon_v.png')}
                            /><Text style={styles.rightTitle}>{rightTitle}</Text>
                        </View>
                        : <Text style={styles.rightTitle}>{rightTitle}</Text>
                }

            </View>
        )
    }
    render(){
        const {isIcon=false,titleIcon=false,propsStyle={},leftTitle,rightTitle,arrowIcon,callback} = this.props
        return arrowIcon ?
            this._renderHasArrow(propsStyle,leftTitle,rightTitle,callback) :
            this._renderNoArrow(isIcon,titleIcon,propsStyle,leftTitle,rightTitle)
    }
}

const styles = StyleSheet.create({
    list:{
        height:55,
        backgroundColor:'#fff',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:15,
        paddingRight:20
    },
    rightTitle:{
        color: '#83889A'
    }
})