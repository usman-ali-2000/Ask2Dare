import React, { useState } from "react";
import { FlatList, Image, KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./style";
import HomeHeader from "../../components/HomeHeader";
import NavButton from "../../components/NavButtonTab";
import { SafeAreaView, useSafeAreaFrame } from "react-native-safe-area-context";
import theme from "../../theme/GlobalTheme";
import HomeItem from "../../components/HomeItem";

const Home=({navigation})=>{

    const [proChallange, setProChallange] = useState(true);
    const [freeChanllange, setFreeChallange] = useState(false);

    
    const handlePro=()=>{
        setProChallange(true);
        setFreeChallange(false);
    }

    const hanldeFree=()=>{
        setProChallange(false);
        setFreeChallange(true);
    }

    const tabData = [
        {
            id:0,
            text:'Pro Challanges',
            focus: proChallange,
            onPress: handlePro,
        },{
            id:1,
            text:'Free Challenges',
            focus:freeChanllange,
            onPress: hanldeFree,
        },{
            id:2,
            text:'Ultimate Challenges',
            focus:false,
        },{
            id:3,
            text:'Ultimate Challenges',
            focus:false,
        }
    ]

    const ProData=[
        {
            id:0,
            profile:require('../../assets/images/profile.png'),
            name:'Mike Ross',
            duration:'21m ago',
            detail:'Do 20 pushups with one hand!!',
            price:'5$',
            time:'21:20',
            comment:'I can do 20 pushups in 10 seconds. Try giving a hard challenge.',
            cornerText:'Pro Challenge',
            image:require('../../assets/images/pushup.png'),
            commentProfile:require('../../assets/images/comment-image.png'),
        },{
            id:1,
            profile:require('../../assets/images/profile.png'),
            name:'Mike Ross',
            duration:'21m ago',
            detail:'Do 20 pushups with one hand!!',
            price:'5$',
            time:'21:20',
            comment:'I can do 20 pushups in 10 seconds. Try giving a hard challenge.',
            cornerText:'Pro Challenge',
            image:require('../../assets/images/pushup.png'),
            commentProfile:require('../../assets/images/comment-image.png'),
        }
    ]

    
    const FreeData=[
        {
            id:0,
            profile:require('../../assets/images/profile.png'),
            name:'Mike Ross',
            duration:'21m ago',
            detail:'Do 20 sit-ups and 20 crunches!!',
            time:'21:20',
            comment:'I can do 20 pushups in 10 seconds. Try giving a hard challenge.',
            cornerText:'Free Challenge',
            image:require('../../assets/images/situps.png'),
            commentProfile:require('../../assets/images/comment-image.png'),
        },{
            id:1,
            profile:require('../../assets/images/profile.png'),
            name:'Mike Ross',
            duration:'21m ago',
            detail:'Do 20 sit-ups and 20 crunches!!',
            time:'21:20',
            comment:'I can do 20 pushups in 10 seconds. Try giving a hard challenge.',
            cornerText:'Free Challenge',
            image:require('../../assets/images/situps.png'),
            commentProfile:require('../../assets/images/comment-image.png'),
        }
    ]



    const FreeChallange=()=>{

        return(
            <FlatList
            data={FreeData}
            renderItem={({item})=>{
                return(
                    <View style={{width:'100%', alignItems:'center', marginTop:'5%'}}>
                        <HomeItem 
                         profile={item.profile} 
                         name={item.name}
                         duration={item.duration}
                         detail={item.detail}
                         time={item.time}
                         comment={item.comment}
                         cornerText={item.cornerText}
                         image={item.image}
                         commentProfile={item.commentProfile}
                         showPrice={false}
                        />
                    </View>
                )
            }}
            />
        )
    }

    const ProChallange=()=>{

        return(
            <FlatList
            data={ProData}
            renderItem={({item})=>{
                return(
                    <View style={{width:'100%', alignItems:'center', marginTop:'5%'}}>
                        <HomeItem 
                         profile={item.profile} 
                         name={item.name}
                         duration={item.duration}
                         detail={item.detail}
                         price={item.price}
                         time={item.time}
                         comment={item.comment}
                         cornerText={item.cornerText}
                         image={item.image}
                         commentProfile={item.commentProfile}
                         onImagePress={()=>navigation.navigate('ChallengeDetail')}
                        />
                    </View>
                )
            }}
            />
        )
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
            <HomeHeader/>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{width:'100%'}}>
            <View style={{width:'100%', height:36, paddingLeft:'2%', marginTop:'5%'}}>
            <FlatList
            showsHorizontalScrollIndicator={false}
            style={{width:'100%'}}
             data={tabData}
             horizontal={true}
             renderItem={({item})=>{
                return(
                    <View style={{marginLeft:5, marginRight:5 }}>
                    <NavButton text={item.text} focus={item.focus} onPress={item.onPress}/>
                    </View>
    )}}
    />
    </View>
    <TouchableOpacity onPress={()=>navigation.navigate('PostChallange')} style={{width:'100%', alignItems:'center'}}>
    <View style={styles.searchContainer}>
        <View style={styles.profile}>
            <Image style={styles.pic} source={require('../../assets/images/profile.png')}/>
        </View>
        <Text style={styles.search}>Post a Pro Challange Now?</Text>
        <Image style={styles.galleryIcon} source={require('../../assets/images/gallery-icon.png')}/>
    </View>
    </TouchableOpacity>
    {proChallange && <ProChallange/>}
    {freeChanllange && <FreeChallange/>}
    </ScrollView>
        </View>
    )
}

export default Home;