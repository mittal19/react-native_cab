import React, { Component } from 'react';  
import { Text } from 'react-native';  
import {View,InputGroup, Input} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import RNGooglePlaces from 'react-native-google-places';

import styles from './SearchBoxContainerStyles';


export const SearchBox=()=>
{
    
    function handleInput(key)
    {
        console.log(key);
        RNGooglePlaces.getAutocompletePredictions(key,
            {
                country:"IN"
            }
        )
        .then((results)=>
            console.log(results)
        )
        .catch((error)=>console.log(error));
    }

    return(
    <View style={styles.searchBox}>
        <View style={styles.inputWrapper}>
            <Text style={styles.label}>Pick Up</Text>
            <InputGroup>
                <Icon name="search" size={15} color="#ff5e3a" />
                <Input style={styles.inputSearch}
                    placeholder="Choose Pick Up location" 
                    onChangeText={handleInput.bind(this)}
                    />
            </InputGroup>
        </View>
        <View style={styles.secondInputWrapper}>
            <Text style={styles.label}>Drop Off</Text>
            <InputGroup>
                <Icon name="search" size={15} color="#ff5e3a" />
                <Input style={styles.inputSearch}
                    placeholder="Choose Drop Off location" />
            </InputGroup>
        </View>
    </View>
    )
}

export default SearchBox;