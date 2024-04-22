import React, { useState } from "react";
import { Image, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import theme from "../theme/GlobalTheme";
import { Menu, MenuItem} from "react-native-material-menu";

type MyComponentProps={
    profile?:any;
    name?:string;
    duration?:string;
    detail?:string;
    price?:string;
    time?:string;
    cornerText?:string;
    image?:any;
    commentProfile?:any;
    comment?:string;
    showPrice?:boolean;
    onImagePress?:()=>void;
    showMedal?:boolean;
}

const HomeItem:React.FC<MyComponentProps>=(props)=>{

    const [menuVisible, setMenuVisible] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const showMenu=()=>{
        setMenuVisible(true);
    }
    const closeMenu=()=>{
        setMenuVisible(false);
    }

    const handleModal=()=>{
        setIsVisible(!isVisible);
        // setMenuVisible(false);
    }

    const closeModal=()=>{
        setIsVisible(false);
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
                height:'20%', 
                width:'60%',
                borderRadius:10,
                marginTop:'26%',
                }}>
              <Text
              style={{
                color:theme.colors.white,
                fontSize:14,
                fontFamily:'OpenSans-SemiBold',
                width:180,
                padding:'2%'
              }}>Report Mike Ross</Text>
              <Text
              style={{
                fontSize:12,
                fontFamily:'OpenSans-Regular',
                color:theme.colors.grey,
                width:180,
                padding:'2%'
              }}>This profile’s post will be forwarded to Ask 2 Dare. This profile will not be notified</Text>
              <View style={{
                flexDirection:'row',
                width:'100%',
                justifyContent:'flex-end'
              }}>
              <TouchableOpacity onPress={closeModal}
              style={{
              padding:'2%'}}>
                <Text style={{
                    color:theme.colors.white,
                    fontSize:12,
                    fontFamily:'OpenSans-Regular'
                }}>Close</Text>
              </TouchableOpacity>
              <TouchableOpacity
              style={{
              padding:'2%'}}>
                <Text style={{
                    color:theme.colors.white,
                    fontSize:12,
                    fontFamily:'OpenSans-Regular'
                }}>Report</Text>
              </TouchableOpacity>
              </View>
              </View>
              </View>
          </Modal>
         );
      };

    const MenuItems=()=>{
        return(
                <Menu
                visible={menuVisible}
                 onRequestClose={closeMenu}
                 style={styles.menuContainer}
                >
                    <MenuItem textStyle={{
                        color:theme.colors.white, 
                        textAlign:'center', 
                        verticalAlign:'middle', 
                        fontSize:14, 
                        fontFamily:'OpenSans-SemiBold',
                        marginRight:'15%'
                    }}
                    onPress={handleModal}>Report</MenuItem>
                </Menu>
        )
    }

    return(
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.profileContainer}>
                    {props.showMedal && <Image style={styles.medal} source={require('../assets/images/medal.png')}/>}
                    <Image style={styles.profilePic} source={props.profile}/>
                    <View style={styles.nameContainer}>
                        <Text style={styles.name}>{props.name}</Text>
                        <Text style={styles.time}>{props.duration}</Text>
                    </View>
                    <TouchableOpacity onPress={showMenu} style={styles.dots}>
                    <Image style={styles.dots} source={require('../assets/images/dots.png')}/>
                    </TouchableOpacity>
                    <MenuItems/>
                    <CustomAlert/>
                </View>
                    <Text style={styles.cornerText}>{props.cornerText}</Text>
            </View>
            <View style={styles.container2}>
                <Text style={styles.text}>{props.detail}</Text>
                <View style={styles.timeContainer}>
                {props.showPrice !== false && <Text style={styles.price}>{props.price}</Text>}
                <View style={[styles.time1,{marginLeft:props.showPrice !== false? 0:'45%'}]}>
                    <Image style={styles.clock} source={require('../assets/images/clock.png')}/>
                    <Text style={styles.timeText}>{props.time}</Text>
                </View>
                </View>
            </View>
            <TouchableOpacity onPress={props.onImagePress}  style={styles.imageContainer}>
            <Image style={styles.image} source={props.image}/>
            </TouchableOpacity>
            <View style={styles.reactContainer}>
                <TouchableOpacity style={styles.likeContainer}>
                    <Image style={styles.like} source={require('../assets/images/like.png')}/>
                    <Text style={styles.number}>203</Text>
                    <Text style={styles.likeText}>like</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.likeContainer}>
                    <Image style={styles.like} source={require('../assets/images/comment.png')}/>
                    <Text style={styles.number}>25</Text>
                    <Text style={styles.likeText}>Comments</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.likeContainer}>
                    <Image style={styles.like} source={require('../assets/images/share.png')}/>
                    <Text style={styles.number}>3</Text>
                    <Text style={styles.likeText}>Share</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.commentContainer}>
                <Image style={[styles.profilePic,{marginRight:'2%', marginTop:'2%'}]} source={props.commentProfile}/>
                <View style={styles.textContainer}>
                <Text style={styles.commentText}>{props.comment}</Text>
                <View style={styles.commentIconContainer}>
                    <Image style={styles.commentIcon} source={require('../assets/images/like.png')}/>
                    <Image style={styles.commentIcon} source={require('../assets/images/comment.png')}/>
                </View>
                </View>
            </View>
            <View style={styles.bottomContainer}>
            <Image style={styles.profilePic} source={props.profile}/>
            <TextInput style={styles.input} placeholder="write a Comment..." placeholderTextColor={theme.colors.grey}/>
            </View>
        </View>
    )
}
export default HomeItem;

