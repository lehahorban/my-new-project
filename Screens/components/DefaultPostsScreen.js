import {
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,  
  FlatList,
  ScrollView
} from "react-native";
import image from "../../images/Photo-BG.jpg";
import { useEffect, useState } from "react";


const initialState = {
  name: "",
  email: "",
  password: ""
}



const DefaultPostsScreen = ({navigation, route}) => {
  const [spelcheck, setSpellcheck] = useState(true);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [avatar, setAvatar] = useState(false);
  const [state, setState] = useState(initialState)
  const [posts, setPosts] = useState([])
  useEffect(() => { 
    if (route.params) {
      setPosts(prevState => [...prevState, route.params])
      
    }
    
    
  }, [route.params])
console.log(posts)
    const keyboardHide = () => {
    setIsShowKeyboard(false);
      Keyboard.dismiss();      
      // setState(initialState)
   
  };

  const onSubmit = () => {
     setIsShowKeyboard(false);
      Keyboard.dismiss();
      console.log(state);
      setState(initialState)
  }

  // const showPassword = () => {
  //   setSpellcheck(!spelcheck)
  // }

  const clickAvatar = () => {
    setAvatar(!avatar)
  }

  // console.log("route.params", route.params)
  
  
  return (
    
    <>
      <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.postText}>Публікації</Text>            
            <TouchableOpacity activeOpacity={0.8} style={styles.btnLogout}>              
                <Image source={require("../../images/logout.png")}></Image>             
            </TouchableOpacity>
             
          </View>
          <View style={styles.postWrapp}>
            <Image style={styles.avatarImg} source={require("../../images/Rectangle.png")}></Image>
            <View style={styles.userTextWrapp}>
              <Text style={styles.avatarName}>Natali Romanova</Text>
              <Text style={styles.avatarEmail}>email@example.com</Text>
            </View>
           

          </View>
          <View style={styles.mainWrapp}>
            <View style={styles.profileWrapp}>
              <FlatList
                data={posts}
                keyExtractor={((item, index) => index.toString())}
                renderItem={({ item }) => (
                  <View style={{marginBottom: 15}} >
                    <Image
                      source={{ uri: item.photo }}
                      style={{...styles.foto, width: "100%", height: 240}}
                    />
                  </View>
                )}
              />
                      <Image style={styles.foto} source={require("../../images/Rectangle1.jpg")}></Image>
                      
                          <Text style={styles.title}>Ліс</Text>
                          <View style={styles.infoWrapp}>
                              <View style={styles.messageWrapp}>
                                  <TouchableOpacity onPress={() => navigation.navigate("Comments")}>
                    <Image source={require("../../images/message-circle.png")}></Image>
                                  </TouchableOpacity>
                                  <Text style={styles.messageText}>10</Text>
                              </View>
                              <View style={styles.likeWrapp}>
                                  <Image source={require("../../images/thumbs-up.png")}></Image>
                                  <Text style={styles.likeText}>153</Text>
                              </View>
                              <View style={styles.mapWrapp}>
                  <TouchableOpacity style={{flexDirection: "row"}} onPress={() => navigation.navigate("Map")}>
                    <Image source={require("../../images/map.png")}></Image>
                                  <Text style={styles.mapText}>Ukraine</Text>
                                  </TouchableOpacity>
                              </View>
                          </View>
            </View>
             {/* <View style={styles.profileWrapp}>
                      <Image style={styles.foto} source={require("../../images/Rectangle2.jpg")}></Image>
                      
                          <Text style={styles.title}>Ліс</Text>
                          <View style={styles.infoWrapp}>
                              <View style={styles.messageWrapp}>
                                  <TouchableOpacity onPress={() => navigation.navigate("CommentsScreen")}>
                    <Image source={require("../../images/message-circle.png")}></Image>
                                  </TouchableOpacity>
                                  <Text style={styles.messageText}>10</Text>
                              </View>
                              <View style={styles.likeWrapp}>
                                  <Image source={require("../../images/thumbs-up.png")}></Image>
                                  <Text style={styles.likeText}>153</Text>
                              </View>
                              <View style={styles.mapWrapp}>
                                  <Image source={require("../../images/map.png")}></Image>
                                  <Text style={styles.mapText}>Ukraine</Text>
                              </View>
                          </View>
            </View> */}
            </View>
          {/* <View style={styles.footer}>
            <TouchableOpacity activeOpacity={0.8}>
              <Image source={require("../../images/grid.png")}></Image>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8}>
              <View style={styles.btnAdd}>
                <Image source={require("../../images/plus.png")}></Image>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8}>
              <Image source={require("../../images/user.png")}></Image>
            </TouchableOpacity>

          </View> */}

     
        </View>
        </TouchableWithoutFeedback>
      </>
  )
}


const styles = StyleSheet.create({

  container: {
    flex: 1,    
    backgroundColor: "#ffffff",
      
    
  },
  header: {   
    
    paddingRight: 10,    
    paddingBottom: 11,
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
    flexDirection: "row",
    marginTop: 54,
  },
  postText: {
   marginLeft: 140,
    fontFamily: 'Roboto',
fontStyle: "normal",
fontWeight: "500",
fontSize: 17,
lineHeight: 22,

color: "#212121",
  },
  btnLogout: {
    marginLeft: "auto"
  },
  postWrapp: {
    paddingTop: 32,
    paddingLeft: 16,
    flexDirection: "row"
  },
  userTextWrapp: {
    marginLeft: 8,
    justifyContent: "center",
  },
  avatarImg: {
    width: 60,
    height: 60,
  },
  avatarName: {
    fontFamily: 'Roboto',
    fontWeight: "700",
    fontSize: 13,
    lineHeight: 15,
    color: "#212121",
    

  },
  avatarEmail: {
     fontFamily: 'Roboto',
    fontWeight: "400",
    fontSize: 11,
    lineHeight: 13,
    color: "rgba(33, 33, 33, 0.8)",
    
  },
  mainWrapp: {
    paddingLeft: 16,
    paddingRight: 16
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
    borderBottomWidth: 1,
    borderRadius: 20
  }
 
});

export default DefaultPostsScreen;