import React, { Component } from 'react';
import {Image,TouchableOpacity,TextInput, Text, View} from 'react-native';
import {colors} from "../../resource/colors";
import Hr from 'react-native-hr-component';
import ViewContainer from "../../components/ViewContainer";
import StatusBar from "../../components/StatusBar";
import Logo from "../../components/Logo";
import {styles,HrLineStyle} from "./styles";
import FacebookLogin from "./FacebookAuth";



export default class Login extends Component{
    constructor(props){
        super(props)
        this.states={
            email:'',
            password:''
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
            style={[styles.textInput,{marginBottom:20}]}
            placeholder="Password"
            placeholderTextColor="#ffffff"
            onChangeText={(text)=>this.setState({password:text})}
            value={this.states.password}
            returnKeyType='done'
        />
        </View>
        <View>
            <TouchableOpacity
                style={styles.forgotPw}
                onPress={() => this.props.navigation.navigate('ResetPassword')}>
                <Text style={styles.forgotPwText}>Forgot password?</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.login}>
            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.login}>
            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginText}>REGISTER</Text>
            </TouchableOpacity>
        </View>
        <View style={{marginBottom:20}}>
            <Hr textPadding={10} lineColor={colors.text} width={1} text="OR CONNECT WITH" textStyles={HrLineStyle} />
        </View>
       <FacebookLogin/>
        <View style={styles.login}>
            <TouchableOpacity style={[styles.loginButton,{backgroundColor:"#DB4A38"}]}>
                <Text style={styles.socialLoginText}>Google</Text>
            </TouchableOpacity>
        </View>
    }
    </ViewContainer>
    );
  }
}

