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
} from "react-native";
import image from "../../images/Photo-BG.jpg";
import { useState } from "react";


  
const initialState = {
  name: "",
  email: "",
  password: ""
}



const ProfileScreen = ({navigation}) => {
  const [spelcheck, setSpellcheck] = useState(true);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [avatar, setAvatar] = useState(false);
  const [state, setState] = useState(initialState)

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

  

  return (
    <>
      <TouchableWithoutFeedback onPress={keyboardHide}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      

                  <View style={styles.form}>     
                      <TouchableOpacity style={styles.btnLogaut}>
                           <Image source={require("../../images/logout.png")}></Image>  
                      </TouchableOpacity>            
         
              <View style={styles.fotoWrapper}>
                
           
  <TouchableOpacity onPress={clickAvatar} style={styles.registerItem}>
                  {avatar ? (<Image style={styles.registerItemImg} source={require("../../images/Union2.png")}></Image>)
                    :
                    (<Image style={styles.registerItemImg} source={require("../../images/Union.png")}></Image>)} 
                
                </TouchableOpacity> 
                {avatar && (<Image style={styles.registerImage} source={require("../../images/Rectangle.png")}></Image>)}
        </View>
              <Text             
                          style={styles.registerTitle}>Natali Romanova</Text>
                      
                      <View style={styles.profileWrapp}>
                      <Image style={styles.foto} source={require("../../images/Rectangle1.jpg")}></Image>
                      
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
                      {/* <View style={styles.profileWrapp}>
                      <Image style={styles.foto} source={require("../../images/Rectangle3.jpg")}></Image>
                      
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
                      <View>
                          
                      </View>
                       {/* <View style={styles.footer}>
            <TouchableOpacity activeOpacity={0.8}>
              <Image source={require("../../images/grid.png")}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("CreatePostsScreen")} activeOpacity={0.8}>
              <View style={styles.btnAdd}>
                <Image source={require("../../images/user.png")}></Image>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8}>
              <Image source={require("../../images/plus.png")}></Image>
            </TouchableOpacity>

                      </View> */}
          
                  </View>
                  
                 
          
        </ImageBackground>
        </TouchableWithoutFeedback>
      </>
  )
}


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
    // marginTop: "auto",
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
      position: "absolute",
      top: 22,
      left: 319,
     },       
  
  registerTitle: {
    marginTop: 32,
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
    borderBottomWidth: 1,
    borderRadius: 20
  }
});

export default ProfileScreen;