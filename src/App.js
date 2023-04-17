import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ProjectStack from './navigation/ProjectStack';
import { BrowserRouter } from 'react-router-dom';
import { useNavigate, Routes, Route } from 'react-router';

export default function App() {
 
  

  return (
    <NavigationContainer>
      <ProjectStack />
    </NavigationContainer>
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