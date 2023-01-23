
import { async } from "@firebase/util";
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
      const { uid, displayName } = await auth.currentUser;
      // const user = await auth.currentUser;
      // console.log(user)
      console.log(uid)
      // dispatch(authSlice.actions.updateUserProfile({ userId: user.uid }));
      dispatch(
        updateUserProfile({
          userId: uid,
          name: displayName,
          email,
        })
      );
    } catch (error) {
      console.log("error", error);
      console.log("error.message", error.message);
    }
    };






 export const authSignInUser = ({ email, password}) => async (dispatch, getState) => {
try {
    const user  = await signInWithEmailAndPassword(auth, email, password)
    
    console.log("user", user);
  }
  catch(error) {
    const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode)
      console.log(errorMessage)
    // ..
  };
 };

export const authSignOutUser = async (dispatch, getState) => { 
   try {
    await auth.signOut();
    dispatch(authSignOut());
  } catch (error) {
    console.log("error", error.message);
  }
};






export const authChangeStateUser = () => async (dispatch, getState) => {
  await onAuthStateChanged(auth, (user) => {
    if (user) {
      const userUpdateProfile = {
        userId: user.uid,
        name: user.displayName
     }
      
      dispatch(updateUserProfile(userUpdateProfile))
      dispatch(authStateChange({stateChange: true}))
    }
  })
}



