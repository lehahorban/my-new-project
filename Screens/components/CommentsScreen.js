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



const CommentsScreen = ({navigation}) => {
  const [spelcheck, setSpellcheck] = useState(true);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [avatar, setAvatar] = useState(false);
    const [state, setState] = useState(initialState);
    const [count, setCount] = useState(true);
    const [directionFlex, setDirectionFlex] = useState("row");
    const [indent, setIndent] = useState("auto")

    const keyboardHide = () => {
    setIsShowKeyboard(false);
      Keyboard.dismiss();      
      // setState(initialState)
   
    };
    
    const counter = () => {
        setCount(!count)
        if (count) {
            setDirectionFlex("row")
            setIndent("auto")
        }
         if (!count) {
             setDirectionFlex("row-reverse")
              setIndent(0)
        }
        
      
    }

//    console.log(directionFlex)

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
      <View style={styles.container}>
                  <View style={styles.header}>         
           <TouchableOpacity activeOpacity={0.8} style={styles.btnLogout}>              
                <Image source={require("../../images/arrowLeft.png")}></Image>             
            </TouchableOpacity>            
                          <Text style={styles.postText}>Комментарі</Text>                              
           
             
          </View>
         
                  <View style={styles.mainWrapp}>
                      <Image style={styles.foto} source={require("../../images/Rectangle1.jpg")}></Image>
                      <View style={styles.commentWrapp}>
                          <View style={{...styles.commentTextWrapp, flexDirection: directionFlex}}>                 
                       
                              <Image source={require("../../images/Ellipse1.png")}></Image>
                              <View style={styles.textWrapp}>
                                  <Text style={styles.comment}>
                                      Really love your most recent photo.
                                      I’ve been trying to capture the same
                                      thing for a few months and would love some tips!
                                  </Text>
                                  <Text style={{...styles.commentDate, marginLeft: indent}}>
                                      09 июня, 2020 | 08:40
                                  </Text>
                              </View>
                          </View>
                      </View>
                      
                     
                       <View activeOpacity={0.8} style={styles.btn}>
                          <Text style={styles.btnTitle}>Комментувати...</Text>
                          <TouchableOpacity onPress={counter}>
                              <Image source={require("../../images/Send.png")}></Image>
                          </TouchableOpacity>
                      </View>
                      
                  </View>
                  

     
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
        display: "flex",      
    paddingLeft: 16,    
    paddingBottom: 11,
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
        flexDirection: "row",   
    marginTop: 54,
  },
    postText: {   
        marginLeft: "17%",
fontFamily: 'Roboto',
fontStyle: "normal",
fontWeight: "500",
fontSize: 17,
lineHeight: 22,

color: "#212121",
  },
    mainWrapp: {
        paddingTop: 32,
        paddingLeft: 16,
        paddingRight: 16,
      
    },
     foto: {
        width: "100%",
        borderRadius: 8
    },
    commentWrapp: {
         marginTop: 32
    },
    commentTextWrapp: {       
        
        justifyContent: "space-between",        
      

    },
    textWrapp: {     
         width: 283,
        padding: 16,
        backgroundColor: "#F6F6F6",
           borderTopRightRadius: 6,
        borderBottomLeftRadius: 6,
       borderBottomRightRadius: 6,
    },
    comment: {
          fontFamily: 'Roboto',
fontStyle: "normal",
fontWeight: "400",
fontSize: 13,
lineHeight: 18,

color: "#212121",
    },
    commentDate: {
        // marginLeft: "auto",
        marginTop: 8,
        fontFamily: 'Roboto',
fontStyle: "normal",
fontWeight: "400",
fontSize: 10,
lineHeight: 12,

color: "#BDBDBD",
    },
   
     btn: {
    // width: 343,
    height: 50,
         marginTop: 48,
         paddingLeft: 16,
    paddingRight: 8,
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    justifyContent: "space-between",
         alignItems: "center",
    flexDirection: "row"

  },
  btnTitle: {
    fontFamily: 'Roboto',
    fontWeight: "400",  
    fontSize: 16,
lineHeight: 19,
color: "#BDBDBD",
  },
   
});

export default CommentsScreen;