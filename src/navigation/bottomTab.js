import React, { useState } from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { Dropdown } from 'react-native-material-dropdown';

import HomeScreen from '../screens/MainScreens/HomeScreen';
import PlayScreen from '../screens/MainScreens/PlayScreen';


const Tab = createBottomTabNavigator();

const Tabs = () => {

    let selection = [{ id: 1, name: 'test1' }, { id: 2, name: 'test2' }, { id: 3, name: 'test3' }]

    const [selectedItem, setSelectedItem] = useState(null)

    const onSelect = (item) => {
        setSelectedItem(item)
    }

    return(
        <Tab.Navigator
            screenOptions={{
                headerTitleAlign: 'center',
                showLabel: false,
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: '#EBEBEB',
                    borderRadius: 0,
                    height: 50,
                    borderTopWidth: 0,
                    borderTopColor: 'black',
                    borderTopWidth: '1px'
                }
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{
            title: 'Dashboard',
            headerShown: true,
            headerStyle: {
                backgroundColor: '#0F346B',
            },
            headerTintColor: '#fff',
            headerShadowVisible: false,
            }} 
            />

            <Tab.Screen name="Play" component={PlayScreen} options={{
            title: 'Play',
            headerShown: false,
            headerStyle: {
                backgroundColor: '#0F346B',
            },
            headerTintColor: '#fff',
            headerShadowVisible: false,
            }} 
            />
        </Tab.Navigator>
    );
}

export default Tabs;