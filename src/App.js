import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ProjectStack from './navigation/ProjectStack';
import { BrowserRouter } from 'react-router-dom';
import { useNavigate, Routes, Route } from 'react-router';
import HomeScreen from './screens/MainScreens/HomeScreen';

export default function App() {
 
  

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/home" element={HomeScreen} />
      </Routes>
    </BrowserRouter>
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