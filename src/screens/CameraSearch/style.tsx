import { StyleSheet } from "react-native";
import theme from "../../theme/GlobalTheme";

const styles = StyleSheet.create({
    container:{
        width:'100%',
        flex:1,
        alignItems:'center',
    },
    header:{
        height:110,
        width:'100%',
        alignItems:'center',
        borderWidth:1
    },
    SearchContainer:{
        width:'80%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderColor:theme.colors.white,
        borderRadius:10,
        marginTop:'12%'
    },
    find:{
        height:24,
        width:24
    },
    input:{
        marginLeft:'2%',
        width:'80%',
        color:theme.colors.white,
        fontSize:12,
        fontFamily:'OpenSans-SemiBold'
    }
})
export default styles;