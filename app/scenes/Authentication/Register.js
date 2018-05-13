import React, { Component } from 'react';
import {TouchableOpacity,TextInput, Text, View} from 'react-native';
import ViewContainer from "../../components/ViewContainer";
import StatusBar from "../../components/StatusBar";
import Logo from "../../components/Logo";
import {styles} from "./styles";


export default class Register extends Component{
    constructor(props){
        super(props)
        this.states={
            email:'',
            password:'',
            confirmPassword:'',
        }
    }
    render() {
        return (
            <ViewContainer>
                <StatusBar/>
                <Logo/>
                <View>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Email"
                        placeholderTextColor="#ffffff"
                        onChangeText={(text)=>this.setState({email:text})}
                        value={this.states.email}
                        returnKeyType='next'
                    />
                    <TextInput
                        style={[styles.textInput]}
                        placeholder="Password"
                        placeholderTextColor="#ffffff"
                        onChangeText={(text)=>this.setState({password:text})}
                        value={this.states.password}
                        returnKeyType='next'
                    />
                    <TextInput
                        style={[styles.textInput,{marginBottom:40}]}
                        placeholder="Confirm password"
                        placeholderTextColor="#ffffff"
                        onChangeText={(text)=>this.setState({confirmPassword:text})}
                        value={this.states.confirmPassword}
                        returnKeyType='done'
                    />
                </View>
                <View style={styles.login}>
                    <TouchableOpacity style={styles.loginButton} onPress={()=><Register/>}>
                        <Text style={styles.loginText}>REGISTER</Text>
                    </TouchableOpacity>
                </View>
            </ViewContainer>
        );
    }
}


