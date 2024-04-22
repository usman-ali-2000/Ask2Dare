import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import theme from "../theme/GlobalTheme";

type MyComponentProps={
    onPress?:()=>void;
    text?:string;
}

const Button:React.FC<MyComponentProps>=(props)=>{

    return(
        <TouchableOpacity onPress={props.onPress} style={styles.container}>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    )
}
export default Button;

const styles = StyleSheet.create({
    container:{
        width:'90%',
        height:50,
        borderRadius:10,
        backgroundColor:theme.colors.green,
        justifyContent:'center',
        alignItems:'center',
        marginTop:'5%'
    },
    text:{
        fontSize:16,
        fontFamily:'OpenSans-Bold',
        color:theme.colors.white
    }
})