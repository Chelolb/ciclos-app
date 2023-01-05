//import libraries
import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import Ionicons from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/AntDesign';

import StackPrincipal from './StackPrincipal';
import News from '../screen/News';
import TabPrograma from './TabPrograma';
import Guide from '../screen/Guide';

const Tab = createBottomTabNavigator();

// create a component
const TabNavigation = () => {
    return (
        <Tab.Navigator             // define the Botton-tab 
        initialRouteName="Principal" // here define the "start" tab

        screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => { // according to the tab state
            let iconName;                           // show the corresponding icono

            if (route.name === 'Principal') {
                iconName = focused
                    ? 'home'
                    : 'home';
            } else if (route.name === 'Comunica 2030') {
                iconName = focused 
                    // ? 'newspaper-o' 
                    // : 'newspaper-o';
                    // ? 'message1' 
                    // : 'message1';
                    ? 'notification' 
                    : 'notification';
            } else if (route.name === 'Programas') {
                iconName = focused 
                    // ? 'calendar' 
                    // : 'calendar';
                    ? 'layout' 
                    : 'layout';                    
            } else if (route.name === 'Nuestra Guía') {
                iconName = focused 
                    // ? 'calendar' 
                    // : 'calendar';
                    ? 'pdffile1' 
                    : 'pdffile1';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#04BFBF',   // colors in the diferents states
        tabBarInactiveTintColor: '#9E9E9E',
        })}
        >
            <Tab.Screen name="Principal" component={StackPrincipal} options={{ headerShown: false }}/>
            <Tab.Screen name="Comunica 2030" component={News} options={{ headerShown: true }}/>
            <Tab.Screen name="Programas" component={TabPrograma} options={{ headerShown: true }}/>
            <Tab.Screen name="Nuestra Guía" component={Guide} options={{ headerShown: true }}/>
          </Tab.Navigator>
    );
};

//make this component available to the app
export default TabNavigation;
