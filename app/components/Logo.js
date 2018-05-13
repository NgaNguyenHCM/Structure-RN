import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    View
} from 'react-native';

type Props = {};
export default class Logo extends Component<Props> {
    render() {
        return (
            <View style={styles.imageContainer}>
                <Image
                    source={require('../../app/resource/images/logo-with-text.png')}
                    style={styles.logoImage}
                    resizeMode="contain"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    imageContainer: {justifyContent:'flex-end', alignItems:'center',marginTop:20,},
    logoImage:{width: 140, height: 140, marginVertical: 30}
});