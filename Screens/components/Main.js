import { useState, useEffect } from "react";
import useRoute from "../../router";
import { onAuthStateChanged } from "firebase/auth";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../../firebase/config";
import { authChangeStateUser } from "../../redux/auth/authOperations";




const Main = () => {
    
    const dispatch = useDispatch()
    const {stateChange} = useSelector(state => state.auth)
   console.log(stateChange)

    const routing = useRoute(stateChange)
    useEffect(() => {
        dispatch(authChangeStateUser())
    },[])
 

    return (
        <NavigationContainer>
        {routing}    
    </NavigationContainer>)
    
    
}

export default Main