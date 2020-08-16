import React,{Component} from 'react';
import {  Dimensions,Image, Platform,TouchableWithoutFeedback,Keyboard, PixelRatio,StyleSheet, TextInput,TouchableOpacity ,ScrollView,  View,  Text,  StatusBar, KeyboardAvoidingView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Card} from 'react-native-shadow-cards';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const div=SCREEN_HEIGHT/4;


export default class Dashboard_1 extends Component{

    constructor() {
        super();
        this.state = {
          show: false,
        };
      }
    
      ShowHideComponent = () => {
        if (this.state.show == true) {
          this.setState({ show: false });
        } else {
          this.setState({ show: true });
        }
        console.log(this.state.show);
      };

   alertItemName = (item) => {
    alert(item.name)
 }
  render() {
    var name='Priyanshu Mittal';
    var location='Location';
    var curbal=1030;
    var todaybal=200;
    var supportnum='+91-90XXXXXX41';
    var supportmail='mailxxxxx@gmail.com';
    var names=[
           {
                id: 0,
                cost: 233,
                dist:'4 km',
                startloc:'khandari,Agra',
                destloc:'kamla nagar,Agra'
           },
           {
                id: 1,
                cost: 233,
                dist:'4 km',
                startloc:'khandari,Agra',
                destloc:'kamla nagar,Agra'
            },
        ];

    var names2=[
        {
            id: 2,
            cost: 233,
            dist:'4km',
            startloc:'khandari,Agra',
            destloc:'kamla nagar,Agra'
        },
        {
            id: 3,
            cost: 233,
            dist:'4km',
            startloc:'khandari,Agra',
            destloc:'kamla nagar,Agra'
        },
        {
            id: 4,
            cost: 233,
            dist:'4km',
            startloc:'khandari,Agra',
            destloc:'kamla nagar,Agra'
        },
        {
            id: 5,
            cost: 233,
            dist:'4km',
            startloc:'khandari,Agra',
            destloc:'kamla nagar,Agra'
        },
        {
            id: 6,
            cost: 233,
            dist:'4km',
            startloc:'khandari,Agra',
            destloc:'kamla nagar,Agra'
        }
    ];
        
    return(
    <ScrollView >
        <StatusBar backgroundColor = "#11598f" barStyle = "light-content"/>
        <View style={{ backgroundColor: "#11598f",height:hp('17%'),justifyContent:'space-evenly'}}>
            <View style={{ flexDirection:'row',justifyContent:'space-evenly'}}>
                <View style={{flexDirection:'column',justifyContent:'center'}}>
                    <Text style={{color:'#fff',fontSize:wp('6%')}}>{name}</Text>
                    <Text style={{color:'#D3D3D3',fontSize:wp('4%')}}>{location}</Text>
                    <TouchableOpacity style={{justifyContent:'center',marginTop:wp('4%'),borderWidth: 1,borderColor: '#fff',height:wp('8%'),width:wp('45%'),borderRadius:wp('8')}} 
                        onPress={()=>this.props.navigation.navigate('profile')}>
                        <Text style={{color:'#fff',fontSize:wp('3%'),alignSelf:'center'}}>
                            GO TO PROFILE
                        </Text>
                    </TouchableOpacity>
                </View>

                <Image source={require('./social.png')}
                    style={{width: wp('25%'), height: wp('25%'), alignSelf:'center',borderRadius: 100/ 2,backgroundColor:'#fff',marginBottom:hp('2%')}} />
            </View>
    
        </View>
        
            <View>
                <View style={{flexDirection:'row',marginVertical:hp('1%')}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Banktransfer_8')}>
                    <Card style={{padding: wp('2%'), marginHorizontal: wp('2%'),height:wp('20%'),width:SCREEN_WIDTH/2-wp('4%'),alignSelf:'center',elevation:3}}
                            >
                        <View style={{flexDirection:'row',justifyContent:'center'}}>
                            <Image source={require('./current.png')}
                                style={{width: wp('8%'), height: wp('8%'), alignSelf:'center'}} />
                            <Text style={{fontSize:wp('4%'),color:'#11598f',width:wp('30%'),alignSelf:'center'}}>Current Balance</Text>
                        </View>
                        <Text style={{fontSize:wp('8%'),alignSelf:'flex-end',color:'#706c6c',fontWeight:'bold'}}>₹ {curbal}</Text>
                    </Card>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Banktransfer_10')}>
                    <Card style={{padding: wp('2%'), marginHorizontal: wp('2%'),height:wp('20%'),width:SCREEN_WIDTH/2-wp('4%'),alignSelf:'center',elevation:3}}>
                        <View style={{flexDirection:'row'}}>
                            <Image source={require('./todays.png')}
                                style={{width: wp('9%'), height: wp('9%'), alignSelf:'center'}} />
                            <Text style={{fontSize:wp('4%'),color:'#11598f',width:wp('30%'),alignSelf:'center'}}>Today's Payment</Text>
                        </View>
                        <Text style={{fontSize:wp('8%'),alignSelf:'flex-end',color:'#706c6c',fontWeight:'bold'}}>₹ {todaybal}</Text>
                    </Card>
                    </TouchableOpacity>
                </View>

                <Card style={{marginHorizontal:wp('5%'),width:SCREEN_WIDTH-wp('10%')}}>
                    <Text style={{color:'#11598f',fontSize:wp('4%'),marginHorizontal:wp('4%'),marginTop:wp('2%'),fontWeight:'bold'}}>Latest Rides</Text>
                    <Card style={{alignSelf:'center',elevation:0}}>
                    {
                        names.map((item, index) => (

                        <Card style={{alignSelf:'center',elevation:1,marginBottom:5,flexDirection:'row',margin:wp('0%'),justifyContent:'space-evenly'}}
                            key = {item.id}>
                           
                            <View style={{margin:wp('3%'),justifyContent:'center'}}>
                                <Text style={{marginVertical:wp('0%'),fontWeight:'bold',fontSize:wp('4%')}}>
                                    {item.dist}
                                </Text>
                                <Text style={{marginVertical:wp('0%'),fontWeight:'bold',fontSize:wp('4%')}}>
                                ₹ {item.cost}
                                </Text>
                            </View>

                            <View style={{justifyContent:'center',margin:wp('3%')}}>
                                <View style={{flexDirection:'row',marginVertical:wp('0%')}}>
                                    <View style={{backgroundColor:'#000',height:hp('2%'),width:hp('2%'),borderRadius:hp('2%')/2,alignSelf:'center',marginLeft:wp('1.5%')}}></View>
                                    <Text style={{marginLeft:wp('4%'),fontSize:wp('4%'),color:'#706c6c',fontWeight:'bold'}}>
                                        {item.startloc}
                                    </Text>
                                </View>
    
                                <View style={{marginVertical:wp('0%'),flexDirection:'row'}}>
                                    <Image source={require('./location1.png')}
                                        style={{alignSelf:'center',width: wp('7%'), height:wp('7%'),alignSelf:'center'}}/>
                                    <Text style={{marginLeft:wp('2%'),fontSize:wp('4%'),color:'#706c6c',fontWeight:'bold'}}>
                                        {item.destloc}
                                    </Text>
                                </View>
                            </View>

                        </Card>
                        ))
                    }
                    </Card>
                    {}
                    {this.state.show?(
                        <Card style={{alignSelf:'center',elevation:0}}>
                        {
                            names2.map((item, index) => (
    
                            <Card style={{alignSelf:'center',elevation:1,marginBottom:5,flexDirection:'row',margin:wp('0%'),justifyContent:'space-evenly'}}
                                key = {item.id}>
                               
                                <View style={{margin:wp('3%'),justifyContent:'center'}}>
                                    <Text style={{marginVertical:wp('0%'),fontWeight:'bold',fontSize:wp('4%')}}>
                                        {item.dist}
                                    </Text>
                                    <Text style={{marginVertical:wp('0%'),fontWeight:'bold',fontSize:wp('4%')}}>
                                    ₹ {item.cost}
                                    </Text>
                                </View>
    
                                <View style={{justifyContent:'center',margin:wp('3%')}}>
                                    <View style={{flexDirection:'row',marginVertical:wp('0%')}}>
                                        <View style={{backgroundColor:'#000',height:hp('2%'),width:hp('2%'),borderRadius:hp('2%')/2,alignSelf:'center',marginLeft:wp('1.5%')}}></View>
                                        <Text style={{marginLeft:wp('4%'),fontSize:wp('4%'),color:'#706c6c',fontWeight:'bold'}}>
                                            {item.startloc}
                                        </Text>
                                    </View>
                                    <View style={{marginVertical:wp('0%'),flexDirection:'row'}}>
                                        <Image source={require('./location1.png')}
                                            style={{alignSelf:'center',width: wp('7%'), height:wp('7%'),alignSelf:'center'}}/>
                                        <Text style={{marginLeft:wp('2%'),fontSize:wp('4%'),color:'#706c6c',fontWeight:'bold'}}>
                                            {item.destloc}
                                        </Text>
                                    </View>
                                </View>
    
                            </Card>
                            ))
                        }
                        </Card>
                    ):null}
                    <TouchableOpacity style={{justifyContent:'center',backgroundColor:'#11598f',height:hp('6%')}}
                        onPress={()=>this.ShowHideComponent()}>
                            <Text style={{color:'#fff',alignSelf:'center',fontSize:wp('4%')}} >View {this.state.show?<Text>Less</Text>:<Text>More</Text>}</Text>
                    </TouchableOpacity>
                </Card>
                        
                <View style={{flexDirection:'row',justifyContent:'space-between',margin:wp('3%'),marginBottom:wp('0%')}}>
                    <View>
                        <TouchableOpacity style={{height:hp('6%')}}
                            onPress={()=>this.props.navigation.navigate('legal')}>
                                <Text style={{color:'#11598f',fontSize:wp('4%')}} >Legal Information</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{height:hp('6%')}}
                            onPress={()=>this.props.navigation.navigate('about')}>
                                <Text style={{color:'#11598f',fontSize:wp('4%')}} >About</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{justifyContent:'center'}}>
                    <TouchableOpacity style={{backgroundColor:'#11598f',width:wp('40%'),height:hp('7%'),justifyContent:'center',borderRadius:wp('20%'),flexDirection:'row'}}
                            onPress={()=>this.props.navigation.navigate('login_phone')}>
                                <Image source={require('./door.png')}
                                        style={{alignSelf:'center',width: wp('4%'), height:wp('4%'),alignSelf:'center'}}/>
                                <Text style={{color:'#fff',fontSize:wp('4%'),alignSelf:'center',marginLeft:wp('3%')}} >Log Out</Text>
                    </TouchableOpacity>
                    </View>
                </View>

                <Text style={{marginHorizontal:wp('5%'),color:'#11598f',fontSize:wp('5%')}}>Contact Us</Text>
                <View style={{flexDirection:'row',marginVertical:wp('2%')}}>
                <Image source={require('./mobile.png')}
                    style={{width: wp('5%'), height: wp('5%'), alignSelf:'center',marginLeft:wp('6%')}} />
                    <Text style={{color:'#11598f',fontSize:wp('4%'),marginLeft:wp('6%')}}>{supportnum}</Text>
                </View>
                <View style={{flexDirection:'row',marginBottom:wp('4%')}}>
                <Image source={require('./mail.png')}
                    style={{width: wp('5%'), height: wp('5%'), alignSelf:'center',marginLeft:wp('6%')}} />
                    <Text style={{color:'#11598f',fontSize:wp('4%'),marginLeft:wp('6%')}}>{supportmail}</Text>
                </View>
            </View>
    
    </ScrollView>
    );
  }
}



