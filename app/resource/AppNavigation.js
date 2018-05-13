import React, { Component } from 'react';
import {StackNavigation} from 'react-navigation';
import Login from "./scenes/Authentication/Login";


type Props = {};
export default class AppNavigation extends Component<Props> {
    render() {
        return (
            <Login/>
        );
    }
}
