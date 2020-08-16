import React,{Component} from 'react';
import {  Dimensions,Image, Platform,TouchableWithoutFeedback,Keyboard, PixelRatio,StyleSheet, TextInput,TouchableOpacity ,ScrollView,  View,  Text,  StatusBar, KeyboardAvoidingView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Card} from 'react-native-shadow-cards';
import DatePicker from 'react-native-datepicker';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const div=SCREEN_HEIGHT/4;

export default class Banktransfer_5 extends Component{
 
  render() { 
      var name='amit';
      var carname='nissan';
      var carno = 'UP 255X XX';
      var rating='8.5';
      var droplocation='kamla nagar , Agra';
      var PickUplocation='Khandari , Agra';
      var cost= 1024;   
    return(
        
    <View>
        <StatusBar backgroundColor = "#11598f" barStyle = "light-content"/>
        <View style={{height:hp('18%'),backgroundColor:'#11598f',flexDirection:'row',justifyContent:'space-between'}}>
            <View>
                
                <View style={{flexDirection:'row'}}>
                    <Image source={require('./car.png')}
                        style={{alignSelf:'center',width: wp('8%'),height:wp('8%'),marginLeft:wp('6%')}}/>
                    <View>
                        <Text style={{alignSelf:'center',fontSize:wp('5%'),fontWeight:'bold',color:'#fff',marginLeft:wp('7%')}}>
                        {carno}
                        </Text>
                        <Text style={{alignSelf:'flex-start',fontSize:wp('4%'),color:'#fff',marginLeft:wp('7%')}}>
                        {carname}
                        </Text>
                    </View>
                </View>
                
                <View style={{flexDirection:'row',marginTop:hp('2%')}}>
                    <Image source={require('./driver.png')}
                        style={{alignSelf:'center',width: wp('8%'),height:wp('8%'),marginLeft:wp('6%')}}/>
                    <View>
                        <Text style={{alignSelf:'center',fontSize:wp('6%'),fontWeight:'bold',color:'#fff',marginLeft:wp('7%')}}>
                        {name}
                        </Text>
                        <Text style={{alignSelf:'flex-start',fontSize:wp('4%'),color:'#fff',marginLeft:wp('7%')}}>
                        {rating}/10
                        </Text>
                    </View>
                </View>

            </View>

            <View style={{justifyContent:'center',marginRight:wp('10%')}}>
                <Text style={{fontSize:wp('13%'),alignSelf:'center',color:'#fff',fontWeight:'bold'}}>₹{cost}
                </Text>
            </View>
        </View>

        <Card 
            style={{ borderRadius:wp('6%'),padding:wp('3%'),marginLeft:wp('3%'),marginRight:wp('3%'),marginVertical:wp('2%'),width:wp('94%'),elevation:8}}>
            
            <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:hp('2%')}}>
                <View style={{flexDirection:'row'}}>
                    <View style={{backgroundColor:'#000',height:hp('2%'),width:hp('2%'),borderRadius:hp('2%')/2, marginLeft:wp('3%'),alignSelf:'center'}}></View>
                    
                    <View style={{marginLeft:wp('5%')}}>
                        <Text style={{fontSize:wp('4%')}}>PickUp Location</Text>
                        <Text style={{fontSize:wp('5%'),fontWeight:'bold'}}>{PickUplocation}</Text>
                    </View>

                </View>
                <Text style={{fontSize:wp('6%'),fontWeight:'bold',color:'#11598f',alignSelf:'center'}}>₹{cost}</Text>
            </View>

            <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:hp('0.5%')}}>
                <View style={{flexDirection:'row'}}>
                <Image source={require('./location1.png')}
                    style={{alignSelf:'center',width: wp('7%'), height:wp('7%'),marginLeft:wp('1%'),alignSelf:'center'}}/>
                        <View style={{marginLeft:wp('3.5%')}}>
                            <Text style={{fontSize:wp('4%')}}>Drop Location</Text>
                            <Text style={{fontSize:wp('5%'),fontWeight:'bold'}}>{droplocation}</Text>
                        </View>
                </View>
                <TouchableOpacity style={{justifyContent:'center'}}
                        onPress={()=>this.props.navigation.navigate('ridecompletebill_2')}>
                        <Text style={{color:'#165686',alignSelf:'center',fontSize:wp('4%'),fontWeight:'bold'}} >View BILL →</Text>
                </TouchableOpacity>
            </View>
            
        </Card>

    </View>
    );
  }
}



