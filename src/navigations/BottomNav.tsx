import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import { Image, StyleSheet } from "react-native";
import theme from "../theme/GlobalTheme";

const Tab = createBottomTabNavigator();

const BottomNav=()=>{
    return(
        <Tab.Navigator>
       <Tab.Screen
              options={{
                headerShown: false,
                tabBarLabelStyle:{
                  height:'40%',
                 fontSize:12,
                 fontFamily:'OpenSans-Regular',
                },
                tabBarActiveTintColor:theme.colors.green,
                tabBarIcon: () => (
                <Image  style={styles.home} source={require('../assets/images/home.png')}/>
                ),
              }} name='Home' component={Home} />
              {/* <Tab.Screen
                     options={{
                       headerShown: false,
                       tabBarLabelStyle:{
                        height:'40%',
                        // color:theme.colors.black,
                        fontSize:12,
                        fontWeight:'500'
                       },
                       tabBarActiveTintColor:theme.colors.blue,
                       tabBarIcon: ({ focused }) => (
                       focused?<Image  style={styles.home} source={require('../assets/images/provider2.png')}/>:<Image  style={styles.home} source={require('../assets/images/providers.png')}/>
                       ),
                     }} name='Providers' />
                     <Tab.Screen
                            options={{
                              headerShown: false,
                              tabBarLabelStyle:{
                            //    color:theme.colors.black,
                            height:'40%',
                            fontSize:12,
                               fontWeight:'500'
                              },
                              tabBarActiveTintColor:theme.colors.blue,
                              tabBarIcon: ({ focused }) => (
                              focused?<Image  style={styles.home} source={require('../assets/images/appointments2.png')}/>:<Image  style={styles.home} source={require('../assets/images/appointments.png')}/>
                              ),
                            }} name='Appointments' />
                            <Tab.Screen
                                   options={{
                                     headerShown: false,
                                     tabBarLabelStyle:{
                                    height:'40%',
                                    fontSize:12,
                                      fontWeight:'500'
                                     },
                                     tabBarActiveTintColor:theme.colors.blue,
                                     tabBarIcon: ({ focused }) => (
                                     focused?<Image  style={styles.profile} source={require('../assets/images/Profile2.png')}/>:<Image  style={styles.profile} source={require('../assets/images/Profile.png')}/>
                                     ),
                                   }} name='Profile' /> */}
        </Tab.Navigator>
    )
}
export default BottomNav;

const styles = StyleSheet.create({
    home:{
        height:23,
        width:23,
    },
    profile:{
        height:21,
        width:16
    }
})