import { StyleSheet } from "react-native";
import theme from "../../theme/GlobalTheme";

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
    },
    header:{
        height:125,
        width:'100%',
        alignItems:'center'
    },
    topContainer:{
        flex:1,
        flexDirection:'row',
        width:'100%',
        alignItems:'center',
        justifyContent:'space-between',
        padding:'2%',
    },
    profile:{
        height:50,
        width:50,
        borderWidth:5,
        borderColor:theme.colors.green,
        borderRadius:24,
        alignItems:'center',
        justifyContent:'center',
    },
    pic:{
        height:46,
        width:46,
    },
    name:{
        fontSize:16,
        fontFamily:'OpenSans-Bold',
        color:theme.colors.black,
        paddingRight:'25%'
    },
    selectContainer:{
        flexDirection:'row',
        alignItems:'center',
        height:30,
        width:120,
        justifyContent:'space-between',
        borderRadius:5
    },
    select:{
        width:'50%',
        alignItems:'center',
        height:'100%',
        justifyContent:'center'
    },
    selectText:{
        color:'white',
        paddingRight:'4%'
    },
    smily:{
        height:20,
        width:20
    },
    GalleryIcon:{
        height:18,
        width:20
    },
    VideoIcon:{
        height:15,
        width:21
    },
    smilyContainer:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'flex-end',
        paddingRight:'2%'
    },
    bottomContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:'2%',
        height:50,
        marginTop:'2%',
        backgroundColor:theme.colors.lightgrey
    },
    bottomItem:{
        width:'50%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    bottomText:{
        fontSize:14,
        fontFamily:'OpenSans-Medium',
        color:theme.colors.grey,
        paddingLeft:'5%'
    },
    postContainer:{
        flex:1,
        width:'95%',
        margin:'5%',
        marginTop:'0%',
        backgroundColor:theme.colors.white,
        borderWidth:1,
        borderColor:theme.colors.borderColor,
        borderRadius:10,
    },
    input:{
        height:300,
        textAlignVertical:'top',
        padding:'2%'
    },
    timeInput:{
        width:'95%',
    }
})

export default styles;