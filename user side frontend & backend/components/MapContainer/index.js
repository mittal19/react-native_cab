import React, { Component } from 'react';  
import { Text } from 'react-native';  
import MapView from 'react-native-maps';  
import {View,InputGroup, Input} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import RNGooglePlaces from 'react-native-google-places';

import styles1 from './MapContainerStyles';
import styles2 from './SearchBoxContainerStyles';

export const MapContainer=({region})=>
{
    return(
    <View style={styles1.MainContainer}>  
      
      <MapView  
        style={styles1.mapStyle}  
        showsUserLocation={false}  
        zoomEnabled={true}  
        zoomControlEnabled={true}  
        initialRegion={region}>  

        <MapView.Marker 
          coordinate={region}  
          pinColor="green"
        />  
      </MapView> 

      <View style={styles2.searchBox}>
        <View style={styles2.inputWrapper}>
            <Text style={styles2.label}>Pick Up</Text>
            <InputGroup>
                <Icon name="search" size={15} color="#ff5e3a" />
                <Input style={styles2.inputSearch}
                    placeholder="Choose Pick Up location"
                    />
            </InputGroup>
        </View>
        <View style={styles2.secondInputWrapper}>
            <Text style={styles2.label}>Drop Off</Text>
            <InputGroup>
                <Icon name="search" size={15} color="#ff5e3a" />
                <Input style={styles2.inputSearch}
                    placeholder="Choose Drop Off location" />
            </InputGroup>
        </View>
      </View>
   
    </View>
    )
}
export default MapContainer;