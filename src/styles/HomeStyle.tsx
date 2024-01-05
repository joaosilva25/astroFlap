import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    titleArea: {
        marginTop:50,
        marginBottom:30,
    },
    title: {
        textAlign: "center",
        fontSize:30,
        fontWeight: "bold",
        margin:10,
        color:"white"
    },
    subtitle: {
        textAlign: "center",
        fontSize:10,
        fontWeight: "200",
        color:"white"
    },
    page: {
        backgroundColor:"#243163",
        flex: 1
    },
    Input: {
        opacity:0.3,
        backgroundColor:"#000000",
        margin:10,
        marginLeft:30,
        marginRight:30,
        padding:20,
        borderRadius:5,
        color:"white"
    },
    Btn: {
        backgroundColor:"#E70232",
        margin:15,
        marginLeft:30,
        marginRight:30,
        padding:20,
        borderRadius:5
    },
    textBtn: {
        textAlign: "center",
        fontWeight:"400",
        color:"white",
        shadowColor:"#000000",
    },
    signText: {
        color:"white",
    },
    signArea: {
        flexDirection:"row",
        alignItems: 'center',
        justifyContent:"center",
        margin:30
    },


});