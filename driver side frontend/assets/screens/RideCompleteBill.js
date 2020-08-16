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

export default class RideCompleteBill extends Component
{
    constructor(props) {
        super(props);
        this.state = {
          starCount: 4
        };
      }

      componentDidMount() {
        this.animation.play();
      }

      onStarRatingPress(rating) {
        this.setState({
          starCount: rating
        });
        console.log(rating);
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
    return(
    <View style={{flex:1,backgroundColor:'#165686'}}>
        <StatusBar backgroundColor = "#165686" barStyle = "light-content"/>
        
        <View style={{flexDirection:'row',marginTop:hp('7%'),justifyContent:'center'}}>
            
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Image source={require('./tick.png')}
                style={{alignSelf:'center',width: wp('8%'),height:wp('8%'),marginRight:wp('7%')}}/>
            <Text style={{ alignSelf:'center',fontSize:wp('6%'),color:'#fff',fontWeight:'bold'}}>Trip Successful</Text>
            </View>
        </View>

        <View style={{marginTop:hp('6%')}}>
            <Text style={{color:'#D3D3D3',alignSelf:'flex-end',marginRight:wp('15%'),fontSize:wp('4%')}}>{date} {month} , {year} [ {hour} : {min} {TimeType} ]</Text>
        </View>
        
        <View style={{flexDirection:'row',marginTop:hp('4%')}}>
            <View style={{backgroundColor:'#fff',height:hp('2%'),width:hp('2%'),borderRadius:hp('2%')/2, marginLeft:wp('10%'),alignSelf:'center'}}></View>
            <Text style={{alignSelf:'center',color:'#D3D3D3',marginLeft:wp('7%'),fontSize:wp('4%')}}>PickUp Location</Text>
        </View>
        <View style={{marginTop:hp('2%')}}>
            <Text style={{marginLeft:wp('19%'),fontSize:wp('6%'),color:'#fff',fontWeight:'bold'}}>
                {PickUplocation}
            </Text>
        </View>

        <View style={{flexDirection:'row',marginTop:hp('4%')}}>
            <Image source={require('./location.png')}
                style={{alignSelf:'center',width: wp('7%'), height:wp('7%'),marginLeft:wp('8.5%'),alignSelf:'center'}}/>
            <Text style={{alignSelf:'center',color:'#D3D3D3',marginLeft:wp('5%'),fontSize:wp('4%')}}>Drop Location</Text>
        </View>
        <View style={{marginTop:hp('2%')}}>
            <Text style={{marginLeft:wp('19%'),fontSize:wp('6%'),color:'#fff',fontWeight:'bold'}}>
                {droplocation}
            </Text>
        </View>

        <View style={{alignItems:'center',marginTop:hp('6%')}}>
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
 
        <View style={{alignItems:'center',marginTop:hp('4%')}}>
            <Text style={{fontSize:wp('4%'),color:'#D3D3D3',marginBottom:hp('2%')}}>Rating</Text>
            <StarRating
                disabled={false}
                emptyStar={require('./emptystar.png')}
                fullStar={require('./fullstar.png')}
                halfStar={require('./fullstar.png')}
                iconSet={'Ionicons'}
                starSize={hp('4%')}
                maxStars={5}
                rating={this.state.starCount}
                selectedStar={(rating) => this.onStarRatingPress(rating)}
                fullStarColor={'red'}
            />
        </View>

        <TouchableOpacity style={{justifyContent:'center',backgroundColor:'#fff',height:hp('7%'),marginTop:('8%'),marginHorizontal:wp('15%'),borderRadius:hp('6%')/2}}
            onPress={()=>this.props.navigation.navigate('temp')}>
            <Text style={{color:'#165686',alignSelf:'center',fontSize:wp('6%')}} >DONE</Text>
        </TouchableOpacity>

    </View>
    );
  }
}

AppRegistry.registerComponent('RideCompleteBill', () => lottieloader);