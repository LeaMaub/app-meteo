import React, { Component } from 'react'
import style from '../Style.js'
import {TextInput, View, TouchableOpacity, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import List from './List.js'

class Search extends Component {

    constructor (props) {
        super(props)
        this.state = {
            city: 'Montpellier'
        }
    }

    setCity (city) {
        this.setState({ city })
    }

    submit () {
        this.props.navigation.navigate('Météo -', {city: this.state.city})
    }

    render() {
        return (
            <View style={style.container}>
                <TextInput
                onChangeText={(text) => this.setCity(text)} //Permet l'autorisation de changement de text dans la barre d'input
                onSubmitEditing={() => this.submit()} 
                style={style.input}
                value={this.state.city}
                />
                <TouchableOpacity style={style.button} onPress={() => this.submit()}>
                    <Text style={style.buttonText}>Rechercher</Text>
                </TouchableOpacity>
            </View>
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