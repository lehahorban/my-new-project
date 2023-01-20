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
import { useDispatch } from "react-redux";
import { authSignInUser } from "../../redux/auth/authOperations";

const initialState = {  
  email: "",
  password: ""
}



const LoginScreen = ({navigation}) => {
  const [spelcheck, setSpellcheck] = useState(true);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [avatar, setAvatar] = useState(false);
  const [state, setState] = useState(initialState)
  const dispatch = useDispatch()

    const keyboardHide = () => {
    setIsShowKeyboard(false);
      Keyboard.dismiss();      
      // setState(initialState)
   
  };

  const onSubmit = () => {
     setIsShowKeyboard(false);
      Keyboard.dismiss();
    console.log(state);
    dispatch(authSignInUser(state))
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
        

        <View  style={{
              ...styles.form,
              paddingBottom: isShowKeyboard ? 32 : 132,
            }}>
           <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
        
          
              <Text             
                style={styles.registerTitle}>Увійти</Text>
         
              <TextInput
                value={state.email}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, email: value }))}
                onFocus={() => setIsShowKeyboard(true)} style={styles.inputEmail}
               placeholder="Адреса електронної пошти"
        
          />
          
              <TextInput onFocus={() => setIsShowKeyboard(true)} style={styles.inputPassword}
              value={state.password}  
                onChangeText={(value) =>
                setState((prevState) => ({...prevState, password: value}))}
            placeholder="Пароль"
            secureTextEntry={true}
        
            />
            {/* <TouchableOpacity style={styles.showPassword}>
                <Text style={styles.showInputText} onPress={showPassword}>{spelcheck ?("Показати") : ("Скрити")}</Text>
            </TouchableOpacity>
          <View style={styles.inputPasswordWrapper}>
            </View> */}
          
            {!isShowKeyboard && (
              <>
                  <TouchableOpacity
                    onPress={onSubmit}
                    // onPress={() => navigation.navigate("Profile")}
                    activeOpacity={0.8} style={styles.btn}>
            <Text style={styles.btnTitle}>Увійти</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate("Register")} activeOpacity={0.8}>
                    <Text style={styles.entryText}>Немає акаунту? Зареєструватись</Text>
                    </TouchableOpacity>
              </>)}
          </KeyboardAvoidingView>
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
    // flex: 1,
    
    // top: "100%",
    marginTop: "auto",
    justifyContent: "center",
    alignItems: "center",       
    // marginTop: 80,
    // height: 549,
    paddingLeft : 16,
    paddingRight: 16,
    // paddingBottom: 66,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
   
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
  inputLogin: {
    width: 343,
    height: 50,
    marginTop: 33,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    

  },
  inputEmail: {
    width: 343,
    height: 50,
    marginTop: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,

  },
  inputPasswordWrapper: {
  position: "relative",
  },
  inputPassword: {
   
    width: 343,
    height: 50,
    marginTop: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,

  },
  showPassword: {  
    position: "absolute",
    top: 32,
    left: 270,
  },
  showInputText: {
    fontFamily: 'Roboto',

fontWeight: 400,
fontSize: 16,
lineHeight: 19,
color: "#1B4371",
  },
  btn: {
    width: 343,
    height: 50,
    marginTop: 43,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",

  },
  btnTitle: {
    fontFamily: 'Roboto',
    fontWeight: "400",  
    fontSize: 16,
lineHeight: 19,
color: "#FFFFFF",
  },
  entryText: {
    marginTop: 16,
    fontFamily: 'Roboto',
fontWeight: "400",
fontSize: 16,
lineHeight: 19,
    color: "#1B4371",
textAlign: "center",
  }
});

export default LoginScreen;