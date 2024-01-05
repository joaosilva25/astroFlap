import { Text,View,Button,TextInput, SafeAreaView,Pressable, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles/HomeStyle"



export const HomeLogin=()=> {

    const navigation = useNavigation();

    const handleGoGamePage=()=> {
        navigation.navigate('Game')
    };

    return (
        <SafeAreaView style={styles.page}>
            <View style={styles.titleArea}>
                <Text style={styles.title}>AstroFlap</Text>
                <Text style={styles.subtitle}>Travel into Space</Text>
            </View>
            <TextInput 
                placeholder="Email"
                placeholderTextColor={"#FFFFFF"}
                style={styles.Input}
            >
            </TextInput>
            <TextInput 
                placeholder="Password"
                placeholderTextColor={"#FFFFFF"}
                style={styles.Input}
            >              
            </TextInput>
            <TouchableOpacity
                onPress={handleGoGamePage}
                style={styles.Btn}
            >
                <Text style={styles.textBtn}>Log In</Text>
            </TouchableOpacity>
            <View style={styles.signArea}>
                <Text style={styles.signText}>Not a member yet?</Text>
                <Button color="#E70232" title="Sign Up"/>
            </View>
        </SafeAreaView>
    )
}