import React from "react";
import { View } from "react-native"
import { styles } from "./styles"

type Props = {
    positionBall:number,
}

export const Ball=({positionBall}:Props)=> {
    return (
            <View style={[styles.ball,{bottom:positionBall}]}></View>
    )
}