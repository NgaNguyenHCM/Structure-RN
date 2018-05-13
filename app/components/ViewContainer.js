import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import {colors} from "../resource/colors";


type Props = {};
export default class ViewContainer extends Component<Props> {
    render() {
        return (
            <View style={styles.viewContainer}>
                {this.props.children}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewContainer:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'stretch',
        backgroundColor:colors.main,
        paddingHorizontal:40,
    }
});