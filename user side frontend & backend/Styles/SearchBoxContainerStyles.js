import {StyleSheet,Dimensions} from 'react-native';
var width = Dimensions.get("window").width;

const styles2 = StyleSheet.create({  
    searchBox:{
        top:0,
        position:'absolute',
        width:width*0.95
    },
    inputWrapper:{
        //marginLeft:15,
        //marginRight:10,
        marginTop:20,
        marginBottom:0,
        backgroundColor:"#fff",
        opacity:0.9,
        borderRadius:7
    },
    secondInputWrapper:{
        //marginLeft:15,
        //marginRight:10,
        marginTop:10.,
        backgroundColor:"#fff",
        opacity:0.9,
        borderRadius:7
    },
    inputSearch:{
        fontSize:14
    },
    label:{
        fontSize:10,
        fontStyle:"italic",
        marginLeft:10,
        marginTop:10,
        marginBottom:0
    }
});  

export default styles2;