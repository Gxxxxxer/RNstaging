import { StackNavigator, TabNavigator } from 'react-navigation';
import { HomePage,MyPage,ArrangePage,MyEntryPage } from './index';
import { headerOptions, StackNavigatorConfig } from '../config';

const Routers = StackNavigator(
    {
        HomePage: {
            screen: HomePage,
            navigationOptions: props => {
                return headerOptions({
                    ...props,
                    ...{
                        back: false,
                        navigationOptions:{
                            // 取消头部navigator
                            header: null
                        }

                    },
                    title: HomePage.headTitle
                });
            },
        },
        ArrangePage: {
            screen: ArrangePage,
            navigationOptions: props => {
                // console.log(props)
                // let options = ArrangePage.navigationOptions(props)
                return headerOptions({
                    ...props,
                    ...{
                        back: true

                    },
                    // ...options
                });
            },
        },
        MyPage: {
            screen: MyPage,
            navigationOptions: props => {
                return headerOptions({
                    ...props,
                    ...{
                        back: true,

                    },
                    title: MyPage.headTitle
                });
            },
        },
        MyEntryPage: {
            screen: MyEntryPage,
            navigationOptions: props => {
                // console.log(props)
                // let options = MyEntryPage.navigationOptions(props)
                return headerOptions({
                    ...props,
                    ...{
                        back: true

                    },
                    // ...options
                });
            },
        },
    },
    StackNavigatorConfig({
        initialRouteName: 'HomePage',
    }),
);


export default Routers;
