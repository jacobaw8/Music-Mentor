import React, { useState, useEffect } from 'react';
import Measure from '../../components/Measure.js';
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, TextInput, Platform, Pressable } from 'react-native';

const API_URL = Platform.OS !== 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000';
//const API_URL = 'http://localhost:5000';

const Harmony3rd = ({ navigation, route }) => {

    const recordAudio = () =>

        new Promise(async resolve => {




            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const mediaRecorder = new MediaRecorder(stream);
            const audioChunks = [];

            mediaRecorder.addEventListener("dataavailable", event => {
                audioChunks.push(event.data);
            });

            const start = () => mediaRecorder.start();

            const stop = () =>
                new Promise(resolve => {
                    mediaRecorder.addEventListener("stop", () => {
                        const audioBlob = new Blob(audioChunks, { 'type': 'audio/wav; codecs=0' });
                        const audioUrl = URL.createObjectURL(audioBlob);
                        const audio = new Audio(audioUrl);
                        setCurrentRecording(audio)
                        const play = () => audio.play();
                        resolve({ audioBlob, audioUrl, play });
                    });

                    mediaRecorder.stop();
                });

            resolve({ start, stop });
        });

    const sleep = time => new Promise(resolve => setTimeout(resolve, time));


    const record = async () => {
        const recorder = await recordAudio();
        recorder.start();
        await sleep(5000);
        const audio = await recorder.stop();
        setIsClickable(true)
        //audio.play();
    };

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
            <Text style={styles.heading}>Sing the third harmony of your recording!</Text>
            <TouchableOpacity
                style={styles.inputRecord}
                onPress={() => {
                    record()
                }}
            >
                <Text style={{ color: 'black', alignSelf: 'center', transform: 'translateY(-33%)' }}>Record!</Text>
            </TouchableOpacity>
            <Measure audio={route.params.audio}></Measure>
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
                    navigation.navigate('Transpose4', { audio: route.params.audio });
                }}
            >
                <Text style={{ color: 'black', alignSelf: 'center', transform: 'translateY(33%)' }}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    inputRecord: {
        marginTop: '1%',
        marginLeft: '50%',
        marginRight: '50%',
        backgroundColor: 'lightgray',
        width: '150px',
        color: 'white',
        paddingTop: 10,
        fontSize: 16,
        minHeight: 30,
        alignSelf: 'center',
        borderRadius: '10%',
    },
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

export default Harmony3rd;