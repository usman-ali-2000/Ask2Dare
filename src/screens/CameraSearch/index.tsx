import React from "react";
import { FlatList, Image, ImageBackground, ScrollView, Text, TextInput, View } from "react-native";
import styles from "./style";
import theme from '../../theme/GlobalTheme';
import CameraItem from "../../components/CameraItem";

const CameraSearch=()=>{

    const Data = [
        {
            id:0,
            leftImage:require('../../assets/images/weight-lift.png'),
            heading:'I can see you',
            detail:'Taylor Swift',
            rightImage:require('../../assets/images/play-button.png'),
        },{
            id:1,
            leftImage:require('../../assets/images/weight-lift.png'),
            heading:'I can see you',
            detail:'Taylor Swift',
            rightImage:require('../../assets/images/play-button.png'),
        },{
            id:2,
            leftImage:require('../../assets/images/weight-lift.png'),
            heading:'I can see you',
            detail:'Taylor Swift',
            rightImage:require('../../assets/images/play-button.png'),
        },{
            id:3,
            leftImage:require('../../assets/images/weight-lift.png'),
            heading:'I can see you',
            detail:'Taylor Swift',
            rightImage:require('../../assets/images/play-button.png'),
        },{
            id:4,
            leftImage:require('../../assets/images/weight-lift.png'),
            heading:'I can see you',
            detail:'Taylor Swift',
            rightImage:require('../../assets/images/play-button.png'),
        },{
            id:5,
            leftImage:require('../../assets/images/weight-lift.png'),
            heading:'I can see you',
            detail:'Taylor Swift',
            rightImage:require('../../assets/images/play-button.png'),
        },{
            id:7,
            leftImage:require('../../assets/images/weight-lift.png'),
            heading:'I can see you',
            detail:'Taylor Swift',
            rightImage:require('../../assets/images/play-button.png'),
        },{
            id:8,
            leftImage:require('../../assets/images/weight-lift.png'),
            heading:'I can see you',
            detail:'Taylor Swift',
            rightImage:require('../../assets/images/play-button.png'),
        }
    ]

    return(
        <View style={styles.container}>
            <ImageBackground style={styles.header} source={require('../../assets/images/header-back.png')}>
                <View style={styles.SearchContainer}>
                    <Image style={styles.find} source={require('../../assets/images/find.png')}/>
                    <TextInput placeholder="Search..." placeholderTextColor={theme.colors.white} style={styles.input}/>
                </View>
            </ImageBackground>
            <ScrollView style={{width:'100%'}} contentContainerStyle={{width:'100%', alignItems:'center', justifyContent:'flex-start', flex:1}} showsVerticalScrollIndicator={false}>
            <FlatList
            showsVerticalScrollIndicator={false}
            data={Data}
            renderItem={({item})=>{
                return(
                    <View style={{width:'100%', alignItems:'center', marginTop:'5%'}}>
                    <CameraItem leftImage={item.leftImage} heading={item.heading} detail={item.detail} rightImage={item.rightImage}/>
                    </View>
                )
            }}
            />
            </ScrollView>
        </View>
    )
}

export default CameraSearch;