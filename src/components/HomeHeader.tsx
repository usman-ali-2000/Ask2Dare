import React from "react";
import { Image, ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import theme from "../theme/GlobalTheme";
import { NavigationProp, useNavigation } from "@react-navigation/native";

type navProp = NavigationProp<any>

const HomeHeader=()=>{
    
  const navigation = useNavigation<navProp>();

    return(
        <View style={styles.container}>
        <ImageBackground style={styles.backImage} source={require('../assets/images/header-back.png')}>
        <StatusBar
        barStyle="light-content"
        translucent={true}
        backgroundColor="transparent"
        />
        <View style={styles.container1}>
        <View style={styles.profileContainer}>
         <View style={styles.profile}>
            <Image style={styles.pic} source={require('../assets/images/profile.png')}/>
         </View>
         <View style={styles.textContainer}>
         <Text style={styles.welcome}>Welcome Back</Text>
         <Text style={styles.name}>John Doe</Text>
         </View>
         </View>
         <View style={styles.iconContainer}>
            <TouchableOpacity onPress={()=>navigation.navigate('Search')}>
            <Image style={styles.icon} source={require('../assets/images/magnifier.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image style={styles.icon} source={require('../assets/images/info.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image style={styles.icon} source={require('../assets/images/notification.png')}/>
            </TouchableOpacity>
         </View>
        </View>
        </ImageBackground>
        </View>
    )
}

export default HomeHeader;

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:120
    },
    backImage:{
        height:137,
        width:'100%',
    },
    container1:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        alignItems:'center',
        flex:1,
        padding:'5%',
        paddingTop:'10%'
    },
    profileContainer:{
        flexDirection:'row',
        alignItems:'center',
        flex:1,
        width:'100%',
        justifyContent:'space-between',
    },
    iconContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'30%'
    },

    profile:{
        height:50,
        width:50,
        borderWidth:10,
        borderColor:theme.colors.white,
        borderRadius:24,
        alignItems:'center',
        justifyContent:'center'
    },
    pic:{
        height:46,
        width:46,
    },
    textContainer:{
        flexDirection:'column',
        flex:1,
        width:'100%',
        alignItems:'flex-start',
        paddingLeft:'5%'
        },
    welcome:{
        fontSize:14,
        fontFamily:'OpenSans-Medium',
        color:theme.colors.white
    },
    name:{
        fontSize:16,
        fontFamily:'OpenSans-Bold',
        color:theme.colors.white,
    },
    icon:{
        height:21,
        width:21
    }
})