import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  Image
} from 'react-native';

import MapView,{Marker} from 'react-native-maps';
import Polyline from '@mapbox/polyline';
import Geolocation from '@react-native-community/geolocation';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class RnDirectionsApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
	  latitude: null,
      longitude: null,
      error: null,
      concat: null,
      coords:[],
      x: 'false',
      cordLatitude:28.7041,
      cordLongitude:77.1025,
	};
	this.mergeLot = this.mergeLot.bind(this);
  }

  componentDidMount() {
    Geolocation.getCurrentPosition(
       (position) => {
         this.setState({
           latitude: position.coords.latitude,
           longitude: position.coords.longitude,
           error: null,
         });
         this.mergeLot();
       },
       (error) => this.setState({ error: error.message }),
       { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
     );
	   console.log(this.state.latitude+" "+this.state.longitude);
	   //this.getDirections("27.1767,78.0081", "28.7041,77.1025");
   }

   mergeLot(){
    if (this.state.latitude != null && this.state.longitude!=null)
     {
       let concatLot = this.state.latitude +","+this.state.longitude
       this.setState({
         concat: concatLot
       }, () => {
         this.getDirections(concatLot, "28.7041,77.1025");
       });
     }

   }


  //componentDidMount() {
    // find your origin and destination point coordinates and pass it to our method.
    // I am using Bursa,TR -> Istanbul,TR for this example
    //this.getDirections("27.1767,78.0081", "28.7041,77.1025")
  //}

  async getDirections(startLoc, destinationLoc) {
        try {
            let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${ startLoc }&destination=${ destinationLoc }&key=AIzaSyAoaZYHwECCzM7vqcAZYPiQCYhIO2M9RrM`)
            let respJson = await resp.json();
			console.log(respJson);
			let points = Polyline.decode(respJson.routes[0].overview_polyline.points);
			console.log(points);
			let coords = points.map((point, index) => {
                return  {
                    latitude : point[0],
                    longitude : point[1]
                }
            })
			this.setState({coords: coords})
			this.setState({x: "true"})
            return coords
        } catch(error) {
            alert(error)
            return error
        }
    }

  render() {
    return (
	<View>
		        <StatusBar backgroundColor = "#165686" barStyle = "light-content"/>

      <View style={{height:hp('75%')}}>
		<MapView 
			style={styles.map}
			
			zoomEnabled={true}
			initialRegion={{
          	latitude:27.1767, 
          	longitude:78.0081, 
          	latitudeDelta: 0.0922,
          	longitudeDelta: 0.0421
        }}>
			{!!this.state.latitude && !!this.state.longitude && <MapView.Marker
         coordinate={{"latitude":this.state.latitude,"longitude":this.state.longitude}}
         title={"Your Location"}
       />}
	   {!!this.state.cordLatitude && !!this.state.cordLongitude &&
	       <Marker
		   		coordinate={{
			 	latitude: this.state.cordLatitude,
			 	longitude: this.state.cordLongitude,
		   		}}
		   		description={"This is a marker in React Natve"}>
		   		<Image source={require('./car.png')} style={{height: 35, width:35 }} />
		 	</Marker>
	   }
		<MapView.Polyline 
            coordinates={this.state.coords}
            strokeWidth={2}
            strokeColor="red"/>
        </MapView>
      </View>
	  <View style={{height:hp('25%'),backgroundColor:'#165686'}}>
	   
	   <View style={{flexDirection:'row',marginTop:wp('4%'),marginLeft:wp('4%')}}>
	   <Image source={require('./location.png')}
            	style={{alignSelf:'center',width: wp('6%'),height:wp('6%'),marginRight:wp('4%')}}/>
			<Text style={{color:'#D3D3D3',fontSize:wp('5%')}}>Drop Location</Text>
		</View>
		<Text style={{marginLeft:wp('14%'),color:'#fff',fontSize:wp('6%'),fontWeight:'bold'}}>Kamla Nagar, Agra</Text>
		
		<View style={{flexDirection:'row',margin:hp('3%'),justifyContent:'space-around'}}>
		<TouchableOpacity style={{justifyContent:'center',height:wp('10%'),width:wp('40%'),borderColor:'#fff',borderWidth:2}}
            onPress={()=>this.props.navigation.navigate('RideCancelBill')}>
            <Text style={{color:'#fff',alignSelf:'center',fontSize:wp('4%'),fontWeight:'bold'}} >Cancel Trip</Text>
        </TouchableOpacity>
		<TouchableOpacity style={{justifyContent:'center',backgroundColor:'#fff',height:wp('10%'),width:wp('40%')}}
            onPress={()=>this.props.navigation.navigate('RideCompleteBill')}>
            <Text style={{color:'#165686',alignSelf:'center',fontSize:wp('4%'),fontWeight:'bold'}} >Reached</Text>
        </TouchableOpacity>
		</View>
	  </View>
	</View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
AppRegistry.registerComponent('RnDirectionsApp', () => RnDirectionsApp);