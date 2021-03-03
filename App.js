/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    StyleSheet,
    StatusBar,
} from 'react-native';
import HomeScreen from "./screens/HomeScreen";

const App = () => {
    return (
        <>
            <StatusBar barStyle="dark-content"/>
            <HomeScreen/>
        </>
    );
};

const styles = StyleSheet.create({});

export default App;