const styles = StyleSheet.create({
    container:{
        width:'95%',
        backgroundColor:theme.colors.white,
        borderRadius:5,
        elevation:5,
    },
    topContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    profileContainer:{
        flexDirection:'row',
        paddingLeft:'4%',
        paddingTop:'3%'
    },
    profilePic:{
        height:35,
        width:35,
    },
    nameContainer:{
      flexDirection:'column', 
      paddingLeft:'7%'
    }, 
    name:{
        fontSize:14,
        fontFamily:'OpenSans-SemiBold',
        color: theme.colors.black
    },
    time:{
        fontSize:8,
        fontFamily:'OpenSans-SemiBold',
        color:theme.colors.grey
    },
    dots:{
        height:16,
        width:16,
        marginLeft:'5%'
    },
    cornerText:{
        fontSize:12,
        fontFamily:'OpenSans-Regular',
        color:theme.colors.white,
        backgroundColor:theme.colors.green,
        height:25,
        paddingLeft:'2%',
        paddingRight:'2%',
        borderTopRightRadius:3,
        borderBottomLeftRadius:3,
        paddingTop:'1%'
    },
    container2:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        padding:'5%',
        paddingLeft:'3%',
        paddingTop:'2%',
        paddingBottom:'2%',
    },
    price:{
        height:20,
        backgroundColor:theme.colors.darkBlue,
        color:theme.colors.white, 
        paddingLeft:'10%',
        paddingRight:'10%',
        borderRadius:3,
        marginRight:'10%'
    },
    timeContainer:{
        flexDirection:'row',
        width:'30%',
        justifyContent:'space-between',
        marginRight:'7%'
    },
    text:{
        color:theme.colors.black,
        fontSize:12,
        fontFamily:'OpenSans-Regular'
    },
    time1:{
        flexDirection:'row',
        height:20,
        alignItems:'center',
        backgroundColor:'rgba(54, 109, 98, 0.2)',
        paddingLeft:'15%',
        paddingRight:'15%',
        borderRadius:3,
        // marginLeft:'45%'
    },
    clock:{
        height:10,
        width:10
    },
    timeText:{
        fontSize:10,
        fontFamily:'OpenSans-Bold',
        color:theme.colors.green,
        paddingLeft:'5%',
        paddingRight:'5%'
    },
    image:{
        width:'95%',
        height:190,
        borderRadius:5,
    },
    imageContainer:{
        width:'100%',
        alignItems:'center',
        backgroundColor:theme.colors.white,
    },
    reactContainer:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-evenly',
        paddingTop:'5%',
        paddingBottom:'5%',
        backgroundColor:'rgba(217, 217, 217, 0.2)',
    },
    likeContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:'7%',
    },
    like:{
        height:18,
        width:18,
        marginRight:'5%'
    }, 
    likeText:{
        fontSize:10,
        fontFamily:'OpenSans-Regular',
        color:theme.colors.grey,
    },
    number:{
        fontSize:10,
        fontFamily:'OpenSans-Bold',
        color:theme.colors.green,
        marginRight:'5%'
    },
    commentContainer:{
        flexDirection:'row',
        paddingLeft:'4%',
        backgroundColor:theme.colors.white,
        width:'95%',
    },
    commentText:{
        fontSize:12,
        fontFamily:'OpenSans-Regular',
        color:theme.colors.black,
        width:265,
        padding:'2%',
        paddingTop:'2%',
        marginLeft:'2%',
    },
    textContainer:{
        flex:1,
        width:'100%',
        backgroundColor:"rgba(217, 217, 217, 0.2)",
        marginTop:'2%',
        borderRadius:5,
        padding:'1%'
    },
    commentIconContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'flex-end',
        // paddingRight:'2%',
        // marginBottom:'5%'
    },
    commentIcon:{
        height:10,
        width:10,
        marginRight:'2%'
    },
    bottomContainer:{
        width:'95%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        paddingLeft:'3%'
    },
    input:{
        height:35,
        width:'85%',
        borderWidth:1,
        borderRadius:3,
        paddingLeft:'5%',
        margin:'2%',
        marginLeft:'3%',
        borderColor:'rgba(54, 109, 98, 0.5)',
        fontSize:14,
        fontFamily:'OpenSans-Regular',
        paddingTop:'1%'
    },
    medal:{
        position:'absolute',
        zIndex:2,
        height:45,
        width:18,
        marginLeft:'2%',
    },
    menuContainer:{
        backgroundColor:theme.colors.green,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:'38%',
        marginTop:'8%',
        width:'8%',
        height:'4.5%'
    }
})