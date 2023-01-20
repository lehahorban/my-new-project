
import React from "react";
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import RegistrationScreen from "./Screens/components/RegistrationScreen";
import LoginScreen from "./Screens/components/LoginScreen";
import PostsScreen from "./Screens/components/PostsScreen";
import CreatePostsScreen from "./Screens/components/CreatePostsScreen";
import ProfileScreen from "./Screens/components/ProfileScreen";
import CommentsScreen from "./Screens/components/CommentsScreen";


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const useRoute = (isAuth) => {
  if (!isAuth) {        
    
     return <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Register"
          component={RegistrationScreen} />
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={LoginScreen} />        
     </Stack.Navigator>
    
  }

  return <Tab.Navigator>
      <Tab.Screen
          options={{
              headerShown: false, tabBarShowLabel: false, tabBarIcon: ({focused}) => (
                  <View>
              <Image source={require("./images/grid.png")}></Image>
            </View>
              )}}
          name="PostsScreen"
          component={PostsScreen} />
      <Tab.Screen
          options={{
              headerShown: false, tabBarShowLabel: false, tabBarIcon: ({focused}) => (
                 
                      <View style={styles.btnAdd}>
                          <Image source={require("./images/plus.png")}></Image>
                          </View>
           
          )}}
          name="CreatePostsScreen"
          component={CreatePostsScreen} />
      {/* <Tab.Screen
          options={{ headerShown: false, tabBarShowLabel: false }}
          name="CommentsScreen"
          component={CommentsScreen} /> */}
      <Tab.Screen
          options={{
              headerShown: false, tabBarShowLabel: false, tabBarIcon: ({focused}) => (
              <View>
               
                 <Image source={require("./images/user.png")}></Image>
               
             </View>
          ) }}
          name="ProfileScreen"
          component={ProfileScreen} />
    </Tab.Navigator>
}

//   { <View style={styles.footer}>
//             <TouchableOpacity activeOpacity={0.8}>
//               <Image source={require("./images/grid.png")}></Image>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => navigation.navigate("CreatePostsScreen")} activeOpacity={0.8}>
//               <View style={styles.btnAdd}>
//                 <Image source={require("./images/user.png")}></Image>
//               </View>
//             </TouchableOpacity>
//             <TouchableOpacity activeOpacity={0.8}>
//               <Image source={require("./images/plus.png")}></Image>
//             </TouchableOpacity>

//                       </View> }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea"
  },
  image: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",   
    
  },
  fotoWrapper: {
    position: "absolute",
    width: 120,
    height: 120,
    top: -60,
    left: "50%",  
    transform: ([{translateX: -50}]),
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
   
  },
  registerImage: {
     position: "absolute",
        width: 120,
        height:120,
  },
  
 registerItem: {
 width: 25,
    height: 25,
    position: "relative",
left: 107,
top: 81,
borderWidth: 1,
borderColor: "#E8E8E8",
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    zIndex: 9,
alignItems: "center",
    justifyContent: "center"
  },
  registerItemImg: {
    width: 13,
    height: 13,
    
  },

  form: {
   
    
    flex: 1,
    marginTop: 147,
    justifyContent: "center",
    // alignItems: "center",       
    // marginTop: 80,
    
    paddingLeft : 16,
    paddingRight: 16,
    // paddingBottom: 66,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
   
    },
    btnLogaut: {
        marginLeft: "auto",
        marginTop: 22
     },       
  
  registerTitle: {
    marginTop: 92,
    fontFamily: 'Roboto',
    fontWeight: "500",
    fontSize: 30,
    lineHeight: 35,
    color: "#212121",
    textAlign: "center",

    

    },
    profileWrapp: {
      marginTop: 35
  },
    foto: {
        width: "100%",
        borderRadius: 8
    },
    title: {
        marginTop: 8
    },
    infoWrapp: {
        marginTop: 10,
        flexDirection: "row",
    },
    messageWrapp: {
        flexDirection: "row",
    },
    likeWrapp: {
        marginLeft: 24,
        flexDirection: "row"
    },
    mapWrapp: {
        marginLeft: "auto",
        flexDirection: "row"
    },
    messageText: {
        marginLeft: 6
    },
     likeText: {
        marginLeft: 6
    },
      mapText: {
        marginLeft: 6
    },

  footer: {
    marginTop: "auto",
    paddingTop: 9,
    paddingBottom: 34,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    
  },
  btnAdd: {
    width: 70,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF6C00",    
    borderRadius: 20
  }
});

export default useRoute;