//import libraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions, TouchableOpacity, Modal } from 'react-native';
//import CarouselImage from '../components/CarouselImage';
import CristalButton from '../components/CristalButton';
import BackButton from '../components/BackButton';
import { SliderBox } from 'react-native-image-slider-box';

 
const widthScreen = (Dimensions.get("window").width);

//These arrays (Noticia, titleNovedad, imagenNovedad) replace the data send by the backend
const News = [
    'Noticia Nº 1 - Título y Descripción 1... ver aqui',
    'Noticia Nº 2 - Título y Descripción 2... ver aqui',
    'Noticia Nº 3 - Título y Descripción 3... ver aqui'
]

// create a component
const Home = ( { navigation } ) => {

    const [showModal3, setShowModal3] = useState(false)
    
    const images = [
        require('../../assets/images/agenda_2030_ods.jpg'),
        require('../../assets/images/aj.jpg'),
        require('../../assets/images/facultad_derecho.jpg'),
        require('../../assets/images/hcd_tigre.jpg'),
        require('../../assets/images/chaco.jpg'),
        require('../../assets/images/legislatura_cba.jpg'),
        require('../../assets/images/observatorio_familia_juventudes.jpg'),
        require('../../assets/images/pampa_2030.jpg'),
        require('../../assets/images/unir.jpg'),
        require('../../assets/images/universidad_de_palermo.jpg'),
        require('../../assets/images/universidad_kennedy.jpg'),
        require('../../assets/images/y20_arg.jpg'),
    ]

    const [indexNew, setIndexNew] = useState(0);
    // const [activeSlice, setActiveSlide] = useState(0);

    function changeNextNew() {
        if (indexNew === (News.length - 1)) {
            return setIndexNew(0);
        }

        return setIndexNew(indexNew + 1);
        
    }

    function changePrevNew() {
        if (indexNew === 0) {
            return setIndexNew(News.length -1);
        }

        return setIndexNew(indexNew - 1);
        
    }

    return (
        <View style={styles.container}>

            <View style={styles.headerStyles}>
                <Image
                    style={styles.headerLogo}
                    source={require('../../assets/logo2.jpg')}
                />
            </View>
            <ScrollView style={styles.scrollContainer}>
                {/* Noticias Section */}
                <View style= {styles.carruselStyle}>
                    <Image
                        style={styles.carruselImage}
                        source={require('../../assets/desarrolloSustentable.jpg')}
                    />
                    <View style={{position: 'absolute', top: 30, left: 5, width: 40}}>
                        <CristalButton
                            title = '<'
                            color = 'white'
                            onPress={() => changePrevNew()}                        
                            >
                        </CristalButton>
                    </View>
                    <View style={{position: 'absolute', top: 30, left: widthScreen - 10 - 40, width: 40}}>
                        <CristalButton
                            title = '>'
                            color = 'white'
                            onPress={() => changeNextNew()}
                        >
                        </CristalButton>
                    </View> 
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: '400', textAlign: 'center', paddingVertical: 5, 
                                borderRadius: 10, backgroundColor: 'rgba(0,0,0,0.3)',
                                position: 'absolute', top: 20, left: (widthScreen / 2) - 100, 
                                width: 200, height: 120,
                                }}
                                >
                                    {News[indexNew]}  
                            </Text> 
                </View>
                       {/*Mision y Vision  Sections*/}
                {/* <View> */}
                    <View style={styles.misionStyle}>
                        <TouchableOpacity
                            onPress={() => // call Mision screen
                            navigation.navigate('Mision')}
                        >
                            <Image
                                style={styles.misionImage}
                                source={require('../../assets/patrocinadores/mision.jpg')}        
                            />
                        </TouchableOpacity>
                    </View>
{/* 
                    <Modal visible={showModal1}>
                        <View>
                            <BackButton
                                onPress= {() => setShowModal1(false)}
                                title= 'Misión'
                                color= 'black'
                                icon = 'arrow-left'
                            />
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
                        </View>
                        </View>
                    </Modal> */}

                    <View style={styles.visionStyle}>
                        <TouchableOpacity
                            onPress={() => // call Vision screen
                            navigation.navigate('Vision')}
                        >
                            <Image
                                style={styles.visionImage}
                                source={require('../../assets/patrocinadores/vision.jpg')}
                            />
                        </TouchableOpacity>
                    </View>
                {/* </View> */}
                    {/* Quienes Somos Section */}
                <View style={styles.containerSecundary}>
                    <Text style={styles.titleSecundary}>¿QUIENES SOMOS?</Text> 
                </View>
                <View>
                    <TouchableOpacity
                        // onPress={() => // call Vision screen
                        // navigation.navigate('Quienes Somos')}
                        onPress={() => setShowModal3(true)}
                    >
                        <View style={{ backgroundColor: 'rgba(46,46,46,0.74)', borderRadius: 10, margin: 5, }}>
                            <Text style={{ fontSize: 17, textAlign: 'justify', color: 'white', margin: 5,}}>
                                Somos una organización no gubernamental (ONG) enfocados en impulsar la agenda 2030...
                            </Text>
                            <Text style={{ fontSize: 30, textAlign: 'justify', color: 'white', margin: 5,
                                            alignSelf: 'flex-end'}}>
                                Ver más...
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <Modal visible={showModal3}>
                <View>
                    <BackButton
                        onPress= {() => setShowModal3(false)}
                        title= 'Quienes Somos'
                        color= 'black'
                        icon = 'arrow-left'
                    />
                <View style={{ backgroundColor: '#04BFBF', borderRadius: 10, marginTop: 5, marginHorizontal: 15, 
                                borderBottomWidth: 5, borderRightWidth: 5, borderBottomRightRadius: 10, 
                                borderColor: '#7E7E7E' }}>
                    <Text style={{ fontSize: 20, textAlign: 'justify', color: 'black', 
                                    padding: 10, }}>
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
                </View>
                </Modal>

                    {/* Como Trabajamos Section */}
                <View style={styles.containerSecundary}>
                    <Text style={styles.titleSecundary}>
                        ¿CÓMO TRABAJAMOS?
                    </Text>
                </View>
                <View style={{alignItems: 'center'}}>
                <TouchableOpacity
                        onPress={() => // call Vision screen
                        navigation.navigate('Como Trabajamos')}
                    >
                    <View style={{ backgroundColor: 'rgba(46,46,46,0.74)', borderRadius: 10, margin: 5, }}>
                        <Text style={{ fontSize: 17, textAlign: 'justify', color: 'white', margin: 5,}}>
                            Nuestra organización cuenta con tres áreas para planificar, gestionar y llevar adelante 
                            cada etapa del ciclo organizado. ¡Conoce cada una!
                        </Text>
                        <Text style={{ fontSize: 30, textAlign: 'justify', color: 'white', margin: 5,
                                            alignSelf: 'flex-end'}}>
                                Presiona aqui...
                        </Text>
                    </View>
         {/*            <View style={{ width: '98%', height: 'auto',  
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
                                Difusión Virtual
                            </Text>
                        </View>
                        <View style={{ width: '90%', margin: 10, }}>
                            <Image
                                style={{ width: '100%', height: 200, borderRadius: 10, }}
                                source={require('../../assets/participacionCiudadana.jpg')}
                            />   

                            <Text style={{ fontSize: 20, textAlign: 'center', paddingVertical: 5, 
                                            borderRadius: 10, backgroundColor: 'white',}}>
                                Participacion Ciudadana
                            </Text>
                        </View>                        
                    </View>         */} 
                    </TouchableOpacity>
                </View>
    
                    {/* Asociados Section */}
                <View style={{ flexDirection: 'row', backgroundColor: 'white', justifyContent: 'space-around'}}>
                    <View style={{ flexDirection: 'column', width: '65%', alignSelf: 'center',
                                     alignItems: 'center'}}>
                    <Text style={{ width: '100%', fontSize: 23, 
                                fontWeight: 'bold', color: 'rgba(4,191,191,1)',
                                textAlign: 'center'}}>
                                NUESTRAS
                    </Text>
                    <Text style={{ width: '50%', fontSize: 23, 
                                fontWeight: 'bold', color: 'black',
                                textAlign: 'center'}}>
                                ALIANZAS
                    </Text>
                    </View>
                    <View style={{ width: '40%', height: 100, alignSelf: 'center'}}>
                        <SliderBox 
                            style = {{ width:100, height: 100}}
                            images = {images} 
                            dotColor = 'transparent'
                            inactiveDotColor = 'transparent'
                            // dotStyle = {{ height: 20, width: 20, borderRadius: 50}}
                            imageLoadingColor = 'white'
                            autoplay = {true}
                            autoplayInterval = {5000}
                            circleLoop = {true}
                            onCurrentImagePressed={(index) => alert(index + 1)}
                            firstItem = {0}
                            paginationBoxVerticalPadding = {0}
                        />
                    </View>
                </View>
                {/* Contactanos Section */}
                <View style={{ width: '100%', backgroundColor: 'white', 
                                flexDirection: 'row', alignContent: 'space-between',}}>
                    <View style={{flex: 2}}>
                            <Text style={{ fontSize: 20, fontWeight: '100', textAlign: 'center'}}>
                                CONTACTANOS O VISITANOS EN
                            </Text>
                    </View>
                    <View style={{flex: 2, justifyContent: 'center',}}>
                        <View style={{ flex: 1}}>
                            <Image
                                style={{ width: 130, 
                                height: 40,
                                alignSelf: 'center', 
                                resizeMethod: 'resize',
                                resizeMode: 'contain',
                                }}
                                source={require('../../assets/rs.jpg')}
                            />   
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
        marginTop: 20,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1E1E1E',
    },
    headerStyles: {
        width: '100%',
        height: 70,
        backgroundColor: '#fff',
    },
    headerLogo: {
        width: 110,
        height: 70,
        marginLeft: 30,
    },
    scrollContainer: {
        width: '100%',
        backgroundColor: '#04BFBF',
        marginTop: 5,
    },
    containerMision: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 20,
    },
    misionImage: {
        width: widthScreen - 80,
        height: 120,
        marginBottom: 5,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        alignSelf: 'flex-end',
    },
    visionImage: {
        width: widthScreen - 80,
        height: 120,
        marginTop: 5,
        marginBottom: 10,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        alignSelf: 'flex-start',
    },
    carruselStyle: {
        width: '100%',
        height: 175,
    },
    carruselImage: {
        width: '100%',
        height: 170,
        resizeMethod: 'resize',
        resizeMode: 'contain',
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
export default Home;