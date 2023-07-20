import React, {Component} from 'react'
import { Animated, Dimensions } from 'react-native'

export default class FadeInView extends Component {
    constructor(props) {
        super(props)
        let {width} = Dimensions.get('window')
        this.state= {
            pan: new Animated.ValueXY({x: width, y: 0})
        }
    }

    componentDidMount () {
        Animated.sequence([
            Animated.delay(this.props.delay),
            Animated.spring(
                this.state.pan,
                {
                    toValue: {x: 0, y:0},
                    friction: 5,
                    tension: 40, 
                    useNativeDriver: false
                }
            )
        ]).start()
        
    }
    render() {
        return (
            <Animated.View style={{
                ...this.props.style,
                transform: this.state.pan.getTranslateTransform()
            }}>
                {this.props.children}
            </Animated.View>
        )
    }
}