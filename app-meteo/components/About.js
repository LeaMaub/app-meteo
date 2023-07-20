import React, {Component} from 'react'
import style from '../Style.js'
import {View, Text, TouchableOpacity  } from 'react-native'

export default class About extends Component {

    search() {
        this.props.navigation.navigate('Rechercher une ville')
    }

    render () {
        return (
            <View style={style.container}>
                <Text style={style.title}>A propos de l'application</Text>
                <Text>
                    Lorem ipsum dolor sit amet ...
                </Text>
                <TouchableOpacity style={style.button} onPress={() => this.search()}>
                    <Text style={style.buttonText}>Rechercher une ville</Text>
                </TouchableOpacity>
            </View>
        )
    }
}