import React from 'react';
import { View, Image,Text } from 'react-native';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import NavigationButton from './components/NavigationButton';
// import Logo from './common/assets/logo.png';

const headerOptions = props => {
    const { navigation, navigationOptions, visible = true, back = false,backPress, right = false ,title } = props;
    const { goBack } = navigation;
    const headerLeft = back ? (
        <NavigationButton
            name="back"
            callback={() => {
                if(navigationOptions.backPress){
                    navigationOptions.backPress()
                }else{
                    goBack(null);
                }

            }}
        />
    ) : (
            <View />
        );

    const headerRight = right ? (
        NavigationButton([
            {
                name: 'share',
                callback: () => {
                    console.log('this is my share button');
                },
            },
            {
                name: 'reload',
                callback: () => {
                    console.log('this is my search button');
                },
            },
        ])
    ) : (
            <View />
        );

    const header = visible === false ? null : undefined;
    const headerTitle = (
        title && <Text
            style={{
                color:'#fff',
                fontSize:17,
                alignSelf: 'center',
            }}
        >{title}</Text>
    );

    return {
        headerTitle,
        headerLeft,
        headerRight,
        header,
        ...navigationOptions,
    };
};




const StackNavigatorConfig = options => {
    const { initialRouteName: InitialRouteName = '' } = options;
    return {
        initialRouteName: InitialRouteName,
        navigationOptions: {
            // 路由页面的配置选项，它会被 RouteConfigs 参数中的 navigationOptions 的对应属性覆盖。
            headerTitleStyle: { fontSize: 17, alignSelf: 'center', color: '#fff' },
            headerStyle: {
                height: 44,
                backgroundColor: '#589BFF',
            },
        },
        mode: 'card', // 页面跳转方式 card - 原生系统默认的的跳转;modal - 只针对iOS平台，模态跳转
        headerMode: 'screen', // float - 渐变，类似iOS的原生效果;screen - 标题与屏幕一起淡入淡出;none - 没有动画
        cardStyle: { backgroundColor: '#fff' }, // 为各个页面设置统一的样式，比如背景色，字体大小等
        transitionConfig: () => ({
            // 配置页面跳转的动画，覆盖默认的动画效果
            screenInterpolator: CardStackStyleInterpolator.forHorizontal,
        }),
    };
};

module.exports = {
    headerOptions,
    StackNavigatorConfig,
};
