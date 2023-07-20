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

    switch(type) {
        case 'clouds':
            iconName = 'cloud';
            iconColor = '#696773'
            break;
        case 'rain':
            iconName = 'tint';
            iconColor = '#073B4C'
            break;
        default:
            iconName = 'sun-o';
            iconColor = '#FDEFBC'
    }

    return <Icon name={iconName} size={size} color={iconColor} />;
    }

    date () {
        let day = moment(this.props.day.dt * 1000).format('DD/MM')
        return (
            <Text>{day}</Text>
        )
    }

    render() {
        const dayTemp = this.props.day && this.props.day.main && this.props.day.main.temp;
        if (this.props.index === 0) {
            return (
                <FadeInView >
                    <View style={[style.view, style.flex, style.firstView]}>
                        <View>
                            <Text style={{color: '#FFF'}}>{this.day()}{this.date()}</Text>
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
                            <Text style={{marginLeft: 10}}>{this.day()}{this.date()}</Text>
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
        alignItems: 'center'
    },
    firstView: {
        backgroundColor: '#BC3908'
    },
    view: {
        backgroundColor: globalStyle.color,
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