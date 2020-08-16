import React,{Component} from 'react';
import {  Dimensions,Image, Platform,TouchableWithoutFeedback,Keyboard, PixelRatio,StyleSheet, TextInput,TouchableOpacity ,ScrollView,  View,  Text,  StatusBar, KeyboardAvoidingView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Card} from 'react-native-shadow-cards';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const div=SCREEN_HEIGHT/3;
const scale = SCREEN_WIDTH / 320;


export default class profile extends Component{
  render() {
    var name='User Name'
    var location='Dehradun'
    var mobilenumber='9027504141'
    var city='Dehradun'
    var address='khandari ,Agra'
   return(
    <View style={{flex:1,backgroundColor:'#11598f'}}>
        <StatusBar backgroundColor = "#11598f" barStyle = "light-content"/>
        <ScrollView>
            <View style={{backgroundColor:'#11598f',height:div,justifyContent:'center'}}>
                <Image source={require('./social.png')}
                    style={{width: div/2, height: div/2, alignSelf:'center',borderRadius: 100/ 2,backgroundColor:'#fff',marginBottom:hp('2%')}} />
                <Text style={{alignSelf:'center',color:'#fff',fontSize:hp('3%'),fontWeight:'bold'}}>{name}</Text>
                <Text style={{alignSelf:'center',color:'#fff',fontSize:hp('2%')}}>{location}</Text>
            </View>
            <View style={{justifyContent:'center',backgroundColor:'#11598f'}}>
            
            <Card style={{padding: 10, margin: hp('0.8%'),alignSelf:'center',elevation:0}}>
                <Text style={{fontSize:hp('2%')}}>Name:</Text>
                <Text style={{fontSize:hp('3%'),fontWeight:'bold'}}>{name}</Text>
            </Card>
            <Card style={{padding: 10, margin: hp('0.8%'),alignSelf:'center',elevation:0}}>
                <Text style={{fontSize:hp('2%')}}>Mobile NUmber:</Text>
                <Text style={{fontSize:hp('3%'),fontWeight:'bold'}}>{mobilenumber}</Text>
            </Card>
            <Card style={{padding: 10, margin: hp('0.8%'),alignSelf:'center',elevation:0}}>
                <Text style={{fontSize:hp('2%')}}>Current City:</Text>
                <Text style={{fontSize:hp('3%'),fontWeight:'bold'}}>{city}</Text>
            </Card>
            <Card style={{padding: 10, margin: hp('0.8%'),alignSelf:'center',elevation:0}}>
                <Text style={{fontSize:hp('2%')}}>Current Address:</Text>
                <Text style={{fontSize:hp('3%'),fontWeight:'bold'}}>{address}</Text>
            </Card>
            </View>
        </ScrollView>
    </View>
    );
  }
}



