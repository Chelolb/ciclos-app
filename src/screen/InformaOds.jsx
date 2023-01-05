//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Modal } from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import BackButton from '../components/BackButton';
import CarouselImageSimple from '../components/CarouselImageSimple';


const widthScreen = (Dimensions.get("window").width);

const imagenGaleria = [
    "https://upload.wikimedia.org/wikipedia/commons/6/63/Municipalidad_de_La_Plata.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4AysmcDZc4aYOPN6WdNcz33m2tb3ZZI67MTOcvlvyiy2vv2jKFsa_p0hpj250gV4JlT8&usqp=CAU",
    "https://i0.wp.com/mochilaexpres.com/wp-content/uploads/2020/02/PB270871-scaled.jpg?fit=500%2C375&ssl=1"
]

// create a component
const InformaOds = ( { navigation } ) => {

    const [activeSlice, setActiveSlide] = useState(0);

    const [showModal, setShowModal] = useState(false)

    return (    
        <View style={styles.container}>

            <Modal visible={showModal}>
                <View style={ {backgroundColor: 'transparent'} }>
                    <BackButton
                        onPress= {() => setShowModal(false)}
                        title= 'Informa ODS'
                        color= 'black'
                        icon = 'arrow-left'
                    />
                    <ScrollView>
                        <View style={styles.containerTxt}>
                            <Text style={ styles.txtStyle }>
                                No solo consideramos que es relevante la capacitación en Agenda 2030 
                                en la educación secundaria. Desde Ciclos, así de simple estamos llevando 
                                adelante convenios con diversas universidades públicas, como privadas, 
                                para concientizar y llevar adelante investigaciones junto a grupos de 
                                estudiantes que las casas de estudio preseleccionan.
                            </Text>
                            <Text style={ styles.txtStyle }>
                                Este programa se divide en un seminario que se dicta a lo largo de 1 mes 
                                donde brindamos conocimientos claves en materia de desarrollo sostenible 
                                con una mirada orientada a la carrera de origen de los participantes.
                            </Text>
                            <Text style={ styles.txtStyle }>
                                En segundo lugar, en el marco de Informa-ODS, conformamos grupos de 
                                investigación con estudiantes de carreras universitarias quienes 
                                seleccionan un ODS de interés para llevar adelante por el plazo de 
                                6 meses un trabajo de investigación relacionado.
                            </Text>
                        </View>
                    </ScrollView>
                </View>
            </Modal>

            <ScrollView>
                <TouchableOpacity
                            onPress={() => setShowModal(true)}
                        >
                <View style={{ backgroundColor: '#04BFBF', borderRadius: 10, margin: 5, }}>
                    <Text style={{textAlign: 'justify', fontSize: 20, fontWeight: '600', color: 'white', margin: 5,}}>
                        Este programa busca brindar herramientas a problemáticas ligadas a los ODS 
                        presentes en el territorio local, provincial y/o nacional, y resaltar 
                        aquellas políticas que son positivas para el desarrollo sostenible de las 
                        comunidades.
                    </Text>
                    <Text style={{ fontSize: 30, textAlign: 'justify', color: 'white', margin: 5,
                                                alignSelf: 'flex-end'}}>
                                    Ver más...
                    </Text>
                </View>
                </TouchableOpacity>
                <View style={styles.containerSecundary}>
                        <Text style={styles.titleSecundary}>
                            Programa en Números
                        </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center',}}>
                            <View style={{ width: '30%', justifyContent: 'center', margin: 5, padding: 10,
                                        alignItems: 'center', borderRadius: 5, backgroundColor: '#04BFBF'}}>
                                <Ionicons name='font' size={40}/>
                                <Text style={{ fontSize: 40 }}>3</Text>
                                <Text>Acciones Realizada</Text>
                            </View>
                            <View style={{ width: '30%', justifyContent: 'center', margin: 5, padding: 10,
                                        alignItems: 'center', borderRadius: 5, backgroundColor: '#04BFBF' }}>
                                <Ionicons name='user-o' size={40}/>
                                <Text  style={{ fontSize: 40 }}>150</Text>
                                <Text>Personas Impactadas</Text>
                            </View>
                            <View style={{ width: '30%', justifyContent: 'center', margin: 5, padding: 10,
                                        alignItems: 'center', borderRadius: 5, backgroundColor: '#04BFBF' }}>
                                <Ionicons name='university' size={40}/>
                                <Text style={{ fontSize: 40 }}>3</Text>
                                <Text>Instituciones Partícipes</Text>
                            </View>
                        </View>
                </View>
                <View style={styles.containerSecundary}>
                    <Text style={styles.titleSecundary}>
                        Galería del Programa
                    </Text>
                    <View style={styles.carouselStyle}>
                        <CarouselImageSimple
                            images = {imagenGaleria}
                            height = {200}
                            width = {widthScreen - 50}
                            activeSlide={activeSlice}
                            setactiveSlide={setActiveSlide}
                        />
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
    containerSecundary: {
        width: '100%',
        //height: 100,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    titleSecundary: {
        //marginHorizontal: 50,
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
    },
    carouselStyle: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        alignContent: 'center', 
        marginHorizontal: 20, 
        marginVertical: 10,
        paddingTop: 20,
        padding: 5,
        borderRadius: 20,
        backgroundColor: '#04BFBF',
    },
    containerTxt: { 
        backgroundColor: '#04BFBF', 
        borderRadius: 10, 
        margin: 10, 
    },
    txtStyle: {
        textAlign: 'justify', 
        fontSize: 17, 
        fontWeight: '600', 
        color: 'black', 
        margin: 5,
    }
});

//make this component available to the app
export default InformaOds;
