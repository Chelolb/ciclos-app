//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Home from '../screen/Home';
import Mision from '../screen/Mision';
import Vision from '../screen/Vision';
import QuienesSomos from '../screen/QuienesSomos';
import ComoTrabajamos from '../screen/ComoTrabajamos';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


// create a component
const StackPrincipal = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen 
                name="Mision" 
                component={Mision}
                options={{ headerShown: false, title: 'Misión' }} 
            />
            <Stack.Screen 
                name="Vision" 
                component={Vision}
                options={{ headerShown: false, title: 'Visión' }} 
            />
            <Stack.Screen 
                name="Quienes Somos" 
                component={QuienesSomos}
                options={{ headerShown: true, title: '¿Quienes Somos?' }} 
            />
            <Stack.Screen 
                name="Como Trabajamos" 
                component={ComoTrabajamos}
                options={{ headerShown: true, title: '¿Como Trabajamos?' }} 
            />
        </Stack.Navigator>
    );
};

//make this component available to the app
export default StackPrincipal;
