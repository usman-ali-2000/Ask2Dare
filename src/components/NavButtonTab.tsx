import React from "react";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import theme from "../theme/GlobalTheme";

type MyComponentProps = {
    text?:string;
    onPress?:()=>void;
    focus?:boolean;
}

const NavButton:React.FC<MyComponentProps> =(props)=>{

    return(
        <TouchableOpacity onPress={props.onPress}>
        <ImageBackground style={[styles.container,{backgroundColor: props.focus? theme.colors.darkGreen:'rgba(207, 207, 207, 1)', borderColor: props.focus? theme.colors.darkGreen:'rgba(207, 207, 207, 1)' }]} source={props.focus && require('../assets/images/header-back.png')}>
            <Text style={styles.text}>{props.text}</Text>
        </ImageBackground>
        </TouchableOpacity>
    )
}
export default NavButton;

const styles = StyleSheet.create({
    container:{
    borderColor:theme.colors.darkGreen,
    borderRadius:2,
    borderWidth:1,
    backgroundColor:theme.colors.darkGreen,
    // margin:'2%',
    // width:150
    // paddingLeft:'10%',
    // paddingRight:'10%',
    // marginRight:'10%',
    // marginLeft:'10%',
    height:36,
    padding:5,
    paddingTop:8
    },
    text:{
        color:theme.colors.white,
        fontSize:12,
        fontFamily:'OpenSans-Regular',
        // paddingTop:'2%',
        // height:16,
        // paddingLeft:'10%',
        // paddingRight:'10%'
    }
})