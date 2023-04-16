import React, { useState, useEffect } from 'react';
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, TextInput, Platform, Pressable, Image, NativeModules } from 'react-native';
import Measure from '../../components/Measure.js';

const API_URL = Platform.OS !== 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000';
//const API_URL = 'http://localhost:5000';

const SIZE_OF_MEASURE = 8;
const MEASURES = 1;
const HEIGHT_OF_MEASURE = 8;



const PlayScreen = ({ navigation }) => {




    return (
        <View style={styles.back}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Play</Text>
            </View>
            <Text style={styles.heading}>Play a song!</Text>

            <Measure></Measure>
           

        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '10%',
        backgroundColor: '#EBEBEB',
        borderBottomColor: 'black',
        borderBottomWidth: '1px',
    },
    headerTitle: {
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 'auto',
        marginTop: 'auto',
        fontSize: '25px'
    },
    back: {
        width: '100%',
        height: '100%',
        backgroundColor: '#EBEBEB',
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: '2%',
        marginBottom: '5%',
        textAlign: 'center',
        color: 'black',
    },
});

export default PlayScreen;