import React, { Component } from 'react';  
import { config,Dimensions,Text,PermissionsAndroid ,ToastAndroid} from 'react-native';  
import MapContainer from './components/MapContainer/index';
import Geolocation from '@react-native-community/geolocation';  
import MapView from 'react-native-maps';  
import {View,InputGroup, Button,Input,List, Left,ListItem, Toast} from 'native-base';
//import Icon from 'react-native-vector-icons/FontAwesome';
import RNGooglePlaces from 'react-native-google-places';
import Icon from 'react-native-vector-icons/MaterialIcons';
import request from './request';
import styles1 from './Styles/MapContainerStyles';
import styles2 from './Styles/SearchBoxContainerStyles';
import styles3 from './Styles/SearchResultsStyles';
import styles4 from './Styles/BookButtonStyles';

const {width,height}=Dimensions.get("window");
const ASPECT_RATIO = width/height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = ASPECT_RATIO * LATITUDE_DELTA;

export default class App extends Component 
{

  constructor(props)
  {
    super(props);
    this.state = ({
        latitude:21.244242,
        longitude:77.424524,
        show:false,
        pickup:null,
        dropoff:null,
        dist:null,
        predictions:[],
        showpickuppredictions:false,
        showdropoffpredictions:false,
        pickupplaceholder:'Choose Pick Up location',
        dropoffplaceholder:'Choose Drop Off location'
    })
  }

  async componentDidMount() 
  {
      Geolocation.setRNConfiguration(config);
      Geolocation.getCurrentPosition(info =>
      {
        console.log(info);
        const {latitude,longitude} = info.coords;
        this.setState({
          latitude,
          longitude
        });
      }
      );
  }

  handleInput(key)
  {
    console.log(key);
    RNGooglePlaces.getAutocompletePredictions(key,
        {
            country:"IN"
        }
    )
    .then((results)=>
        this.setState({predictions:results}),
        console.log(this.state.predictions)
    )
    .catch((error)=>console.log(error));
  }

