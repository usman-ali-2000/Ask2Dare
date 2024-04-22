import React from "react";
import { Image, ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import theme from "../theme/GlobalTheme";

type MyComponentProps={
    onPress?:()=>void;
    text?:string;
}

const Header:React.FC<MyComponentProps>=(props)=>{

    return(
        
        <View style={styles.container}>
        <ImageBackground style={styles.backImage} source={require('../assets/images/header-back.png')}>
        <StatusBar
        barStyle="light-content"
        translucent={true}
        backgroundColor="transparent"
        />
        <View style={styles.container1}>
        <TouchableOpacity onPress={props.onPress}>
        <Image style={styles.back} source={require('../assets/images/back.png')}/>
        </TouchableOpacity>
        <Text style={styles.text}>{props.text}</Text>
        </View>
        </ImageBackground>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:120,
    },
    backImage:{
        height:137,
        width:'100%',
    },
    back:{
        height:22,
        width:12,
    },
    text:{
        color:theme.colors.white,
        fontSize:16,
        fontFamily:'OpenSans-SemiBold',
        textAlign:'center',
        width:'85%',
    },
    container1:{
        width:'100%',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'flex-start',
        marginLeft:'5%',
        marginTop:'20%'
    }   
})