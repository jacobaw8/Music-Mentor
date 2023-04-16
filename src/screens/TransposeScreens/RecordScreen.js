import React, { useState, useEffect, Component, Card, Background, Logo } from 'react';

import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, TextInput, Platform, Pressable, Image } from 'react-native';



const API_URL = Platform.OS !== 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000';
//const API_URL = 'http://localhost:5000';


const RecordScreen = ({ state, navigation, route }) => {

    const [isClickable, setIsClickable] = useState(false)
    const [currentRecording, setCurrentRecording] = useState(null)


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
            <Text style={styles.heading}>Sing a 5 second melody below!</Text>

            <TouchableOpacity
                style={styles.inputRecord}
                onPress={() => {
                    record()
                }}
            >
                <Text style={{ color: 'black', alignSelf: 'center', transform: 'translateY(-33%)' }}>Record!</Text>
            </TouchableOpacity>
            <View style={{opacity: isClickable ? '1' : '0.5',}}>
                <TouchableOpacity disabled={isClickable ? false : true} style={{ paddingTop: '50px', paddingBottom: '20px', height: '30px', width: '30px', marginLeft: '50%', transform: 'translateX(-50%)' }} onPress={() => currentRecording.play()}>
                    <Image style={{ height: '30px', width: '30px' }} source={require('../../media/images/play_button.png')} />
                </TouchableOpacity>

                <TouchableOpacity
                    disabled={isClickable ? false : true}
                    //style={styles.inputContinue}
                    style={{
                        marginTop: '15%',
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
                    }}
                    onPress={() => {
                        navigation.navigate('Transpose1', {audio: currentRecording});
                    }}
                >
                    <Text style={{ color: 'black', alignSelf: 'center', transform: 'translateY(-33%)' }}>Start Lesson!</Text>
                </TouchableOpacity>
            </View>
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
    inputContinue: {
        marginTop: '15%',
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
        marginBottom: '5%',
        textAlign: 'center',
        color: 'black',
    },
});

export default RecordScreen;

// import React, { useState, useEffect, Component, Card, Background, Logo } from 'react';

// import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, TextInput, Platform, Pressable, Image } from 'react-native';

// const API_URL = Platform.OS !== 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000';
// //const API_URL = 'http://localhost:5000';





// const RecordScreen = ({ state, navigation, route }) => {
//     const [isClickable, setIsClickable] = useState(false);

//     const [file, setFile] = useState(null);

//     const handleFileSelect = (event) => {
//         setIsClickable(true);
//         setFile(event.target.files[0]);

//     };

//     const handleNavigate = async () => {
//         if (!file) return;

//         const formData = new FormData();
//         formData.append('file', file);
    
//         const response = await fetch('http://130.127.49.180:8086/process_file', {
//             method: 'POST',
//             body: formData,
//         });
    
//         if (response.status == "200") {
//             console.log('File processed successfully');
//         } else {
//             console.error('Failed to process file');
//         }


//         //const audio = new Audio(URL.createObjectURL(file));
//         //navigation.navigate('Transpose1', { audio: audio });
//     };


//     return (
//         <View style={styles.back}>
//             <View style={styles.header}>
//                 <TouchableOpacity style={styles.headerHome}
//                     onPress={() => {
//                         navigation.navigate('MainNav');
//                     }}
//                 ><Text>Home</Text></TouchableOpacity>
//                 <Text style={styles.headerTitle}>Transpose</Text>
//             </View>
//             <Text style={styles.heading}>Sing a 5 second melody below!</Text>
//             <View style={styles.inputRecord}>
//                 <input type="file" accept=".wav" onChange={(event) => handleFileSelect(event)} />
//             </View>

//             <View style={{ opacity: isClickable ? '1' : '0.5', }}>
//                 <TouchableOpacity
//                     disabled={isClickable ? false : true}
//                     //style={styles.inputContinue}
//                     style={{
//                         marginTop: '15%',
//                         marginLeft: '50%',
//                         marginRight: '50%',
//                         backgroundColor: 'lightgray',
//                         width: '150px',
//                         color: 'white',
//                         paddingTop: 10,
//                         fontSize: 16,
//                         minHeight: 30,
//                         alignSelf: 'center',
//                         borderRadius: '10%',
//                     }}
//                     onPress={() => {
//                         handleNavigate();
//                     }}
//                 >
//                     <Text style={{ color: 'black', alignSelf: 'center', transform: 'translateY(-33%)' }}>Start Lesson!</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );
// };


// const styles = StyleSheet.create({
//     inputRecord: {
//         marginTop: '1%',
//         marginLeft: '50%',
//         marginRight: '50%',
//         fontSize: 16,
//         width: '185px',
//         minHeight: 30,
//         alignSelf: 'center',
//     },
//     inputContinue: {
//         marginTop: '15%',
//         marginLeft: '50%',
//         marginRight: '50%',
//         backgroundColor: 'lightgray',
//         width: '150px',
//         color: 'white',
//         paddingTop: 10,
//         fontSize: 16,
//         minHeight: 30,
//         alignSelf: 'center',
//         borderRadius: '10%',
//     },
//     header: {
//         width: '100%',
//         height: '10%',
//         backgroundColor: '#EBEBEB',
//         borderBottomWidth: '1px',
//         borderBottomColor: 'black',
//         display: 'flex',
//         flexDirection: 'row',
//     },
//     headerTitle: {
//         color: 'black',
//         fontWeight: 'bold',
//         marginLeft: '40%',
//         marginRight: '60%',
//         marginBottom: 'auto',
//         marginTop: 'auto',
//         fontSize: '25px'
//     },
//     headerHome: {
//         color: 'black',
//         fontWeight: 'bold',
//         marginBottom: 'auto',
//         marginTop: 'auto',
//         fontSize: '15px',
//         marginLeft: '2%'
//     },
//     back: {
//         width: '100%',
//         height: '100%',
//         backgroundColor: '#EBEBEB',
//     },
//     heading: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         marginTop: '2%',
//         marginBottom: '5%',
//         textAlign: 'center',
//         color: 'black',
//     },
// });

// export default RecordScreen;