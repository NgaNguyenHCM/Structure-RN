import {StyleSheet,} from 'react-native';
import {colors} from "../../resource/colors";

export const HrLineStyle={
    fontWeight: "bold",
    color: colors.text,
    fontSize:14,
}
export const styles=StyleSheet.create({
    textInput: {
        height:50,
        paddingHorizontal:10,
        fontSize:12,
        textAlign:'left',
        borderBottomWidth:1,
        borderBottomColor:'#ffffff',
        justifyContent:'flex-end',
    },
    // inputButtons:{
    //     flex:1,
    // },
    login:{
        marginBottom:20,

    },
    loginButton:{
        height:40,
        borderRadius:20,
        alignItems:'center',
        overflow:'hidden',
        justifyContent:'center',
        backgroundColor:'white',
    },
    loginText:{color:colors.main, fontWeight: 'bold',textDecorationLine:'none',fontSize:14},
    forgotPw:{
        justifyContent:'center',
        alignItems:'flex-end',
        marginBottom:20,
    },
    forgotPwText: { color:'#ffffff', fontWeight: 'bold',textDecorationLine:'underline',fontSize:12 },
    socialLoginText:{ color:'#ffffff', fontWeight: 'bold',fontSize:14}

});