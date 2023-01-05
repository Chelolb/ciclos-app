//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

// create a component
const QuienesSomos = () => {
    return (
        <View style={styles.container}>
            {/* <View style={styles.containerSecundary}>
                <Text style={styles.titleSecundary}>¿QUIENES SOMOS?</Text> 
            </View> */}
            <ScrollView>
                <View style={{ backgroundColor: '#04BFBF', borderRadius: 10, margin: 5, }}>
                    <Text style={{ fontSize: 20, textAlign: 'justify', color: 'black', 
                                    padding: 10 }}>
                        Somos una organización no gubernamental (ONG) enfocados en impulsar la agenda 2030
                        promoviendo espacios de participacion ciudadana para crear vínculos
                        entre los actores políticos y la sociedad civil.
                    </Text>
                    <Text style={{ fontSize: 20, textAlign: 'justify', color: 'black', padding: 10 ,}}>
                        La agenda del 2030 está integrada por 17 objetivos de desarrollo sostenible (ODS) 
                        y 169 metas establecidos en 2015 por las Naciones Unidas (ONU). 
                        Suponen un nuevo reto de la comunidad internacional para lograr erradicar la pobresa, 
                        extender el acceso a los derechos humanos, lograr un desarrollo económico global 
                        sostenible y respetuoso con el planeta y los recursos que ofrece.
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    containerSecundary: {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleSecundary: {
        //marginHorizontal: 50,
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
    }
});

//make this component available to the app
export default QuienesSomos;
