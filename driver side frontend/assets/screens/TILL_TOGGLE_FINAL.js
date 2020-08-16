import React, { Component } from "react";
import { Text,Alert,Switch,StyleSheet,PixelRatio,Dimensions, Image, View, StatusBar, TouchableOpacity } from "react-native";
//import { Container, Text } from "native-base";
import Geolocation from '@react-native-community/geolocation';
import MapView from 'react-native-maps';
import Polyline from '@mapbox/polyline';
import ToggleSwitch from 'toggle-switch-react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AwesomeAlert from 'react-native-awesome-alerts';

export default class LocationA extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
	  switchValue:false,
	  showAlert: false
    };
  }

  showAlert = () => {
    this.setState({
      showAlert: true
    });
  };
 
  	hideAlert1 = () => {
    this.setState({
      showAlert: false
	});
}
	hideAlert2 = () => {
		this.toggleSwitch(!this.state.switchValue);
		this.setState({
		  showAlert: false
		});
  };
  toggleSwitch = (value) => {
	  	this.setState({switchValue: value})
  }

  render() {   
	const {showAlert} = this.state;
    return (
      <View >
        <StatusBar backgroundColor = "#165686" barStyle = "light-content"/>
        
        <View style={{backgroundColor:"#165686",height:hp('8%'),flexDirection:'row',justifyContent:'space-between'}}>
        	<Image source={require('./drawer.png')}
                style={{width: wp('7%'),alignSelf:'center', height: wp('7%'),marginLeft:wp('2%')}} />
        	<ToggleSwitch
            	isOn={this.state.switchValue}
            	onColor="green"
            	offColor='#165686'
            	size='medium'
            	onToggle={(isOn)=>{this.state.switchValue?this.showAlert():this.toggleSwitch(!this.state.switchValue)}}
          	/>
        </View>

		<AwesomeAlert
          show={showAlert}
          showProgress={false}
          title=""
		  message="Are you sure you want to go off Duty?"
		  messageStyle={{fontSize:wp('5%')}}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
		  cancelText="NO"
		  cancelButtonTextStyle={{fontSize:wp('5%'),textAlign:'center'}}
		  cancelButtonStyle={{width:wp('20%'),justifyContent:'center'}}
		  confirmText="YES"
		  confirmButtonStyle={{width:wp('20%'),justifyContent:'center'}}
		  confirmButtonTextStyle={{fontSize:wp('5%'),textAlign:'center'}}
          confirmButtonColor="#165686"
          onCancelPressed={() => {
            this.hideAlert1();
          }}
          onConfirmPressed={() => {
            this.hideAlert2();
          }}
        />

        <View style={{height:hp('70%')}}>
        <MapView  
          style={{width:wp('100%'),height:hp('70%')}}
          showsUserLocation={false}  
          zoomEnabled={true}  
          zoomControlEnabled={true}  
          initialRegion={{  
            latitude: 28.579660,   
            longitude: 77.321110,  
            latitudeDelta: 0.0922,  
            longitudeDelta: 0.0421,  
          }}> 
          </MapView>  
        </View>

      	<View style={{backgroundColor:'#165686',height:hp('20%'),alignContent:'center',justifyContent:'center'}}>
        	<Text style={{textAlign:'center',color:'#fff',fontSize:wp('5%'),marginBottom:hp('3%')}}>
         		Hi! Rajesh you are currently {this.state.switchValue?'on':'off'} Duty.
         	</Text>
			<TouchableOpacity style={{justifyContent:'center',backgroundColor:'#fff',height:hp('6%'),width:wp('60%'),alignSelf:'center',borderRadius:hp('6%')/2}}
            	onPress={()=>{this.state.switchValue?this.showAlert():this.toggleSwitch(!this.state.switchValue)}}>
					<Text  style={{color: '#165686',textAlign: 'center',fontSize:wp('5%'),alignSelf:'center'}}>
						{this.state.switchValue?'Go off Duty':'Go on Duty'}
					</Text>
        	</TouchableOpacity>
      	</View>
      
      </View>
    );
  }
}