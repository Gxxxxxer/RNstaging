/**
 *  Created by wangjun on 2017/12/15.
 **/
'use strict';
import React from 'react';
import createReactClass from 'create-react-class';
import {
    PanResponder,
    StyleSheet,
    View,
    Dimensions
} from 'react-native';

var CIRCLE_SIZE = Dimensions.get('window').width;
var PanResponderExample = createReactClass({
    displayName: 'PanResponderExample',

    statics: {
        title: 'PanResponder Sample',
        description: 'Shows the use of PanResponder to provide basic gesture handling.',
    },

    _panResponder: {},
    _previousTop: 0,
    _circleStyles: {},
    circle: (null : ?{ setNativeProps(props: Object): void }),

    componentWillMount: function() {
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
            onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
            onPanResponderGrant: this._handlePanResponderGrant,
            onPanResponderMove: this._handlePanResponderMove,
            onPanResponderRelease: this._handlePanResponderEnd,
            onPanResponderTerminate: this._handlePanResponderEnd,
        });
        this.show = false;
        this._previousTop = Dimensions.get('window').height-64-60;
        this._circleStyles = {
            style: {
                left: this._previousLeft,
                top: this._previousTop,
                backgroundColor: 'green',
            }
        };
    },

    componentDidMount: function() {
        console.log(this.props)
        this._updateNativeStyles();
    },

    render: function() {
        return (
            <View
                style={styles.container}>
                <View
                    ref={(circle) => {
                        this.circle = circle;
                    }}
                    style={styles.circle}
                    {...this._panResponder.panHandlers}
                />
            </View>
        );
    },

    _highlight: function() {
        this._circleStyles.style.backgroundColor = 'blue';
        this._updateNativeStyles();
    },

    _unHighlight: function() {
        this._circleStyles.style.backgroundColor = 'green';
        this._updateNativeStyles();
    },

    _updateNativeStyles: function() {
        this.circle && this.circle.setNativeProps(this._circleStyles);
    },

    _handleStartShouldSetPanResponder: function(e: Object, gestureState: Object): boolean {
        // Should we become active when the user presses down on the circle?
        return true;
    },

    _handleMoveShouldSetPanResponder: function(e: Object, gestureState: Object): boolean {
        // Should we become active when the user moves a touch over the circle?
        return true;
    },

    _handlePanResponderGrant: function(e: Object, gestureState: Object) {
        this._highlight();
    },
    _handlePanResponderMove: function(e: Object, gestureState: Object) {
        if(gestureState.dy<0 && this._circleStyles.style.top+CIRCLE_SIZE<Dimensions.get('window').height-64){

            return;
        }else if(gestureState.dy>0 && this._circleStyles.style.top>Dimensions.get('window').height-64-60){

            return;
        }
        // console.log(this._circleStyles.style.top)
        this._circleStyles.style.top = this._previousTop + gestureState.dy;
        this._updateNativeStyles();
    },
    _handlePanResponderEnd: function(e: Object, gestureState: Object) {
        this._unHighlight();

        if( gestureState.dy <= -50 && !this.show){
            this._circleStyles.style.top = Dimensions.get('window').height-64 - CIRCLE_SIZE;
            this.show = false;
            this._updateNativeStyles();
        }else if( gestureState.dy >= 50 && this.show){
            this._circleStyles.style.top = Dimensions.get('window').height-64-60;
            this.show = true;
            this._updateNativeStyles();
        }else{
            this._circleStyles.style.top = this.show?Dimensions.get('window').height-64 - CIRCLE_SIZE:Dimensions.get('window').height-64-60;
            this._updateNativeStyles();
        }
        this._previousTop = this._circleStyles.style.top;
    },
});

const styles = StyleSheet.create({
    circle: {
        width: CIRCLE_SIZE,
        height: CIRCLE_SIZE,
        position: 'absolute',
        left: 0,
        top: 0,
    },
    container: {
        flex: 1,
        paddingTop: 64,
    },
});

module.exports = PanResponderExample;