import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

type Props = {};
export default class StatusBar extends Component<Props> {
    render() {
        return (
            <View style={styles.statusBar}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    statusBar:{
        height:20,
    }
});