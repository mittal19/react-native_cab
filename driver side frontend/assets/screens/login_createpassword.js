import React,{Component} from 'react';
import {  Dimensions, Platform,PixelRatio,SafeAreaView, Button, StyleSheet, TextInput,TouchableOpacity ,ScrollView,  View,  Text,  StatusBar, KeyboardAvoidingView} from 'react-native';
import  {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const div=SCREEN_HEIGHT/4;
const scale = SCREEN_WIDTH / 320;

export function normalize(size) {
  const newSize = size * scale 
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}  

export default class login_createpassword extends Component{
  render() {
   return(
       <KeyboardAvoidingView style={styles.cont} behavior="height" keyboardVerticalOffset={30}>
         <ScrollView>

         <StatusBar backgroundColor = "#11598f" barStyle = "light-content"/>  
       
        <Text style={styles.heading}>Create Password</Text>
        
        
        <View style={{justifyContent: 'flex-start',marginTop:hp('5%')}}>
            <Text style={styles.textstyle2}>New Password</Text>
            <TextInput style = {styles.input}
               autoCorrect={false} 
               secureTextEntry={true}
               onSubmitEditing={() => console.log('dls')}  
               returnKeyType="next" />
        </View>
        <View style={{justifyContent: 'flex-start',marginTop:hp('5%')}}>
            <Text style={styles.textstyle2}>Confirm Password</Text>
            <TextInput style = {styles.input}
               autoCorrect={false} 
               secureTextEntry={true}
               onSubmitEditing={() => console.log('dls')}  
               returnKeyType="next" />
        </View>
        
        
        <View style={{flex:1,marginTop:hp('20%'),justifyContent:'center'}}>
          <TouchableOpacity style={styles.buttonContainer} 
                onPress={()=>this.props.navigation.navigate('login_phone')}>
              <Text  style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View> 

        </ScrollView>
        </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  cont:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center'
  },
  heading:
  {
    height: hp('17%'), 
    color:'#11598f',
    fontSize: normalize(27),
    fontWeight:'bold',
    //fontFamily: 'fontFamily-bold',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  textstyle2:
  {
    fontSize: normalize(12),
    color:'#8a8383',
    textAlign:'center',
    marginBottom:normalize(20),
    paddingHorizontal:normalize(50)
  },

  input:{
    height: 50,
    marginHorizontal:normalize(54),
    padding: 10,
    color: '#707b7c',
    borderBottomColor:'#c6c6c6',
    borderBottomWidth: 0.5,
    fontSize:20,
    textAlign:'center',
  },
  buttonContainer:{
    backgroundColor: '#11598f',
    paddingVertical: 13,
    marginHorizontal:normalize(35),
    ///marginBottom:normalize(30)
  },
  buttonText:{
    color: '#fff',
    textAlign: 'center',
    //fontWeight: 'bold',
    fontSize:20
  }
  
});

