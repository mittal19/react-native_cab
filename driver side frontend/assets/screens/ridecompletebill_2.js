import React,{Component} from 'react';
import {  AppRegistry,Dimensions, Image,Platform,TouchableWithoutFeedback,Keyboard, PixelRatio,StyleSheet, TextInput,TouchableOpacity ,ScrollView,  View,  Text,  StatusBar, KeyboardAvoidingView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import StarRating from 'react-native-star-rating';
import Animation from 'lottie-react-native';
import anim from './rupee.json';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const div=SCREEN_HEIGHT/5;
const scale = SCREEN_WIDTH / 320;
var monthNames = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May','Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default class ridecompletebill_2 extends Component
{
    
      componentDidMount() {
        this.animation.play();
      }

  render() {
    var date = new Date().getDate();
    var month = monthNames[new Date().getMonth()];
    var year = new Date().getFullYear();
    var hour = new Date().getHours();
    var TimeType;
    if(hour <= 11)
    {
      TimeType = 'AM';
    }
    else
    {
        TimeType = 'PM';
    }
    if( hour > 12 )
    {
      hour = hour - 12;
    }
    if( hour == 0 )
    {
        hour = 12;
    } 
    var min = new Date().getMinutes();
    if(min<9)
    {
        if(min==0)
            min='00'
        if(min>0)
            min='0'+min;
    }
    var PickUplocation = ' Khandari , Agra';
    var droplocation = ' Kamla Nagar , Agra';
    var totamt= 400;
    var Duration='32 min';
    var paytm=200,fare=200,gst=17,fees=20,earn=163,tds=1,tot=162;
    return(
    <View style={{flex:1,backgroundColor:'#165686'}}>
        <StatusBar backgroundColor = "#165686" barStyle = "light-content"/>
        
        <View style={{flexDirection:'row',marginTop:hp('1%'),justifyContent:'center'}}>
            
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Image source={require('./tick.png')}
                style={{alignSelf:'center',width: wp('8%'),height:wp('8%'),marginRight:wp('7%')}}/>
            <Text style={{ alignSelf:'center',fontSize:wp('8%'),color:'#fff',fontWeight:'bold'}}>Trip Successful</Text>
            </View>

        </View>

        <View style={{marginTop:hp('2%')}}>
            <Text style={{color:'#D3D3D3',alignSelf:'flex-end',marginRight:wp('15%'),fontSize:wp('4%')}}>{date} {month} , {year} [ {hour} : {min} {TimeType} ]</Text>
            <Text style={{color:'#D3D3D3',alignSelf:'flex-end',marginRight:wp('15%'),fontSize:wp('4%')}}>Duration {Duration}</Text>
        </View>
        
        <View style={{marginHorizontal:wp('15%'),marginVertical:hp('1%')}}>

            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View>
                <Text style={{fontSize:wp('5%'),color:'#D3D3D3'}}>Paytm Collected</Text>
                <Image source={require('./paytm.png')}
                    style={{width: wp('10%'),height:wp('10%')}}/>
                </View>
                <Text style={{fontSize:wp('5%'),color:'#D3D3D3',margin:wp('1%'),alignSelf:'center'}}>₹{paytm}</Text>
            </View>

            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{fontSize:wp('5%'),color:'#D3D3D3',margin:wp('1%'),marginTop:0}}>Ride Fare</Text>
                <Text style={{fontSize:wp('5%'),color:'#D3D3D3',margin:wp('1%'),marginTop:0}}>₹{fare}</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{fontSize:wp('5%'),color:'#D3D3D3',margin:wp('1%')}}>GST</Text>
                <Text style={{fontSize:wp('5%'),color:'#D3D3D3',margin:wp('1%')}}>-₹{gst}</Text>
            </View>
            
            <View style={{flexDirection:'row',justifyContent:'space-between',borderColor:'#808080',borderBottomWidth:1}}>
                <Text style={{fontSize:wp('5%'),color:'#D3D3D3',margin:wp('1%'),marginBottom:wp('3%')}}>Venido Fees</Text>
                <Text style={{fontSize:wp('5%'),color:'#D3D3D3',margin:wp('1%'),marginBottom:wp('3%')}}>-₹{fees}</Text>
            </View>

            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{fontSize:wp('5%'),color:'#D3D3D3',margin:wp('1%')}}>Ride Earnings</Text>
                <Text style={{fontSize:wp('5%'),color:'#D3D3D3',margin:wp('1%')}}>₹{earn}</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',borderColor:'#808080',borderBottomWidth:1}}>
                <Text style={{fontSize:wp('5%'),color:'#D3D3D3',margin:wp('1%'),marginBottom:wp('3%')}}>TDS</Text>
                <Text style={{fontSize:wp('5%'),color:'#D3D3D3',margin:wp('1%'),marginBottom:wp('3%')}}>-₹{tds}</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{fontWeight:'bold',fontSize:wp('5%'),color:'#fff',margin:wp('1%')}}>Total</Text>
                <Text style={{fontWeight:'bold',fontSize:wp('5%'),color:'#fff',margin:wp('1%')}}>-₹{tot}</Text>
            </View>
    
        </View>

        <View style={{alignItems:'center'}}>
            <Text style={{color:'#fff',fontSize:wp('4%'),fontWeight:'bold'}}>
                Total Payable:
            </Text>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Animation
                ref={animation => { this.animation = animation;}}
                style={{alignSelf:'center',width: wp('13%'),height:wp('13%'),marginRight:wp('0%')}}
                loop={true}
                source={anim}
            />
            <Text style={{color:'#fff',fontWeight:'bold',fontSize:wp('15%')}}>
             {totamt}
            </Text>
            </View>
        </View> 

        <View style={{flexDirection:'row',marginTop:hp('1%')}}>
            <View style={{backgroundColor:'#fff',height:hp('2%'),width:hp('2%'),borderRadius:hp('2%')/2, marginLeft:wp('10%'),alignSelf:'center'}}></View>
            <Text style={{alignSelf:'center',color:'#D3D3D3',marginLeft:wp('7%'),fontSize:wp('4%')}}>PickUp Location</Text>
        </View>
        <View style={{marginTop:hp('1%')}}>
            <Text style={{marginLeft:wp('19%'),fontSize:wp('6%'),color:'#fff',fontWeight:'bold'}}>
                {PickUplocation}
            </Text>
        </View>

        <View style={{flexDirection:'row',marginTop:hp('2%')}}>
            <Image source={require('./location.png')}
                style={{alignSelf:'center',width: wp('7%'), height:wp('7%'),marginLeft:wp('8.5%'),alignSelf:'center'}}/>
            <Text style={{alignSelf:'center',color:'#D3D3D3',marginLeft:wp('5%'),fontSize:wp('4%')}}>Drop Location</Text>
        </View>
        <View style={{marginTop:hp('1%')}}>
            <Text style={{marginLeft:wp('19%'),fontSize:wp('6%'),color:'#fff',fontWeight:'bold'}}>
                {droplocation}
            </Text>
        </View>
 
    </View>
    );
  }
}

AppRegistry.registerComponent('ridecompletebill_2', () => lottieloader);