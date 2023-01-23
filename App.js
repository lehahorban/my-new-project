
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Main from "./Screens/components/Main";
import { useState } from "react";
import Apploading from "expo-app-loading";
import * as Font from "expo-font";

const loadApplication = async () => {
  await Font.loadAsync({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });
};


const App = () => {  
   const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <Apploading
        startAsync={loadApplication}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <View style={styles.container}>
    
    
      <Provider store={store}>
        <Main/>    
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