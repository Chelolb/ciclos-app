//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import CarouselImage from '../components/CarouselImage';

 
const widthScreen = (Dimensions.get("window").width);

const titleNovedad = [
    'Título Evento Nº 1 - Descripción 1 - Breve descripción de este evento... ver aqui',
    'Título Evento Nº 2 - Descripción 2 - Breve descripción de este evento... ver aqui',
    'Título Evento Nº 3 - Descripción 3 - Breve descripción de este evento... ver aqui'
]

const imagenNovedad = [
    "https://upload.wikimedia.org/wikipedia/commons/6/63/Municipalidad_de_La_Plata.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4AysmcDZc4aYOPN6WdNcz33m2tb3ZZI67MTOcvlvyiy2vv2jKFsa_p0hpj250gV4JlT8&usqp=CAU",
    "https://i0.wp.com/mochilaexpres.com/wp-content/uploads/2020/02/PB270871-scaled.jpg?fit=500%2C375&ssl=1"
]

// create a component
const News = () => {

    const [activeSlice, setActiveSlide] = useState(0);

    return (
        <View style = {styles.container}>
            <View style={styles.containerSecundarie}>
                <Text style={styles.titleSecundarie}>EVENTOS</Text>
            </View>
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.carouselStyle}>
                    <CarouselImage
                        titles = {titleNovedad}
                        images = {imagenNovedad}
                        height = {200}
                        width = {widthScreen - 40}
                        activeSlide={activeSlice}
                        setactiveSlide={setActiveSlide}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1E1E1E',
    },
    containerSecundarie: {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    titleSecundarie: {
        marginHorizontal: 50,
        fontSize: 20,
        fontWeight: '100',
        color: 'black',
    },
    scrollContainer: {
        width: '100%',
        backgroundColor: '#04BFBF',
        marginTop: 5,
    },
    carouselStyle: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        alignContent: 'center', 
        marginHorizontal: 20, 
        marginVertical: 10 
    },
});

//make this component available to the app
export default News;
