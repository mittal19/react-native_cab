import React,{Component} from 'react';
import {  Dimensions,Image, Platform,TouchableWithoutFeedback,Keyboard, PixelRatio,StyleSheet, TextInput,TouchableOpacity ,ScrollView,  View,  Text,  StatusBar, KeyboardAvoidingView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Card} from 'react-native-shadow-cards';
import DatePicker from 'react-native-datepicker';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const div=SCREEN_HEIGHT/4;
var monthNames = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May','Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


export default class Banktransfer_8 extends Component{

    constructor(props){
        super(props)
        this.state = {date:"2020-05-01",day:3,mon:monthNames[4],year:'2020'}
      }
  render() {
        var currbal=900;
        var rides =[
            {
                id:0,
                taxino:'UK 536',
                taximodel:'nissan',
                drivername:'Amit',
                rating:'8.8',
                amt:'363'
            },
            {
                id:1,
                taxino:'UK 536 AL',
                taximodel:'nissan',
                drivername:'Aman',
                rating:'8.8',
                amt:'363'
            },
            {
                id:2,
                taxino:'UK 536',
                taximodel:'nissan',
                drivername:'Amit',
                rating:'8.8',
                amt:'363'
            },
            {
                id:3,
                taxino:'UK 536',
                taximodel:'nissan',
                drivername:'Amit',
                rating:'8.8',
                amt:'363'
            },
            {
                id:4,
                taxino:'UK 536',
                taximodel:'nissan',
                drivername:'Amit',
                rating:'8.8',
                amt:'363'
            },
            {
                id:5,
                taxino:'UK 536',
                taximodel:'nissan',
                drivername:'Amit',
                rating:'8.8',
                amt:'363'
            }
        ];
      
    return(
        
    <View style={{ flex:1,backgroundColor:'#11598f'}}>
        <StatusBar backgroundColor = "#11598f" barStyle = "light-content"/>
            
            <View style={{flexDirection:'row',justifyContent:'center'}}>
                <Text style={{color:'#D3D3D3',fontSize:wp('4%')}}>Today's BALANCE</Text>
            </View>

            <Text style={{alignSelf:'center',color:'#fff',fontSize:wp('15%'),fontWeight:'bold'}}>₹ {currbal}</Text>

            <View style={{marginLeft:wp('5%'),flexDirection:'row',justifyContent:'flex-start'}}>
               
                <DatePicker
                    iconSource={require('./calender.png')}
                    style={{width:wp('10%')}}
                    hideText='true'
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    //minDate="2016-05-01"
                    //maxDate="2016-06-01"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon:
                        {
                            width:wp('7%'),
                            height:wp('7%'),
                        }
                      }}
                    onDateChange={(date) => {this.setState({date: date , mon:monthNames[parseInt(date.slice(5,7))-1],year:date.slice(0,4),day:date.slice(8,10)})}}
                />
                <Text style={{margin:wp('3%'),fontSize:wp('4%'),color:'#fff',alignSelf:'center'}}>{this.state.day} {this.state.mon} {this.state.year}</Text>

            </View>

        <ScrollView>
        <View style={{ backgroundColor:'#11598f'}}>
        {
            rides.map((item, index) => (
            <Card 
                style={{ borderRadius:wp('6%'),padding:wp('3%'),marginLeft:wp('3%'),marginRight:wp('3%'),marginVertical:wp('2%'),width:wp('94%'),elevation:8}}
                key = {item.id}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    
                    <View style={{flexDirection:'row'}}>
                        <Image source={require('./car.png')}
                            style={{alignSelf:'center',width: wp('12%'),height:wp('12%'),marginRight:wp('4%')}}/>
                        <View>
                        <Text style={{alignSelf:'center',fontSize:wp('5%'),fontWeight:'bold'}}>
                            {item.taxino}
                        </Text>
                        <Text style={{alignSelf:'flex-start',fontSize:wp('3.5%')}}>
                            {item.taximodel}
                        </Text>
                        </View>
                    </View>
                    <Text style={{alignSelf:'center',fontSize:wp('6%'),color:'#11598f',fontWeight:'bold'}}>
                    ₹ {item.amt}
                    </Text>

                </View>

                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    
                    <View style={{flexDirection:'row'}}>
                        <Image source={require('./driver1.png')}
                            style={{alignSelf:'center',width: wp('10%'),height:wp('10%'),marginRight:wp('6%')}}/>
                        <View>
                        <Text style={{alignSelf:'center',fontSize:wp('5%'),fontWeight:'bold'}}>
                            {item.drivername}
                        </Text>
                        <Text style={{alignSelf:'flex-start',fontSize:wp('3.5%')}}>
                            {item.rating}/10
                        </Text>
                        </View>
                    </View>
                    <TouchableOpacity style={{justifyContent:'center'}}
                        onPress={()=>this.props.navigation.navigate('banktransfer_5')}>
                        <Text style={{color:'#165686',alignSelf:'center',fontSize:wp('4%'),fontWeight:'bold'}} >View Details →</Text>
                    </TouchableOpacity>

                </View>

            </Card>
            ))
        }
        </View>
        </ScrollView>
    </View>
    
    );
  }
}



