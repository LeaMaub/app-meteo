import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {View, Text, StyleSheet} from 'react-native'
import moment from 'moment'
import 'moment/locale/fr'
import FadeInView from '../animation/FadeInView'
import globalStyle from '../../Style'
import Icon from 'react-native-vector-icons/FontAwesome';


moment.locale('fr')

export default class WeatherRow extends Component {

    static propTypes = {
        day: PropTypes.object,
        index: PropTypes.number
    }

    day () {
        let day = moment(this.props.day.dt * 1000).format('ddd')
        return (
            <Text style={[style.white, style.bold]}>{day.toUpperCase()}</Text>
        )
    }

    icon (size = 50) {
        const type = this.props.day.weather[0].main.toLowerCase()
        let iconName
        let iconColor
        let iconStyle = {}

    switch(type) {
        case 'clouds':
            iconName = 'cloud';
            iconColor = '#696773'
            break;
        case 'rain':
            iconName = 'tint';
            iconColor = '#073B4C'
            iconStyle = { marginLeft: 10 }
            break;
        default:
            iconName = 'sun-o';
            iconColor = '#FDEFBC'
    }

    return <Icon name={iconName} size={size} color={iconColor} style={iconStyle} />;
    }

    date () {
        let day = moment(this.props.day.dt * 1000).format('DD/MM')
        return (
            <Text>{day}</Text>
        )
    }

    render() {
        const dayTemp = this.props.day && this.props.day.main && this.props.day.main.temp;
        const type = this.props.day.weather[0].main.toLowerCase()
        let textStyle = {}

        if (type === 'rain') {
            textStyle = { marginLeft: 35 }
        }

        if (this.props.index === 0) {
            return (
                <FadeInView >
                    <View style={[style.view, style.flex, style.firstView]}>
                        <View style={{alignItems: 'center'}}>
                            <Text style={{color: '#FFF', marginBottom: 20, ...textStyle}}>{this.day()}{this.date()}</Text>
                            {this.icon(90)}
                        </View>
                    <Text style={[style.temp, {fontSize: 35}]}>{dayTemp ? Math.round(dayTemp) + '°C' : ''}</Text>
                    </View>
                </FadeInView>
                )
        } else {
            return (
                <FadeInView>
                    <View style={[style.view, style.flex]}>
                        <View style={style.flex}>
                            {this.icon()}
                            <Text style={{marginLeft: 20, ...textStyle}}>{this.day()}{this.date()}</Text>
                        </View>
                        <Text style={style.temp}>{dayTemp ? Math.round(dayTemp) + '°C' : ''}</Text>
                    </View>
                </FadeInView>
            )
        }
        
    }
}

const style = StyleSheet.create({
    white: {
        color: '#FFF'
    },
    bold: {
        fontWeight: 'bold'
    },
    flex: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20
    },
    firstView: {
        backgroundColor: '#95D9DA'
    },
    view: {
        backgroundColor: '#F1BF98',
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#FDEFBC',
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: 'space-between',
    },
    temp: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 22
    }
})