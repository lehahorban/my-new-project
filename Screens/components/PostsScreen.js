import React from "react";
// import { moduleName } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DefaultPostsScreen from "./DefaultPostsScreen";
import CommentsScreen from "./CommentsScreen";
import MapScreen from "./MapScreen";

const NestedScreen = createNativeStackNavigator();

const PostsScreen = () => {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="DefaultPostsScreen"
        component={DefaultPostsScreen}
      />
      <NestedScreen.Screen
        name="Comments"
        component={CommentsScreen} />
      <NestedScreen.Screen
        name="Map"
        component={MapScreen} />
    </NestedScreen.Navigator>
  );
};

export default PostsScreen;