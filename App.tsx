import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View} from 'react-native';

import Routes from './src/Pages/Home';



export default function App() {
    return (  
        <View style={{flex:1}}>
            <Routes/>
        </View>
    );
}