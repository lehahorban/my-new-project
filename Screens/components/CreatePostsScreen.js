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
  Button,
  ScrollView
} from "react-native";
import image from "../../images/Photo-BG.jpg";
import { useEffect, useState } from "react";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from 'expo-location';


const initialState = {
  name: "",
  email: "",
  password: ""
}



const CreatePostsScreen = ({navigation}) => {
  const [spelcheck, setSpellcheck] = useState(true);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [avatar, setAvatar] = useState(false);
  const [state, setState] = useState(initialState)
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState("");
  
  console.log(photo)

  // useEffect(() => {
  //   (async () => {
  //     await Camera.requestCameraPermissionsAsync();
  //     await MediaLibrary.requestPermissionsAsync();
  //   })();
  // }, []);

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  // useEffect(() => {
  //   (async () => {
      
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== 'granted') {
  //       setErrorMsg('Permission to access location was denied');
  //       return;
  //     }

  //     let location = await Location.getCurrentPositionAsync({});
  //     setLocation(location);
  //   })();
  // }, []);

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
       let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
    console.log(location)
    
    setPhoto(photo.uri)
    console.log(photo)
  }
 const removePhoto = async () => {
    
    setPhoto("")
    
  }
  const sendPhoto = async () => {
     console.log(navigation)
     navigation.navigate("DefaultPostsScreen", { photo });
     
  };

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



  const clickAvatar = () => {
    setAvatar(!avatar)
  }

  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  console.log(permission)

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  return (
    <View style={styles.container}>
      {/* <Camera ref={setCamera} style={styles.camera} type={type}>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={takePhoto} style={styles.snap}>
                             <Image source={require("../../images/camera.png")}></Image>
                       </TouchableOpacity>
        </View>
     </Camera> */}
      {/* <TouchableOpacity onPress={takePhoto} style={{...styles.snap, marginLeft: "auto", marginRight: "auto"}}>
                             <Image source={require("../../images/camera.png")}></Image>
                       </TouchableOpacity> */}
        
          <View>
             <View style={styles.header}>         
           <TouchableOpacity activeOpacity={0.8} style={styles.btnLogout}>              
                <Image source={require("../../images/arrowLeft.png")}></Image>             
            </TouchableOpacity>            
                          <Text style={styles.postText}>Створити публікацію</Text>                              
           
             
          </View>
         
                  <View style={styles.mainWrapp}>
          <View style={styles.fotoWrapp}>
            
              <Camera ref={setCamera} style={styles.camera} type={type}>
        <TouchableOpacity onPress={takePhoto} style={styles.snap}>
                             <Image source={require("../../images/camera.png")}></Image>
                       </TouchableOpacity>
        {/* <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={takePhoto} style={styles.snap}>
                             <Image source={require("../../images/camera.png")}></Image>
                       </TouchableOpacity>
        </View> */}
            </Camera>
            {photo  && (                          
              
              <>
                
               <Image
                      source={{ uri: photo }}
                      style={styles.foto}
                />
               
               <TouchableOpacity onPress={removePhoto} style={styles.snaps}>
                             <Image source={require("../../images/camera.png")}></Image>
                </TouchableOpacity>
              </>
            )}
                {/* <TouchableOpacity onPress={takePhoto} style={styles.snap}>
                             <Image source={require("../../images/camera.png")}></Image>
                       </TouchableOpacity> */}
                    {/* <Image
                      source={{ uri: photo }}
                      style={styles.foto}
                    /> */}
                </View>
               {/* <TouchableOpacity onPress={takePhoto} style={styles.camera}>
                             <Image source={require("../../images/camera.png")}></Image>
                       </TouchableOpacity> */}
       
                      <Text style={styles.fotoText}>Загрузіть фото</Text>
                      <View style={styles.titleWrapp}>
                          <Text style={styles.title}>Назва...</Text>
                      </View>
                      <View style={styles.mapWrapp}>
                          <View style={styles.mapImageWrapp}>
                              <Image source={require("../../images/map.png")}></Image>
                              <Text style={styles.mapTitle}>Місцевість...</Text>
                          </View>                        
                      </View>
                       <TouchableOpacity onPress={sendPhoto} activeOpacity={0.8} style={styles.btn}>
            <Text style={styles.btnTitle}>Опублікувати</Text>
                      </TouchableOpacity>
                      <TouchableOpacity activeOpacity={0.8} style={styles.btnDelete}>
            <Image source={require("../../images/trash.png")}></Image>
                  </TouchableOpacity>
                  </View>
             </View>
                  
    
    {/* <TouchableOpacity onPress={takePhoto} style={styles.snap}>
                             <Image source={require("../../images/camera.png")}></Image>
                       </TouchableOpacity> */}
           
        
       
    
    </View>


    
    // <>
    //   <TouchableWithoutFeedback onPress={keyboardHide}>
    //   <View style={styles.container}>
    //               <View style={styles.header}>         
    //        <TouchableOpacity activeOpacity={0.8} style={styles.btnLogout}>              
    //             <Image source={require("../../images/arrowLeft.png")}></Image>             
    //         </TouchableOpacity>            
    //                       <Text style={styles.postText}>Створити публікацію</Text>                              
           
             
    //       </View>
         
    //               <View style={styles.mainWrapp}>
    //         <Camera ref={setCamera} style={styles.fotoWrapp}>
    //           {photo && (
    //             <View style={styles.takePhotoContainer}>
    //               <Image
    //                 source={{ uri: photo }}
    //                 style={{ height: 200, width: 200 }}
    //               />
    //             </View>
    //           )}
    //                       <TouchableOpacity onPress={takePhoto} style={styles.camera}>
    //                           <Image source={require("../../images/camera.png")}></Image>
    //                       </TouchableOpacity>
                      
    //                   </Camera>
    //            <Camera style={styles.camera} type={type}>
    //     <View style={styles.buttonContainer}>
    //       <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
    //         <Text style={styles.text}>Flip Camera</Text>
    //       </TouchableOpacity>
    //     </View>
    //   </Camera>
    //                   <Text style={styles.fotoText}>Загрузіть фото</Text>
    //                   <View style={styles.titleWrapp}>
    //                       <Text style={styles.title}>Назва...</Text>
    //                   </View>
    //                   <View style={styles.mapWrapp}>
    //                       <View style={styles.mapImageWrapp}>
    //                           <Image source={require("../../images/map.png")}></Image>
    //                           <Text style={styles.mapTitle}>Місцевість...</Text>
    //                       </View>                        
    //                   </View>
    //                    <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
    //         <Text style={styles.btnTitle}>Опублікувати</Text>
    //                   </TouchableOpacity>
    //                   <TouchableOpacity activeOpacity={0.8} style={styles.btnDelete}>
    //         <Image source={require("../../images/trash.png")}></Image>
    //               </TouchableOpacity>
    //               </View>
                  

     
    //     </View>
    //     </TouchableWithoutFeedback>
    //   </>
  )
}


