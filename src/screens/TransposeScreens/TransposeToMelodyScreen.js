import React, { useState, useEffect } from 'react';
import Measure from '../../components/Measure.js';
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, TextInput, Platform, Pressable } from 'react-native';
import { useNavigate, useLocation } from 'react-router-dom';


const API_URL = Platform.OS !== 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000';
//const API_URL = 'http://localhost:5000';

const TransposeToMelodyScreen = ({ navigation }) => {

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const curr_audio = location.state;



    return (
        <View style={styles.back}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerHome}
                    onPress={() => {
                        navigate('/');
                    }}
                ><Text>Home</Text></TouchableOpacity>
                <Text style={styles.headerTitle}>Transpose1</Text>
            </View>
            <Text style={styles.heading}>First Lesson Screen</Text>
            <Text style={styles.heading}>Build your melody using the sheet below!</Text>
            <Measure audio={curr_audio}></Measure>
            <TouchableOpacity
                //style={styles.inputContinue}
                style={{
                    transform: 'translateY(-350px)',
                    marginHorizontal: 'auto',
                    backgroundColor: 'lightgray',
                    width: '150px',
                    height: '30px',
                    color: 'white',
                    fontSize: 16,
                    alignSelf: 'center',
                    borderRadius: '10%',
                }}
                onPress={() => {
                    navigate('/t2', { audio: curr_audio });
                }}
            >
                <Text style={{ color: 'black', alignSelf: 'center', transform: 'translateY(33%)' }}>Continue</Text>
            </TouchableOpacity>

            <View
                style={{ backgroundColor: '#EBEBEB', height: '400px' }}
            />
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
        display: 'flex',
        flexDirection: 'row',
    },
    headerTitle: {
        color: 'black',
        fontWeight: 'bold',
        marginLeft: '40%',
        marginRight: '60%',
        marginBottom: 'auto',
        marginTop: 'auto',
        fontSize: '25px'
    },
    headerHome: {
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 'auto',
        marginTop: 'auto',
        fontSize: '15px',
        marginLeft: '2%'
    },
    back: {
        width: '100%',
        height: '100%',
        backgroundColor: '#EBEBEB',
        overflow: 'hidden',
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: '2%',
        marginBottom: '1.5%',
        textAlign: 'center',
        color: 'black',
    },
    heading2: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: '1%',
        textAlign: 'center',
        color: 'black',
    },
});

export default TransposeToMelodyScreen;