  async pickupSelected(placeID,fullText)
  {
    this.setState({pickupplaceholder:fullText});
    this.setState({predictions:[]});
    console.log("in1");
    console.log(placeID);
    this.setState({pickup:fullText});
    console.log(this.state.pickup+" "+this.state.dropoff);
    if(this.state.pickup!=null)
    {
      let resp= await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${this.state.pickup}&destination=${this.state.dropoff}&key=AIzaSyAoaZYHwECCzM7vqcAZYPiQCYhIO2M9RrM`);
      let respJson = await resp.json();
      resp= await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${this.state.pickup}&destination=${this.state.dropoff}&key=AIzaSyAoaZYHwECCzM7vqcAZYPiQCYhIO2M9RrM`);
      respJson = await resp.json();
      console.log(respJson.routes[0].legs[0].distance.text);
      let dist = respJson.routes[0].legs[0].distance.text;
      this.setState({dist:dist});
    }
  }

  async dropoffSelected(placeID,fullText)
  {
    this.setState({dropoffplaceholder:fullText});
    this.setState({predictions:[]});
    console.log("in2");
    console.log(placeID+" "+fullText);
    this.setState({dropoff:fullText});
    console.log(this.state.pickup+" "+this.state.dropoff);
    if(this.state.pickup!=null)
    {
      let resp= await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${this.state.pickup}&destination=${this.state.dropoff}&key=AIzaSyAoaZYHwECCzM7vqcAZYPiQCYhIO2M9RrM`);
      let respJson = await resp.json();
      resp= await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${this.state.pickup}&destination=${this.state.dropoff}&key=AIzaSyAoaZYHwECCzM7vqcAZYPiQCYhIO2M9RrM`);
      respJson = await resp.json();
      console.log(respJson.routes[0].legs[0].distance.text);
      let dist = respJson.routes[0].legs[0].distance.text;
      this.setState({dist:dist});
    }
    
  }

  bookride()
  {
    if(this.state.pickup!=null&&this.state.dropoff!=null)
    {
      const payload = {
        data:{
          userName:"Priyanshu",
          pickup:this.state.pickup,
          dropoff:this.state.dropoff,
          dist:this.state.dist,
          status:"pending"
        }
      };
      console.log("inr");
      /*request.post("https://localhost:3000/api/bookings")
      .send(payload)
      .finish((error,res)=>{
        console.log(res);
        console.log(error);
      });*/
      fetch('https://localhost:3000/api/bookings',{
        method:'POST',
        headers:{
          'Content-Type' : 'application/json'
        },
        body:JSON.stringify({
            "username":"priyanshuff",
            "pickup":"agra,india",
            "dropoff":"jaipur,india"
        })
      }).then((response) => response.json())
      .then((json) => {
        console.log(json.key);
      })
      .catch((error) => {
        console.error(error);
      });
    }
    else
    {
      ToastAndroid.showWithGravityAndOffset(
        "Enter PickUp/DropOff Details.",ToastAndroid.LONG,ToastAndroid.BOTTOM,25,50
      );
    }
  }

  render() 
  {
    return( 
      <View style={styles1.MainContainer}>  
        
        <MapView  
          style={styles1.mapStyle}  
          showsUserLocation={false}  
          zoomEnabled={true}  
          zoomControlEnabled={true}  
          initialRegion={{
              latitude:this.state.latitude,
              longitude:this.state.longitude,
              latitudeDelta:LATITUDE_DELTA,
              longitudeDelta:LONGITUDE_DELTA
            }}>  

          <MapView.Marker 
            coordinate={{
              latitude:this.state.latitude,
              longitude:this.state.longitude,
              latitudeDelta:LATITUDE_DELTA,
              longitudeDelta:LONGITUDE_DELTA
            }}  
            pinColor="green"
          />  
        </MapView> 

        <View style={styles2.searchBox}>
          <View style={styles2.inputWrapper}>
              <Text style={styles2.label}>Pick Up</Text>
              <InputGroup>
                  <Icon name="search" size={15} color="#ff5e3a" />
                  <Input style={styles2.inputSearch}
                      placeholder={this.state.pickupplaceholder}
                      onFocus={()=>this.setState({showpickuppredictions:true,showdropoffpredictions:false,predictions:[]})}
                      onChangeText={(text)=>this.handleInput(text)}
                      />
              </InputGroup>
          </View>
          <View style={styles2.secondInputWrapper}>
              <Text style={styles2.label}>Drop Off</Text>
              <InputGroup>
                  <Icon name="search" size={15} color="#ff5e3a" />
                  <Input style={styles2.inputSearch}
                      placeholder={this.state.dropoffplaceholder} 
                      onFocus={()=>this.setState({showdropoffpredictions:true,showpickuppredictions:false,predictions:[]})}
                      onChangeText={(text)=>this.handleInput(text)}
                  />
              </InputGroup>
          </View>
        </View>

        {this.state.showpickuppredictions?
        <View style={styles3.searchResultsWrapper}>
          <List
            dataArray={this.state.predictions}
            renderRow={(item)=>
              <View>
                <ListItem onPress={()=>this.pickupSelected(item.placeID,item.fullText)} button avatar style={styles3.listitem}>
                  <View style={styles3.leftContainer}>
                    <Icon style={styles3.leftIcon} name="location-city"/>
                  </View>
                  <View style={styles3.rightContainer}>
                    <Text style={styles3.primaryText}>{item.fullText}</Text>
                    <Text style={styles3.secondaryText}>{item.secondaryText}</Text>
                  </View>
                </ListItem>
              </View>
            }
          />
        </View>:<View></View>
        }

        {this.state.showdropoffpredictions?
        <View style={styles3.searchResultsWrapper}>
          <List
            dataArray={this.state.predictions}
            renderRow={(item)=>
              <View>
                <ListItem onPress={()=>this.dropoffSelected(item.placeID,item.fullText)} button avatar style={styles3.listitem}>
                  <View style={styles3.leftContainer}>
                    <Icon style={styles3.leftIcon} name="location-city"/>
                  </View>
                  <View style={styles3.rightContainer}>
                    <Text style={styles3.primaryText}>{item.fullText}</Text>
                    <Text style={styles3.secondaryText}>{item.secondaryText}</Text>
                  </View>
                </ListItem>
              </View>
            }
          />
        </View>:<View></View>
        }

        <Button style={styles4.fabContainer} >
          <Text style={styles4.btnText} onPress={()=>this.bookride()}>Book</Text>
        </Button>

      </View>
    );
  }
}