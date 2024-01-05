import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {HomeLogin} from "../pages/HomeLogin"
import {GameArea} from "../pages/GameArea"

const Stack=createNativeStackNavigator()

export const MainStack = ()=> {
    return (
        <Stack.Navigator screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen name="Home" component={HomeLogin}></Stack.Screen>
            <Stack.Screen name="Game" component={GameArea} ></Stack.Screen>
        </Stack.Navigator>

    )
}