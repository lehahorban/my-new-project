
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import useRoute from "./router";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { auth } from "./firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { async } from "@firebase/util";

const App = () => {  
  const [user, setUser] = useState(null)  

  onAuthStateChanged(auth, (user) => setUser(user))


  const routing = useRoute(user)
  // console.log(routing)


  return (
    <View style={styles.container}>
    
    
      <Provider store={store}>
          <NavigationContainer>
        {routing}    
    </NavigationContainer>
    
    </Provider>
    
  </View>
)
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});

export default App;




  // <Stack.Navigator>
  //       <Stack.Screen
  //         options={{headerShown: false}}
  //         name="Register"
  //         component={RegistrationScreen} />
  //       <Stack.Screen
  //         options={{headerShown: false}}
  //         name="Login"
  //         component={LoginScreen} />
  //        <Stack.Screen
  //         options={{headerShown: false}}
  //         name="Profile"
  //         component={ProfileScreen} />
  //        <Stack.Screen
  //         options={{headerShown: false}}
  //         name="CreatePostsScreen"
  //         component={CreatePostsScreen} />
  //       <Stack.Screen
  //         options={{headerShown: false}}
  //         name="CommentsScreen"
  //         component={CommentsScreen} />
  //       </Stack.Navigator>