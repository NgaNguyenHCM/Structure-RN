import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import FBSDK, {LoginManager,AccessToken } from 'react-native-fbsdk';
import firebase from 'firebase';
import {styles} from "./styles";

// export default class FacebookLogin extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isLogged:false,
//         };
//     }
//     componentWillMount(){
//         let config={
//             apiKey: "AIzaSyCFdgpLl2z_SFMW-7cks_8fJ19Ro6bl4JI",
//             authDomain: "testlogin-4b1be.firebaseapp.com",
//             databaseURL: "https://testlogin-4b1be.firebaseio.com",
//             projectId: "testlogin-4b1be",
//             storageBucket: "testlogin-4b1be.appspot.com",
//             messagingSenderId: "635247557493"
//         }
//         firebase.initializeApp(config);
//     };
//
//     _fbAuth=async()=> {
//         try {
//             const result = await LoginManager.logInWithReadPermissions(['public_profile']);
//             if (result.isCancelled) {
//                 alert('Login cancelled');
//             } else {
//                 console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);
//                 const data = await AccessToken.getCurrentAccessToken();
//                 if (!data) {
//                     alert('Some error occured');
//                 } else {
//                     const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
//                     const currentUser = await firebase.auth().signInAndRetrieveDataWithCredential(credential);
//                     console.info(JSON.stringify(currentUser.user.toJSON()));
//                 }
//             }
//         }catch (e) {
//             console.error(e);
//         }
//     }
//
//     render() {
//         return (
//             <View style={styles.login}>
//                 <TouchableOpacity style={[styles.loginButton,{backgroundColor:"#3C5A98"}]} onPress={this._fbAuth}>
//                     <Text style={styles.socialLoginText}>Facebook</Text>
//                 </TouchableOpacity>
//             </View>
//         );
//     }
// }

export default class FacebookLogin extends Component {

    _fbAuth=async()=>{
        LoginManager.logInWithReadPermissions(['public_profile']).then(
            function(result) {
                if (result.isCancelled) {
                    alert('Login cancelled');
                } else {
                    alert('Login success with permissions: '
                        +result.grantedPermissions.toString());
                }
            },
            function(error) {
                alert('Login fail with error: ' + error);
            }
        );
    }
    render() {
        return (
            <View style={styles.login}>
                <TouchableOpacity style={[styles.loginButton,{backgroundColor:"#3C5A98"}]} onPress={this._fbAuth}>
                    <Text style={styles.socialLoginText}>Facebook</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
