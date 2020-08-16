import React,{Component} from 'react';
import {  Dimensions, Platform,TouchableWithoutFeedback,Keyboard, PixelRatio,SafeAreaView, Button, StyleSheet, TextInput,TouchableOpacity ,ScrollView,  View,  Text,  StatusBar, KeyboardAvoidingView} from 'react-native';
import  {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const div=SCREEN_HEIGHT/3;
const scale = SCREEN_WIDTH / 320;

export function normalize(size) {
  const newSize = size * scale 
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}

export default class login_otp extends Component{
  render() {
   return(
     <View>

<StatusBar backgroundColor = "#11598f" barStyle = "light-content"/>  


    <View style={{justifyContent:'center'}}>
      <Text style={{color:'#11598f',fontSize:wp('9%'),textAlign:'center',textAlignVertical:'center',fontWeight:'bold',marginTop:hp('3%')}}>Verification</Text>
      <Text style={{color:'#8a8383',fontSize:wp('4%'),textAlign:'center',textAlignVertical:'center',marginTop:hp('5%')}}>Enter 4 digit OTP which was sent to</Text>
      <Text style={{color:'#8a8383',fontSize:wp('5%'),fontWeight:'bold',textAlign:'center',textAlignVertical:'center'}}>+91-9027504141</Text>
    </View>

    <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:hp('45%'),marginHorizontal:wp('5%')}}> 
      <Text style={{borderBottomColor:'#11598f',borderBottomWidth:2,width:wp('10%')}}></Text>
      <Text style={{borderBottomColor:'#11598f',borderBottomWidth:2,width:wp('10%')}}></Text>
      <Text style={{borderBottomColor:'#11598f',borderBottomWidth:2,width:wp('10%')}}></Text>
      <Text style={{borderBottomColor:'#11598f',borderBottomWidth:2,width:wp('10%')}}></Text>
    </View>

    <View style={{justifyContent:'center'}}>
    <TouchableOpacity style={{backgroundColor: '#11598f',marginHorizontal:wp('10%'),marginTop:hp('8%'),height:hp('7%'),justifyContent:'center'}} 
                onPress={()=>this.props.navigation.navigate('login_createpassword')}>
              <Text  style={{color:'#fff',textAlign:'center',textAlignVertical:'center',fontSize:wp('6%')}}>Verify</Text>
          </TouchableOpacity>
    </View>

    </View>
    );
  }
}

const styles = StyleSheet.create({
  
 
});