const styles = StyleSheet.create({

  container: {
    flex: 1,    
    backgroundColor: "#ffffff",
    justifyContent: 'center',
      
    
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
  fotoWrapp: {
      // position: "relative",
        justifyContent: "center",
        alignItems: "center",
        height: 240,
        backgroundColor: "#F6F6F6",
        borderWidth: 1,
        borderColor: "#E8E8E8",
        borderRadius: 8,
  },
  foto: {
    position: "relative",
    height: 240,
    width: "100%",
    borderRadius: 8,
    },
  snap: {
    // position: "absolute",
   
    // top: "50%",
    // left: "50%",
    // transform: ([{translateX: -20}, {translateY: -20}]),
        width: 60,
        height: 60,
        backgroundColor: "#FFFFFF",
     justifyContent: "center",
        alignItems: "center",
        borderRadius: 50
  },
  snaps: {
    position: "absolute",
    
   
    // top: "50%",
    // left: "50%",
    // transform: ([{translateX: -20}, {translateY: -20}]),
        width: 60,
        height: 60,
        backgroundColor: "rgba(255, 255, 255, 0.3)",
     justifyContent: "center",
        alignItems: "center",
        borderRadius: 50
    },
    fotoText: {
        marginTop: 8,
        fontFamily: 'Roboto',
fontStyle: "normal",
fontWeight: "400",
fontSize: 16,
lineHeight: 19,

color: "#BDBDBD",
    },
    titleWrapp: {
        marginTop: 48,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#E8E8E8"
    },
    title: {
        fontFamily: 'Roboto',
fontStyle: "normal",
fontWeight: "400",
fontSize: 16,
lineHeight: 19,

color: "#BDBDBD"
    },
    mapWrapp: {
        marginTop: 29,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#E8E8E8"

    },
    mapImageWrapp: {        
        flexDirection: "row",
        alignItems: "center"
    },
    mapTitle: {
        marginLeft: 8,
         fontFamily: 'Roboto',
fontStyle: "normal",
fontWeight: "400",
fontSize: 16,
lineHeight: 19,

color: "#BDBDBD"
    },
     btn: {
    // width: 343,
    height: 50,
    marginTop: 48,
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",

  },
  btnTitle: {
    fontFamily: 'Roboto',
    fontWeight: "400",  
    fontSize: 16,
lineHeight: 19,
color: "#BDBDBD",
  },
    btnDelete: {
        marginLeft: "auto",
        marginRight: "auto",
        width: 70,
      height: 40,
    marginTop: 10,
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center"
  },
    camera: {
      flex: 1,  
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default CreatePostsScreen;