import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ProjectStack from './navigation/ProjectStack';
import { HashRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/MainScreens/HomeScreen';
import PlayScreen from './screens/MainScreens/PlayScreen';
import RecordScreen from './screens/TransposeScreens/RecordScreen';
import TransposeToMelodyScreen from './screens/TransposeScreens/TransposeToMelodyScreen'
import ChangeKeys from './screens/TransposeScreens/ChangeKeys';
import ChordProgressionComplement from './screens/TransposeScreens/ChordProgressionComplement';
import Harmony3rd from './screens/TransposeScreens/Harmony3rd';
import KeyCheck from './screens/TransposeScreens/KeyCheck';
import ScoreScreen from './screens/TransposeScreens/ScoreScreen';

export default function App() {



  return (
    <HashRouter basemname={`/${process.env.PUBLIC_URL}`}>
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route path="/play" element={<PlayScreen />} />
        <Route path="/record" element={<RecordScreen />} />
        <Route path="/t1" element={<TransposeToMelodyScreen />} />
        <Route path="/t2" element={<KeyCheck />} />
        <Route path="/t3" element={<Harmony3rd />} />
        <Route path="/t4" element={<ChangeKeys />} />
        <Route path="/t5" element={<ChordProgressionComplement />} />
        <Route path="/t6" element={<ScoreScreen />} />
      </Routes>
    </HashRouter>
    // <NavigationContainer>
    //   <ProjectStack />
    // </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});