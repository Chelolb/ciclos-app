//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InformaOds from '../screen/InformaOds';
import SecundariOds from '../screen/SecundariOds';
import Capacita2030 from '../screen/Capacita2030';



import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

// create a component
const TabPrograma = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Informa ODS" component={InformaOds} />
            <Tab.Screen name="Secondari ODS" component={SecundariOds} />
            <Tab.Screen name="Capacita 2030" component={Capacita2030} />
        </Tab.Navigator>
    );
};

//make this component available to the app
export default TabPrograma;
