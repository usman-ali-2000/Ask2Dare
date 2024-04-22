import { StyleSheet } from "react-native";
import theme from "../../theme/GlobalTheme";

const styles = StyleSheet.create({
    container:{
        width:'100%',
        alignItems:'center',
        flex:1,
    },
    header:{
        width:'100%',
        height:'16%',
        alignItems:'center'
    },
    add:{
        height:50,
        width:100,
        borderRadius:5,
        backgroundColor:theme.colors.green,
        alignItems:'center',
        justifyContent:'center'
    },
    addContainer:{
        paddingTop:'3%'
    },
    plus:{
        height:18,
        width:18
    },
    container1:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
        paddingLeft:'2%',
        paddingTop:'2%'
    },
    recentContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'18%',
        marginRight:'2%'
    },
    container1Text:{
        fontSize:14,
        fontFamily:'OpenSans-Medium',
        color:theme.colors.black,
        paddingLeft:'1%'
    },
    recent:{
        fontSize:14,
        fontFamily:'OpenSans-Medium',
        color:theme.colors.grey,
    },
    arrowDown:{
        height:7,
        width:12,
        marginLeft:'5%',
        marginTop:'5%'
    }
})

export default styles;