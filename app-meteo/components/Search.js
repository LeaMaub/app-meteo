import React, { Component } from 'react'
import style from '../Style.js'
import {TextInput, View, TouchableOpacity, Text, ImageBackground } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import List from './List.js'

const images = [
    require('../assets/meteo1.jpg'),
    require('../assets/meteo2.jpg'),
    require('../assets/meteo3.jpg'),
    require('../assets/meteo4.jpg'),
    require('../assets/meteo5.jpg'),
    require('../assets/meteo6.jpg')
];
class Search extends Component {

    constructor (props) {
        super(props)
        this.state = {
            city: 'Montpellier',
            backgroundImage: this.getRandomImage()
        }
    }

    setCity (city) {
        this.setState({ city })
    }

    submit () {
        this.props.navigation.navigate('Météo -', {city: this.state.city})
    }

    getRandomImage() {
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    }

    componentDidMount() {
        this.setState({backgroundImage: this.getRandomImage()}); 
    }

    render() {
        return (
            <ImageBackground source={this.state.backgroundImage} style={style.imageBackground}>
            <View style={[style.container, style.centeredContainer]}>
                <TextInput
                onChangeText={(text) => this.setCity(text)} //Permet l'autorisation de changement de text dans la barre d'input
                onSubmitEditing={() => this.submit()} 
                onFocus={() => this.setCity('')}
                style={style.input}
                value={this.state.city}
                />
                <TouchableOpacity style={style.button} onPress={() => this.submit()}>
                    <Text style={style.buttonText}>Rechercher</Text>
                </TouchableOpacity>
            </View>
            </ImageBackground>
        )
    }
}

const Stack = createNativeStackNavigator()

export default function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Rechercher ma ville" component={Search} options={{headerStyle: style.header, headerTintColor: '#EBFAFD', headerTitleAlign: 'center'}}/>
            <Stack.Screen name="Météo -" component={List} 
                options={({ route }) => ({
                    title: `Météo - ${route.params.city}`,
                    headerStyle: style.header, 
                    headerTintColor: '#EBFAFD', 
                    headerTitleAlign: 'center'
                })}
            />
        </Stack.Navigator>
    )
}