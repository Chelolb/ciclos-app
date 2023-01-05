//import liraries
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

// create a component
const ComoTrabajamos = () => {
    return (
        <View style={styles.container}>
            {/* Como Trabajamos Section */}
            <ScrollView>
                {/* <View style={styles.containerSecundarie}>
                    <Text style={styles.titleSecundarie}>¿CÓMO TRABAJAMOS?</Text>
                </View> */}
                <View style={{alignItems: 'center'}}>
                    <View style={{ backgroundColor: '#04BFBF', borderRadius: 10, margin: 5, }}>
                        <Text style={{textAlign: 'justify', fontSize: 20, color: 'white', margin: 5,}}>
                            Nuestra organización cuenta con tres áreas para planificar, gestionar y llevar adelante 
                            cada etapa del ciclo organizado. ¡Conoce cada una!
                        </Text>
                    </View>
                    <View style={{ width: '98%', height: 'auto',  
                                //backgroundColor: 'white', 
                                margin: 5, alignContent: 'space-around', alignItems: 'center'}}>
                        <View style={{ width: '90%', margin: 10, }}>
                            <Image
                                style={{ width: '100%', height: 200, borderRadius: 10, }}
                                source={require('../../assets/informaOds.jpg')}
                            />   
                            <Text style={{ fontSize: 20, textAlign: 'center', paddingVertical: 5, 
                                            borderRadius: 10, backgroundColor: 'white' }}>
                                Programa Informa ODS
                            </Text>
                        </View>
                        <View style={{ width: '90%', margin: 10, }}>
                            <Image
                                style={{ width: '100%', height: 200, borderRadius: 10, }}
                                source={require('../../assets/difusionVirtual.jpg')}
                            />   
                            <Text style={{ fontSize: 20, textAlign: 'center', paddingVertical: 5, 
                                            borderRadius: 10, backgroundColor: 'white',}}>
                                Secundari ODS
                            </Text>
                        </View>
                        <View style={{ width: '90%', margin: 10, }}>
                            <Image
                                style={{ width: '100%', height: 200, borderRadius: 10, }}
                                source={require('../../assets/participacionCiudadana.jpg')}
                            />   
                            <Text style={{ fontSize: 20, textAlign: 'center', paddingVertical: 5, 
                                            borderRadius: 10, backgroundColor: 'white',}}>
                                Capacita 2030
                            </Text>
                        </View>                        
                    </View>          
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
        backgroundColor: '#fff',
    },
});

//make this component available to the app
export default ComoTrabajamos;
