import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import theme from "../theme/GlobalTheme";

type MyComponentProps={
    text?:string;
    placeholder?:string;
    value?:string;
    onChange?:()=>void;
    icon?:any;
    keyboard?:any;

}

const PostInput:React.FC<MyComponentProps>=(props)=>{

    return(
       <View style={styles.container}>
        <Text style={styles.text}>{props.text}</Text>
        <View style={styles.inputContainer}>
            <TextInput
            style={styles.input} 
            value={props.value}
            onChangeText={props.onChange}
            keyboardType={props.keyboard}
            placeholder={props.placeholder} placeholderTextColor={theme.colors.grey}/>
            <View style={styles.imageContainer}>
            <Image style={styles.image} source={props.icon}/>
            </View>
        </View>
       </View>
    )
}
export default PostInput;

const styles = StyleSheet.create({
      container:{
        width:'100%',
        alignItems:'flex-start',
      },
      text:{
        fontSize:14,
        fontFamily:'OpenSans-Regular',
        color:theme.colors.grey,
        padding:'1%'
      },
      inputContainer:{
        width:'100%',
        flexDirection:'row',
        borderWidth:1,
        borderColor:theme.colors.borderColor,
        borderRadius:10
      },
      input:{
        width:'90%',
        fontSize:16,
        fontFamily:'OpenSans-Regular',
        paddingLeft:'5%',
        backgroundColor:theme.colors.white,
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
      },
      imageContainer:{
        width:'10%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:theme.colors.white,
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
      },
      image:{
        height:22,
        width:22
      }
})