import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight, Animated, Easing } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
    parent: {
        backgroundColor: '#e8c962'
    },
    container: {
        justifyContent: 'space-between',
        overflow:'hidden',
    },
    titleContainer : {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title       : {
        flex    : 1,
        paddingBottom : 17,
        fontWeight:'100',
        fontSize: 26,
        fontFamily: 'Roboto',
        textShadowColor: '#ffe26f',
        textShadowRadius: 2,
    },
    icon       : {
        flex    : 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25,
        marginBottom: 18,
    },
    button      : {

    },
    buttonImage : {
        width   : 30,
        height  : 25
    },
    body        : {
        paddingBottom     : 10,
        flex    : 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
    },
    shadowContainer      : {
        height: 7,
        position: 'absolute',
        left:     0,
        right:      0,
        zIndex:   1,
    }
});

export default class ItemContainer extends Component {
    
    constructor(props){
        super(props);

        this.icons = {     //Step 2
            'Coffee'    : require('../assets/Coffee.png'),
            'Drink'  : require('../assets/Drink.png'),
            'Food'  : require('../assets/Food.png'),
            'Sweet'  : require('../assets/Sweet.png'),
        };

        this.state = {       //Step 3
            title       : props.title,
            expanded    : false,
            initializedHeight : false,
            initializedMaxHeight : false,
            animation   : new Animated.Value(),
            background  : props.background,
            background2  : props.background2,
            titleColor: props.titleColor,
            underlayColor: props.underlayColor,
            image: props.image
        };
        
    }

    _setMaxHeight(event){
        if(!this.state.initializedMaxHeight && event.nativeEvent.layout.height > 0) {
            this.setState({
                maxHeight   : event.nativeEvent.layout.height,
                initializedMaxHeight: true
            });
        }
    }

    _setMinHeight(event){
        if(!this.state.initializedHeight && event.nativeEvent.layout.height > 0) {
            this.setState({
                minHeight   : event.nativeEvent.layout.height,
                initializedHeight: true
            });
            this.state.animation.setValue(event.nativeEvent.layout.height);  //Step 3
        }
    }

    toggle() {
        //Step 1
        let initialValue    = this.state.expanded? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
            finalValue      = this.state.expanded? this.state.minHeight : this.state.maxHeight + this.state.minHeight;

        this.setState({
            expanded : !this.state.expanded  //Step 2
        });

        this.state.animation.setValue(initialValue);  //Step 3
        Animated.spring(     //Step 4
            this.state.animation,
            {
                toValue: finalValue,
                easing: Easing.back,
            }
        ).start();  //Step 5
    }

    render() {
        let icon = this.icons[this.state.image];

        return (
            <LinearGradient start={{x: 0.0, y: 1}} end={{x: 1, y: 0.0}} colors={[this.state.background == null ? '#ffe26f' : this.state.background, this.state.background2 == null ? '#e8c962' : this.state.background2]} style={[styles.parent, { elevation: this.state.elevation }]}>
                    <TouchableHighlight 
                            style={styles.button} 
                            onPress={this.toggle.bind(this)}
                            underlayColor={this.props.underlayColor == null ? '#ffe26f' : this.props.underlayColor}>
                        <Animated.View style={[styles.container, {height: this.state.animation}]}>
                            <LinearGradient colors={['rgba(0,0,0,.3)', 'rgba(0,0,0,0)']} style={styles.shadowContainer}>
                            </LinearGradient>
                            <View style={styles.titleContainer} onLayout={this._setMinHeight.bind(this)}> 
                                <Image style={styles.icon} source={icon} />
                                <Text style={[styles.title, {color: this.state.titleColor == null ? '#e07556' : this.state.titleColor }]}>{this.state.title}</Text>
                            </View>
                            <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}> 
                                {this.props.children}
                            </View>
                        </Animated.View>
                    </TouchableHighlight>
            </LinearGradient>
        );
    }
}

//1. We set the initial and final value, in here we are using the limits from the previous steps. If the component is expanded we set the height to the minimal value, otherwise to the maximum value.
//2. We need to toggle the expanded value.
//3. Using the Animated.Value instance, we set the initial value for this animation.
//4. We use the Animated.spring method to run the animation. This method does all the calculations and set the value for each frame to the Animated.Value instance we declared in the constructor. We are also setting the end value of the animation, by using an object as a second parameter.
//5. We call the start method to run all the calculations.
//6. First we add the onLayout listener to the title view. The _setMinHeight method will be called when the title gets rendered.
//7. Then we add the onLayout listener to the body view. In this case the _setMaxHeight method will be executed when the body gets rendered.