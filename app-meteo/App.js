import 'react-native-gesture-handler'
import React from 'react'
import { View, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons'
import style from './Style'
import About from './components/About'
import Search from './components/Search'

const Tab = createBottomTabNavigator()

function MyTabs() { 
  return (
    <Tab.Navigator
    // On détermine les options pour chaque écran
      screenOptions={({ route }) => ({
        // On définit une icône personnalisée pour chaque écran
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          // On choisit l'icône en fonction du nom de l'onglet
          if (route.name === 'A propos') {
            iconName = focused ? 'information-circle' : 'information-circle-outline';
          } else if (route.name === 'Rechercher une ville') {
            iconName = focused ? 'search' : 'search-outline';
          }

          // On retourne un composant Ionicons avec l'icône appropriée
          return <Ionicons name={iconName} size={size} color={color} />;
        },
          // Options pour la barre de navigation
          tabBarActiveTintColor: '#10C5F3',
          tabBarInactiveTintColor: '#EBFAFD',
          tabBarActiveBackgroundColor: '#90E0F3',
          tabBarInactiveBackgroundColor: '#90E0F3',
          tabBarStyle: {
            height: 55
          },
          headerShown: false
      })}
    >
      <Tab.Screen name='A propos' component={About}/>
      <Tab.Screen name='Rechercher une ville' component={Search}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <View style={{flex: 1}}>
      <StatusBar hidden={true}/>
      <NavigationContainer style={style.navigationContainer}>
        <MyTabs />
      </NavigationContainer>
    </View>
  );
}
