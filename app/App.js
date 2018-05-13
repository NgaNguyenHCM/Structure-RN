import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Login from "./scenes/Authentication/Login";
import Register from "./scenes/Authentication/Register";


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
       <Login/>
    );
  }
}

