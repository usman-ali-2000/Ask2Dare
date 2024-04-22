import React, { useState } from "react";
import { FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./style";
import Header from "../../components/Header";
import theme from "../../theme/GlobalTheme";
import { useSafeAreaFrame } from "react-native-safe-area-context";
import HomeItem from "../../components/HomeItem";

const Search=({navigation})=>{


    const RecentData = [
        {
            id:0,
            text:'Lorem Ipsum'
        },{
            id:1,
            text:'Lorem Ipsum'
        },{
            id:2,
            text:'Lorem Ipsum'
        },{
            id:3,
            text:'Lorem Ipsum'
        },{
            id:4,
            text:'Lorem Ipsum'
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

    const [recentData, setRecentData] = useState(RecentData);
    const [search, setSearch] = useState('');
    const [showProData, setShowProData] = useState(false);

    const handleRecentDelete=(id)=>{
        const filter = recentData.filter((item)=>item.id !== id);
        setRecentData(filter);
    }

    const handleSearch=(text)=>{
        setSearch(text);
        if(text !== ''){
            setShowProData(true);
        }else{
            setShowProData(false);
        }
    }

    const RecentSearch=()=>{
        return(
            <View style={styles.recentContainer}>
                <Text style={styles.recentSearch}>Recent Searches</Text>
                <FlatList
                showsVerticalScrollIndicator={false}
                style={{width:'100%'}}
                contentContainerStyle={{width:'100%', alignItems:'center'}}
                data={recentData}
                renderItem={({item})=>{
                    return(
                        <TouchableOpacity onPress={()=>handleSearch(item.text)} style={styles.recentTextContainer}>
                            <Text style={styles.recentText}>{item.text}</Text>
                            <TouchableOpacity onPress={()=>{handleRecentDelete(item.id)}}>
                            <Image style={styles.cross} source={require('../../assets/images/cross.png')}/>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    )
                }}
                />
            </View>
        )
    }

    
    const ProChallange=()=>{

        return(
            <FlatList
            style={{width:'100%', marginBottom:'5%'}}
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
            <View  style={styles.header}>
            <Header text="Search" onPress={()=>navigation.goBack()}/>
            </View>
            <ScrollView style={{width:'100%'}} contentContainerStyle={{width:'100%', alignItems:'center'}}
            showsVerticalScrollIndicator={false}>
            <View style={styles.searchContainer}>
                <Image source={require('../../assets/images/find-green.png')} style={styles.findIcon}/>
                <TextInput 
                placeholder="Push ups" 
                placeholderTextColor={theme.colors.green} 
                style={styles.input}
                value={search}
                onChangeText={handleSearch}/>
            </View>
            {showProData?<ProChallange/>:<RecentSearch/>}
            </ScrollView>
        </View>
    )
}

export default Search;