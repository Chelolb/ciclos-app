//import libraries
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
const Mision = ( { navigation } ) => {
    return (
        <View style={styles.containerMision}>
            <View style={{ flex: 1, flexDirection: 'row', height: '25%', borderColor: '#04BFBF',
                            borderWidth: 3, margin: 10, borderRadius: 35 }}>
                <Image
                    style={{ width: 150, height: 150, alignSelf: 'center',
                             marginHorizontal: 5 }}
                    source={require('../../assets/icon.png')}
                />
                <Text style={{ fontSize: 43, fontWeight: 'bold', color: '#04BFBF',
                                alignSelf: 'center', marginHorizontal: 10 }}>
                    MISIÓN
                </Text>
            </View>
            <Text style={{ height: '40%', fontSize: 20, paddingHorizontal: 30, borderRadius: 20,
                            marginHorizontal: 10, paddingTop: 10,  backgroundColor: '#04BFBF' }}>
                Nuestros esfuerzos responden al fomento de la participación ciudadana 
                en el ámbito político y a la difusión, discusión y profundización de los 
                Objetivos de Desarrollo Sostenible para el 2030.
            </Text>
            <TouchableOpacity
                onPress={() => // call Vision screen
                navigation.navigate('Home')}
            >
                <Text style={{ fontSize: 25, fontWeight: 'bold', marginTop: 30, borderRadius: 20,
                                paddingHorizontal: 10, paddingTop: 5, borderWidth: 3, 
                                borderColor: '#04BFBF' }}>
                    Volver
                </Text>
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    containerMision: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 20,
    },
});

//make this component available to the app
export default Mision;
