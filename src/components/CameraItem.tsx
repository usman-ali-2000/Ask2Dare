import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import theme from "../theme/GlobalTheme";

type MyComponentProps={
    leftImage?:any;
    heading?:string;
    detail?:string;
    rightImage?:any;
}

const CameraItem:React.FC<MyComponentProps>=(props)=>{

    return(
        <View style={styles.container}>
            <Image style={styles.weightLift} source={props.leftImage}/>
            <View style={styles.textContainer}>
            <Text style={styles.heading}>{props.heading}</Text>
            <Text style={styles.text}>{props.detail}</Text>
            </View>
            <Image style={styles.playButton} source={props.rightImage}/>
        </View>
    )
}
export default CameraItem;

const styles = StyleSheet.create({
    container:{
        width:'95%',
        height:70,
        flexDirection:'row',
        alignItems:'center',
        borderWidth:1,
        borderRadius:5,
        borderColor:theme.colors.green,
        padding:'2%',
        paddingLeft:'4%',
        paddingRight:'4%',
        backgroundColor:theme.colors.white
    },
    weightLift:{
        height:46,
        width:46
    },
    playButton:{
        height:34,
        width:34
    },
    textContainer:{
        width:'75%'
    },
    heading:{
        fontSize:18,
        fontFamily:'OpenSans-Medium',
        color:theme.colors.black,
        paddingLeft:'5%'
    },
    text:{
        fontSize:14,
        fontFamily:'OpenSans-Medium',
        color:theme.colors.grey,
        paddingLeft:'5%'
    }
})