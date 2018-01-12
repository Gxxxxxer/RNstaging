/**
 *  Created by wangjun on 2017/12/11.
 **/
import { Platform } from 'react-native'
import _ActionSheetIOS from './ActionSheetIOS'
import _ActionSheetCustom from './ActionSheetCustom'

export const ActionSheetCustom = _ActionSheetCustom

let ActionSheet

if (Platform.OS === 'ios') {
    ActionSheet = _ActionSheetIOS
} else {
    ActionSheet = _ActionSheetCustom
}

export default ActionSheet