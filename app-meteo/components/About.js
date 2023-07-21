import React, {Component} from 'react'
import style from '../Style.js'
import {View, Text, TouchableOpacity } from 'react-native'

export default class About extends Component {

    search() {
        this.props.navigation.navigate('Rechercher une ville')
    }

    render () {
        return (
            <View style={style.container}>
                <Text style={style.title}>À  propos de l'application</Text>
                <Text style={style.about}>
                    Chez <Text style={style.highlight}>Ma Météo</Text>, nous nous efforçons de vous offrir des informations météorologiques précises et à jour qui vous aident à planifier votre journée. 
                    Ma Météo est une application simple et efficace, créée en 2023, conçue pour vous connecter à votre environnement de la manière la plus directe et 
                    compréhensible possible.
                    Ma Météo utilise une API puissante pour vous fournir des prévisions météorologiques locales et internationales fiables et à jour. Que vous ayez 
                    besoin de connaître la température, les conditions climatiques, la prochaine journée ou la semaine à venir, Ma Météo est là pour vous.
                </Text>
                <Text style={style.thanks}>Merci d'avoir choisi <Text style={style.highlight}>Ma Météo</Text>. Je suis honorée de faire partie de votre quotidien.</Text>
                <TouchableOpacity style={style.button} onPress={() => this.search()}>
                    <Text style={style.buttonText}>Rechercher une ville</Text>
                </TouchableOpacity>
            </View>
        )
    }
}