import React,{Component} from 'react';
import {  Dimensions,Image, Platform,TouchableWithoutFeedback,Keyboard, PixelRatio,StyleSheet, TextInput,TouchableOpacity ,ScrollView,  View,  Text,  StatusBar, KeyboardAvoidingView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const div=SCREEN_HEIGHT/3;

export default class about extends Component{
  render() {
   return(
    <View>
        <StatusBar backgroundColor = "#11598f" barStyle = "light-content"/>
        <ScrollView>
            <View style={{flexDirection:'row',height:div/2,backgroundColor:'#11598f',justifyContent:'center'}}>
                <Image source={require('./about.png')}
                    style={{alignSelf:'center',width: wp('13%'),height:wp('13%')}}/>
                <Text style={{ alignSelf:'center',fontSize:wp('13%'),color:'#fff',fontWeight:'bold'}}>About</Text>
            </View>
        </ScrollView>
    </View>
    );
  }
}



