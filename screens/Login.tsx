import React from "react"
import {View, Text } from "react-native"
import Home from "./Home";
import Settings from "../screens/Settings"
import { NavigationContainer } from "@react-navigation/native";

function Login(){
return(
   
           <NavigationContainer>
           <Home/>
           <Settings/>
           </NavigationContainer>
              
    
)

}
export default Login;