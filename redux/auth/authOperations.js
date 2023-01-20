// import { db } from "../../firebase/config";




// export const authSignUpUser = ({name, email, password}) => async (dispatch, getState) => {
//     try {
//         const user = await db.auth().createUserWithEmailAndPassword(email, password)
//         console.log(user)
        
//     } catch (error) {
//         console.log(error)
//          console.log(error.message)
        
//     }
//  };
// export const authSignInUser = async (dispatch, getState) => { };
// export const authSignOutUser = async (dispatch, getState) => { };


// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../firebase/config";
// import { authSlice } from "./authReduser";




// export const authSignUpUser = ({name, email, password}) => async (dispatch, getState) => {

// // createUserWithEmailAndPassword(auth, email, password)
//   // .then((userCredential) => {
//   //   // Signed in
//   //     const user = userCredential.user;
//   //   console.log(user)
//   //   dispatch(authSlice.actions.updateUserProfile())
//   //   // ...
//   // })
//   try {
//     const { user } = await createUserWithEmailAndPassword(auth, email, password)
//     console.log(user.uid)
//     dispatch(authSlice.actions.updateUserProfile({ userId: user.uid }));
//     // console.log("user", user);
//   }
//   catch(error) {
//     const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(errorCode)
//       console.log(errorMessage)
//     // ..
//   };
//  };

//  export const authSignInUser = ({ email, password}) => async (dispatch, getState) => {
// try {
//     const user  = await signInWithEmailAndPassword(auth, email, password)
    
//     console.log("user", user);
//   }
//   catch(error) {
//     const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(errorCode)
//       console.log(errorMessage)
//     // ..
//   };
//  };

// export const authSignOutUser = async (dispatch, getState) => { };







// export const authSignInUser = ({ email, password}) => async (dispatch, getState) => {

// signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       console.log(userCredential)
//     // Signed in
//       const user = userCredential.user;
//       console.log(user)
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(errorCode)
//       console.log(errorMessage)
//     // ..
//   });
//  };



// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   updateProfile,
//   onAuthStateChanged,
//   signOut,
// } from "firebase/auth";
// import { Alert } from "react-native";
// import { auth } from "../../firebase/config";
// import { authSlice } from "./authReduser";
// const { updateUserProfile, authStateChange, authSignOut } = authSlice.actions;

// export const authSignUpUser =
//   ({ name, email, password }) =>
//   async (dispatch) => {
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);

//       // await updateProfile(auth.currentUser, {
//       //   displayName: name,
//       // });

//       const { uid, displayName } = await auth.currentUser;
//       console.log(uid)
//       dispatch(
//         updateUserProfile({
//           userId: uid,
//           // name: displayName,
//           // email,
//         })
//       );
//       Alert.alert(`Welcome to cabinet`);
//     } catch (error) {
//       Alert.alert(error.message);
//       console.log("error.message", error.message);
//     }
//   };




import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebase/config";
import { authSlice } from "./authReduser";

const { updateUserProfile, authStateChange, authSignOut } = authSlice.actions;
console.log(authSlice)

export const authSignUpUser =
  ({ name, email, password }) =>
  async (dispatch, getState) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: name,
      });
      // const { uid, displayName } = await auth.currentUser;
      const user = await auth.currentUser;
      console.log(user)
      console.log(user.uid)
      dispatch(authSlice.actions.updateUserProfile({ userId: user.uid }));
      // dispatch(
      //   updateUserProfile({
      //     userId: uid,
      //     name: displayName,
      //     email,
      //   })
      // );
    } catch (error) {
      console.log("error", error);
      console.log("error.message", error.message);
    }
    };
  

// export const authSignInUser =
//   ({ email, password }) =>
//   async (dispatch, getState) => {
//     try {
//       const user = await signInWithEmailAndPassword(auth, email, password);
//     } catch (error) {
//       console.log("error", error);
//       console.log("error.message", error.message);
//     }
//   };
// export const authSignOutUser = () => async (dispatch, getState) => {
//   try {
//     await auth.signOut();
//     dispatch(authSignOut());
//   } catch (error) {
//     console.log("error", error.message);
//   }
// };

// export const authStateChangeUser = () => async (dispatch, getState) => {
//   await onAuthStateChanged(auth, (user) => {
//     if (user) {
//       const { uid, displayName, email } = user;
//       dispatch(
//         updateUserProfile({
//           userId: uid,
//           name: displayName,
//           email: email,
//         })
//       );
//       dispatch(authStateChange({ stateChange: true }));
//     }
//   });
// };
