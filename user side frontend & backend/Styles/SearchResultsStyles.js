import {StyleSheet,Dimensions} from 'react-native';
var width = Dimensions.get("window").width;

const styles3 = StyleSheet.create({  
   searchResultsWrapper:{
       top:174,
       position:'absolute',
       width:width*0.95,
       
       backgroundColor:'#fff',
       opacity:0.9
   },
   listitem:{
        marginBottom:10,
        marginTop:10,
        flexDirection:'row'
   },
   primaryText:{
       fontWeight:"bold",
       color:"#373737"
   },
   secondaryText:{
       fontStyle:"italic",
       color:"#7D7D7D"
   },
   leftContainer:{
       justifyContent:'center',
       alignItems:'center'
   },
   leftIcon:{
    fontSize:25,
    marginRight:10,
    color:'#7D7D7D'
   },
   distance:{
       fontSize:12
   },
   rightContainer:{
       flexDirection:'column'
   }
});  

export default styles3;