//import libraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { size } from 'lodash';

// create a component
const CarouselImage = ( { images, height, width, activeSlide, setactiveSlide, titles } ) => {
    
    const [titleInd, setTitleInd]= useState(0)


    function setChange(index) {

        setactiveSlide(index);

        setTitleInd(index);
    }
    const renderItem = ({ item }) => {

        return (
            <Image
                style={{ width, height, borderRadius: 20,
                resizeMethod: 'resize',
                resizeMode: 'cover'
            }}
                PlaceholderContent={<ActivityIndicator color="#fff"/>}
                source={{ uri: item }}
            />
        )
    }

    return (
        <View>            
            <View style={{ alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: 5, margin: 5,}}> 
            
                <Text style={{color: 'white', fontSize: 15, fontWeight: '200', alignSelf: 'center'}}>
                    {titles[titleInd]}
                </Text>

            </View>
            <Carousel
                //layout={"default"}
                layout={"stack"}
                //layout={"tinder"}
                layoutCardOffset={8}
                data={images}
                sliderWidth= {width}
                itemWidth= {width}
                itemHeight= {height}
                renderItem = {renderItem}
                //onSnapToItem={(index) => setactiveSlide(index)}
                onSnapToItem = {(index) => setChange(index)}
            />
            <MyPagination 
                data={images} 
                activeSlide={activeSlide}
            />
        </View>
    );
};

function MyPagination({ data, activeSlide}) {
    return(
        <Pagination
            dotsLength={size(data)}
            activeDotIndex={activeSlide}
            containerStyle={styles.containerPagination}
            dotStyle={styles.dotActive}
            inactiveDotStyle={styles.dotInactive}
            inactiveDotOpacity={0.5}
            inactiveDotScale={0.6}
        />
    )
}

const styles = StyleSheet.create({
    containerPagination: {
        backgroundColor: 'transparent',
        zIndex: 1,
        position: 'relative',
        bottom: 20,
        alignSelf: 'center'
    },
    dotActive: {
        width: 20,
        height: 20,
        borderRadius: 10,
        marginHorizontal: 2,
        backgroundColor: '#4040FD'
    },
    dotInactive: {
        width: 14,
        height: 14,
        borderRadius: 7,
        marginHorizontal: 2,
        backgroundColor: '#FF7070'
    },
})

//make this component available to the app
export default CarouselImage;
