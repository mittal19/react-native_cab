import React, { Component } from "react";
import { Text,Alert,Button,Switch,StyleSheet,PermissionsAndroid,PixelRatio,Dimensions, Image, View, StatusBar, TouchableOpacity } from "react-native";
//import { Container, Text } from "native-base";
import MapView, {
  Marker,
  AnimatedRegion,
  PROVIDER_GOOGLE
} from "react-native-maps";
import haversine from "haversine";
import Polyline from '@mapbox/polyline';
import Geolocation from '@react-native-community/geolocation';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ToggleSwitch from 'toggle-switch-react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import Toast from 'react-native-simple-toast';

const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;

export default class LocationA extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
	  switchValue:false,
    showAlert: false,
    latitude: LATITUDE,
      longitude: LONGITUDE,
      routeCoordinates: [],
      distanceTravelled: 0,
      prevLatLng: {},
      coordinate: new AnimatedRegion({
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: 0,
        longitudeDelta: 0
      })
    };
  }

   async requestLocationPermission(){
    console.log('in2');
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          'title': 'Venido wants to access your Location',
          'message': 'Give ccess to your location?'
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Toast.show('Loading Location');
        console.log("You can use the location")
        Toast.show('Location Permission denied')
        //alert("You can use the location");
      } else {
       console.log("location permission denied")
        //alert("Location permission denied");
      }
    } catch (err) {
      console.warn(err)
    }
  }

 async componentDidMount() {
   await this.requestLocationPermission();
    console.log('in');
    const { coordinate } = this.state;
try{
  Toast.show('Loading Location')
    this.watchID = Geolocation.watchPosition(
      position => {
        const { routeCoordinates, distanceTravelled } = this.state;
        const { latitude, longitude } = position.coords;

        const newCoordinate = {
          latitude,
          longitude
        };
        
        if (Platform.OS === "android") {
          if (this.marker) {
            this.marker._component.animateMarkerToCoordinate(
              newCoordinate,
              500
            );
          }
        } else {
          coordinate.timing(newCoordinate).start();
        }

        this.setState({
          latitude,
          longitude,
          routeCoordinates: routeCoordinates.concat([newCoordinate]),
          distanceTravelled:
            distanceTravelled + this.calcDistance(newCoordinate),
          prevLatLng: newCoordinate
        });
      },
      error => console.log(error),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
        distanceFilter: 10
      }
    );
  }catch{
    Toast.show('Unable to load location! Restart the App.')
    console.log('error');
  }
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  getMapRegion = () => ({
    latitude: this.state.latitude,
    longitude: this.state.longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA
  });

  calcDistance = newLatLng => {
    const { prevLatLng } = this.state;
    return haversine(prevLatLng, newLatLng) || 0;
  };


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
          style={{...StyleSheet.absoluteFillObject}}
          provider={PROVIDER_GOOGLE}
          showUserLocation
          followUserLocation
          loadingEnabled
          region={this.getMapRegion()}
        >
          <MapView.Polyline 
            coordinates={this.state.routeCoordinates}
            strokeWidth={2}
            strokeColor="red"/>

          
          <Marker
		   		coordinate={this.getMapRegion()}
		   		description={"Your Location"}>
		   		<Image source={require('./car.png')} style={{height: 35, width:35 }} />
		</Marker>

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