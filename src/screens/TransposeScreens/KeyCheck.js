import React, { useState, useEffect } from 'react';
import Measure from '../../components/Measure.js';
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, TextInput, Platform, Pressable, Touchable } from 'react-native';

const API_URL = Platform.OS !== 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000';
//const API_URL = 'http://localhost:5000';

const KeyCheck = ({ navigation, route }) => {

    return (
        <View style={styles.back}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerHome}
                    onPress={() => {
                        navigation.navigate('MainNav');
                    }}
                ><Text>Home</Text></TouchableOpacity>
                <Text style={styles.headerTitle}>Transpose</Text>
            </View>
            <Text style={styles.heading}>First Lesson Screen</Text>
            <Text style={styles.heading}>What key is your recording in?</Text>
            <View style={{ marginHorizontal: 'auto', marginTop: '5%', width: '60%', height: '20%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flexFlow: 'row wrap'}}>
                <TouchableOpacity style={{flex: '0, 0, 50%', height: '50%', width: '50%', backgroundColor: 'red'}} >
                    <Text>A</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: '0, 0, 50%', height: '50%', width: '50%', backgroundColor: 'blue'}} >
                    <Text>C#m</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: '0, 0, 50%', height: '50%', width: '50%', backgroundColor: 'yellow'}} >
                    <Text>D</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: '0, 0, 50%', height: '50%', width: '50%', backgroundColor: 'green'}} >
                    <Text>Em</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                //style={styles.inputContinue}
                style={{
                    transform: 'translateY(50px)',
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
                    navigation.navigate('Transpose3', { audio: route.params.audio });
                }}
            >
                <Text style={{ color: 'black', alignSelf: 'center', transform: 'translateY(33%)' }}>Continue</Text>
            </TouchableOpacity>
            <View 
                        style={{ backgroundColor: '#EBEBEB', height: '400px'}}
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

export default KeyCheck;