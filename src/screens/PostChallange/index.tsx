import React, { useEffect, useState } from "react";
import { Image, Modal, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import Header from "../../components/Header";
import styles from "./style";
import theme from "../../theme/GlobalTheme";
import PostInput from "../../components/PostInput";
import Button from "../../components/Button";
import { ImageLibraryOptions, ImagePickerResponse, launchImageLibrary } from "react-native-image-picker";
import {requestGalleryPermission} from "../../misc/permissions";

const PostChallange=({navigation})=>{

    const [pro, setPro] = useState(true);
    const [free, setFree] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const handlePro =()=>{
        setPro(true);
        setFree(false);
    }

    
    const handleFree =()=>{
        setPro(false);
        setFree(true);
    }

    const handleModal=()=>{
        setIsVisible(!isVisible);
    }

    const closeModal=()=>{
        setIsVisible(false);
        navigation.navigate('Home');
    }
    

    const CustomAlert = () => {
        return (
           
            <Modal
            visible={isVisible}
            animationType="slide"
            onRequestClose={closeModal}
            style={{width:'100%', height:'100%', backgroundColor:'rgba(0, 0, 0, 0.5)'}}
            transparent={true}
          >
            <View
            style={{
                backgroundColor:'rgba(0, 0, 0, 0.5)',
                flex:1,
                width:'100%',
                alignItems:'center',
                justifyContent:'center',
            }}>
            <View style={{ 
                backgroundColor: theme.colors.green,
                padding: 20, 
                alignItems:'center', 
                justifyContent:'center', 
                height:'18%', 
                width:'60%',
                borderRadius:10,
                marginTop:'26%',
                }}>
              <View style={{
                width:'100%', 
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'center'
              }}>
              <Text
              style={{
                color:theme.colors.white,
                fontSize:14,
                fontFamily:'OpenSans-SemiBold',
                width:180,
                padding:'2%',
                paddingLeft:'5%'
              }}>Please Confirm</Text>
              <TouchableOpacity onPress={closeModal}>
              <Image style={{height:11, width:11}} source={require('../../assets/images/white-cross.png')}/>
              </TouchableOpacity>
              </View>
              <Text
              style={{
                fontSize:12,
                fontFamily:'OpenSans-Regular',
                color:theme.colors.grey,
                width:180,
                padding:'2%'
              }}>Please verify the information
              because its not refundable. 
              and it is deducted from your 
              wallet</Text>
              </View>
              </View>
          </Modal>
         );
      };

      
    const openImagePicker = () => {
        const options: ImageLibraryOptions = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };

        launchImageLibrary(options, (response: ImagePickerResponse) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorMessage) {
                console.log('Image picker error');
            } else {
                let imageUri = response.assets?.[0]?.uri;
                if(imageUri){
                setSelectedImage(imageUri);
                }else{
                    console.log('image uri is undefined');
                }
            }
        });
    };

      const handlePost = ()=>{
        if(pro === true){
           handleModal();
        }else{
            navigation.navigate('Home');
        }
      }

      useEffect(()=>{
        requestGalleryPermission();
      },[]);

    return(
        <View style={styles.container}>
           <View style={styles.header}>
            <Header text="Post a Challange" onPress={()=>navigation.goBack()}/>
           </View>
           <ScrollView style={{width:'100%', flex:1}} contentContainerStyle={{width:'100%', alignItems:'center', paddingBottom:'10%'}}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
           <View style={styles.topContainer}>
        <View style={styles.profile}>
            <Image style={styles.pic} source={require('../../assets/images/profile.png')}/>
        </View>
        <Text style={styles.name}>John Doe</Text>
        <View style={styles.selectContainer}>
            <TouchableOpacity onPress={handlePro} style={[styles.select,{backgroundColor: pro?theme.colors.green: theme.colors.lightgrey, borderTopLeftRadius:5, borderBottomLeftRadius:5}]}>
                <Text style={styles.selectText}>PRO</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleFree} style={[styles.select,{backgroundColor:free? theme.colors.green:theme.colors.lightgrey, borderTopRightRadius:5, borderBottomRightRadius:5}]}>
                <Text style={styles.selectText}>FREE</Text>
            </TouchableOpacity>
        </View>
           </View>
           <View style={styles.postContainer}>
            <TextInput
            style={styles.input}
            placeholder="What challenge you want to post!" 
            placeholderTextColor={theme.colors.grey}/>
          <View style={styles.smilyContainer}>
            <Image style={styles.smily} source={require('../../assets/images/smily.png')}/>
          </View>
          <View style={styles.bottomContainer}>
            <TouchableOpacity onPress={openImagePicker} style={styles.bottomItem}>
                <Image style={styles.GalleryIcon} source={require('../../assets/images/gallery-icon.png')}/>
                <Text style={styles.bottomText}>Upload Image</Text>
            </TouchableOpacity>
            <View style={{height:25, width:1, backgroundColor:theme.colors.grey}}/>
            <TouchableOpacity onPress={openImagePicker} style={styles.bottomItem}>
                <Image style={styles.VideoIcon} source={require('../../assets/images/video.png')}/>
                <Text style={styles.bottomText}>Upload Video</Text>
            </TouchableOpacity>
          </View>
          </View>
          <View style={styles.timeInput}>
          <PostInput text="Challenge Time" placeholder="00:00:00" icon={require('../../assets/images/clock.png')} keyboard="numeric"/>
          </View>
          {pro && <View style={styles.timeInput}>
          <PostInput text="Challenge Reward" placeholder="Enter Amount" icon={require('../../assets/images/coin.png')} keyboard="numeric"/>
          </View>}
          <Button text="Post Challenge" onPress={handlePost}/>
          <CustomAlert/>
          </ScrollView>
        </View>
    )
}
export default PostChallange;