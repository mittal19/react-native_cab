import React,{Component} from 'react';
import {  Dimensions, Platform,TouchableWithoutFeedback,Keyboard, PixelRatio,StyleSheet, TextInput,TouchableOpacity ,ScrollView,  View,  Text,  StatusBar, KeyboardAvoidingView} from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const div=SCREEN_HEIGHT/3;
const scale = SCREEN_WIDTH / 320;

export function normalize(size) {
  const newSize = size * scale 
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}

export default class login_phone extends Component{
  render() {
   return(
    <KeyboardAvoidingView style={styles.cont} behavior="height" keyboardVerticalOffset={30}>
               <ScrollView>

      
       <StatusBar backgroundColor = "#11598f" barStyle = "light-content"/>  
       
        <Text style={styles.login}>Log In</Text>
        
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{justifyContent: 'center',height: div}}>
          <Text style={styles.textstyle2}>Enter Phone Number</Text>
          <TextInput style = {styles.input}
               autoCorrect={false} 
               keyboardType='numeric'
               onSubmitEditing={() => this.props.navigation.navigate('login_password')}  
               returnKeyType="next" />
        </View>
        </TouchableWithoutFeedback>
        
        <View style={{flex:1,height:div,justifyContent:'center'}}>
          <TouchableOpacity style={styles.buttonContainer} 
                onPress={()=>this.props.navigation.navigate('login_password')}>
              <Text  style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View> 
        
        </ScrollView>
        </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  
  container: {
    flex:1,
    flexDirection:'column',
    //justifyContent:'center'
  },
  login:
  {
    height: div, 
    color:'#11598f',
    fontSize: normalize(27),
    fontWeight:'bold',
    //fontFamily: 'fontFamily-bold',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
   textstyle2:
  {
    fontSize: normalize(12),
    color:'#8a8383',
    textAlign:'center',
    marginBottom:normalize(20)
  },

  input:{
    height: 50,
    marginHorizontal:normalize(54),
    padding: 10,
    color: '#707b7c',
    borderBottomColor:'#c6c6c6',
    borderBottomWidth: 0.5,
    fontSize:20,
    textAlign:'center',
  },
  
  buttonContainer:{
    backgroundColor: '#11598f',
    paddingVertical: 13,
    marginHorizontal:normalize(35),
    ///marginBottom:normalize(30)
  },
  buttonText:{
    color: '#fff',
    textAlign: 'center',
    //fontWeight: 'bold',
    fontSize:20
  }
});

