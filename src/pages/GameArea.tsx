import { Alert, Pressable, SafeAreaView, StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { useState,useEffect } from 'react';
import { Ball } from '../components/Ball';


let timer: number;
  
export const GameArea=()=> {
  const [gravity,setGravity]=useState(0.98)
  const [upForce,setUpForce]=useState(0);
  const [speed,setSpeed] = useState(0)
  const [position,setPosition]=useState(0)

  useEffect(() => {
    const applyGravity=()=> {
        //diminuir upForce

        let newUpForce=upForce-gravity
        newUpForce=newUpForce < 0 ? 0 : newUpForce
        setUpForce(newUpForce)

        //Modificando velocidade
        let newSpeed=speed + (gravity - (newUpForce / 2))
        setSpeed(newSpeed)

        //Nova posição baseada na velocidade
        let newPosition=position - newSpeed;

        if(newPosition < 0) {
          newPosition=0
          setSpeed(0)
        }

        if(newPosition > 350) {
          newPosition=350
          setSpeed(0)
        }

        setPosition(newPosition)
    }



    clearTimeout(timer);

    timer= setTimeout(applyGravity,30);

  },[gravity,upForce,speed,position]);


  const handleForceButton=()=> {
    setUpForce(7)
  }

  return (
    <SafeAreaView style={{flex:1}}>
      <Text style={styles.textStyle}>Gravity Game</Text>
      <View style={styles.container}>
        <Ball positionBall={position}/>
        <View style={styles.boxConfig}>
            <View style={styles.status}>
                <Text>{upForce.toFixed(2)}</Text>
                <Text>{position.toFixed(2)}</Text>
                <Text>{speed.toFixed(2)}</Text>
            </View>
            <TouchableOpacity style={styles.forceButton} onPress={handleForceButton}>
                <Text style={styles.textStyle}>Force</Text>
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles =StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'flex-end',
  },

  textStyle: {
    color:"blue",
    textAlign:'center',
  },

  btn: {
    backgroundColor:"purple",
    padding:40,
  },
  boxConfig: {
    backgroundColor:"grey",
  },
  status: {
    flexDirection:"row",
    justifyContent:"space-between",
    padding:20
  },
  forceButton: {
    backgroundColor:"green",
    padding:20
  }

})