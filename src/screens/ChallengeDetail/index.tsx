import React from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import Header from "../../components/Header";
import theme from "../../theme/GlobalTheme";
import ChallengeItem from "../../components/ChallengeItem";
import HomeItem from "../../components/HomeItem";

const ChallengeDetail=({navigation})=>{

    
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
            image:require('../../assets/images/situps.png'),
            commentProfile:require('../../assets/images/comment-image.png'),
        },{
            id:2,
            profile:require('../../assets/images/profile2.png'),
            name:'Mike Ross',
            duration:'21m ago',
            detail:'Do 20 pushups with one hand!!',
            price:'5$',
            time:'21:20',
            comment:'I can do 20 pushups in 10 seconds. Try giving a hard challenge.',
            cornerText:'Pro Challenge',
            image:require('../../assets/images/walk.png'),
            commentProfile:require('../../assets/images/comment-image.png'),
        }
    ]

    
    const ProChallange=()=>{

        return(
            <FlatList
            showsVerticalScrollIndicator={false}
            style={{width:'100%'}}
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
                         showMedal={true}
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
                <Header text="Challenge" onPress={()=>navigation.goBack()}/>
            </View>
                        <ScrollView 
                        style={{
                        width:'100%', 
                        marginBottom:'5%', 
                        marginTop:'2%'
                        }} 
                        contentContainerStyle={{
                        width:'100%', 
                        alignItems:'center'
                        }} 
                        showsVerticalScrollIndicator={false}>
                        <ChallengeItem 
                         profile={ProData[0].profile} 
                         name={ProData[0].name}
                         duration={ProData[0].duration}
                         detail={ProData[0].detail}
                         price={ProData[0].price}
                         time={ProData[0].time}
                         image={ProData[0].image}
                        />
                        <TouchableOpacity onPress={()=>navigation.navigate('CameraSearch')} style={styles.addContainer}>
                            <View style={styles.add}>
                                <Image style={styles.plus} source={require('../../assets/images/plus.png')}/>
                                </View>
                        </TouchableOpacity>
                        <View style={styles.container1}>
                            <Text style={styles.container1Text}>What people submitted</Text>
                            <View style={styles.recentContainer}>
                                <Text style={styles.recent}>Recent</Text>
                                <Image style={styles.arrowDown} source={require('../../assets/images/arrow-down.png')}/>
                            </View>
                        </View>
                        <View style={{width:'100%', alignItems:'center'}}>
                        <ProChallange/>
                        </View>
            </ScrollView>
        </View>
    )
}
export default ChallengeDetail;