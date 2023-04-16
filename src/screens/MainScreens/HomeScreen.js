import React, { useState, useEffect } from 'react';
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, TextInput, Platform, Button, Image } from 'react-native';
//import { Storage, sessionStorage } from '../../storage/Storage';


const API_URL = Platform.OS !== 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000';
//const API_URL = 'http://localhost:5000';

const HomeScreen = ({ navigation }) => {

    return (
        <View style={styles.back}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Dashboard</Text>
            </View>
            <Text style={styles.heading}>
                Welcome!
            </Text>
            <TouchableOpacity
                style={styles.input}
                onPress={() => {
                    navigation.navigate('TransposeScreens');
                }}
            >
                <Text style={{ color: 'black', alignSelf: 'center', transform: 'translateY(-33%)' }}>Transposition</Text>
            </TouchableOpacity>
        </View>
    );

};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '10%',
        backgroundColor: '#EBEBEB',
        borderBottomWidth: '1px',
        borderBottomColor: 'black',
    },
    input: {
        marginTop: '5%',
        marginLeft: '50%',
        marginRight: '50%',
        backgroundColor: 'darkgray',
        width: '200px',
        color: 'white',
        paddingTop: 10,
        fontSize: 16,
        minHeight: 30,
        alignSelf: 'center',
        borderRadius: '2.5',
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
    dropdownStyle: {
        marginTop: '1.5%',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderRadius: 2.5,
        width: '30%',
        flexDirection: 'row',
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: 'black',
    },
    dropdownTextStyle: {
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: 'lightgray',
        borderRadius: 2,
        width: '30%',
        overflow: 'auto',
        height: '35%',
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
    body: {
        fontSize: 15,
        marginTop: '5%',
        textAlign: 'center',
        color: 'black',
    },
});

export default HomeScreen;