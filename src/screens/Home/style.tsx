import { StyleSheet } from "react-native";
import theme from "../../theme/GlobalTheme";

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
        backgroundColor:theme.colors.white,
    },
    header:{
        height:'18%',
        width:'100%',
        alignItems:'center',
    },
    navContainer:{
        padding:'2%',
        flexDirection:'row',

    },
    searchContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'95%',
        borderWidth:1,
        marginTop:'5%',
        padding:'2%',
        paddingLeft:'4%',
        paddingRight:'4%',
        borderRadius:5,
        borderColor:'rgba(54, 109, 98, 0.5)',
        backgroundColor:theme.colors.white,
        elevation:5
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
    galleryIcon:{
        height:28,
        width:32
    },
    search:{
        width:180,
        marginRight:'10%',
        color:theme.colors.grey,
    }
})
export default styles;