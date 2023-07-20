import React, { Component } from 'react'
import style from '../Style'
import axios from 'axios'
import WeatherRow from './weather/WeatherRow'
import {ActivityIndicator, View, FlatList} from 'react-native'

export default class List extends Component {

    constructor (props) {
        super (props)
        this.state = {
            city: this.props.route.params.city,
            report: null
        }
        setTimeout(() => {
            this.fetchWeather()
        }, 100)
    }

    fetchWeather () {
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&units=metric&appid=8edfaa4677700ebd2cdfb4773ba180a6`
        )
        .then((response) => {
            this.setState({report: response.data})
        })
    }

    render() {
        if (this.state.report === null ) {
            return (
                <ActivityIndicator color={"#F3C98B"} size="large"/>
            )
        } else {
            return (
                <View>
                    <FlatList
                        data={this.state.report.list}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item, index}) => <WeatherRow day={item} index={index}/>}
                    />
                </View>
        )
        }
    }
}