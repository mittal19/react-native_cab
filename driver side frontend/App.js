import React,{Component} from 'react';
import { createAppContainer } from 'react-navigation';  
import { createStackNavigator} from 'react-navigation-stack';  
import  {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Dashboard_1 from './screens/Dashboard_1';
import login_phone from './screens/login_phone';
import login_password from './screens/login_password';
import login_otp from './screens/login_otp';
import login_createpassword from './screens/login_createpassword';
import LOCATION_FINAL from './screens/LOCATION_FINAL';
import temp from './screens/temp';
import profile from './screens/profile';
import Banktransfer_8 from './screens/Banktransfer_8';
import banktransfer_5 from './screens/banktransfer_5';
import RideCompleteBill from './screens/RideCompleteBill';
import ridecompletebill_2 from './screens/ridecompletebill_2';
import Banktransfer_10 from './screens/Banktransfer_10';
import legal from './screens/legal';
import about from './screens/about';
import RideRequest_FInal from './screens/RideRequest_FInal';
import ACCEPTRIDEREQUEST_FINAL from './screens/ACCEPTRIDEREQUEST_FINAL';
import ReachedPickupPoint_Final from './screens/ReachedPickupPoint_Final';
import REACHED_FINAL from './screens/REACHED_FINAL';
import RideCancelBill from './screens/RideCancelBill';

const AppNavigator = createStackNavigator(
    { 
      login_phone:{
          screen:login_phone,
          navigationOptions:{
          headerShown:false
          }
      },
      login_password:{
          screen:login_password,
          navigationOptions :({navigation}) => ({
            headerTitle: "",
            headerStyle: {
              height:hp('6%'),
              backgroundColor:"fff",
              elevation: null,
            },
          })
      },
      login_otp:{
        screen:login_otp,
        navigationOptions :({navigation}) => ({
          headerTitle: "",
          headerStyle: {
            height:hp('6%'),
            backgroundColor:"fff",
            elevation: null,
          },
        })
    },
    login_createpassword:{
      screen:login_createpassword,
      navigationOptions :({navigation}) => ({
        headerTitle: "",
        headerStyle: {
          height:hp('6%'),
          backgroundColor:"fff",
          elevation: null,
        },
      })
  },
  temp:{
    screen:temp,
    navigationOptions:{
      headerShown:false
      }
  },
  Dashboard_1:{
    screen:Dashboard_1,
    navigationOptions :({navigation}) => ({
      headerTitle: "",
      headerStyle: {
        height:hp('6%'),
        backgroundColor:"#11598f",
        elevation: null,
      },
    })
  },
  profile:{
    screen:profile,
    navigationOptions :({navigation}) => ({
      headerTitle: "Profile",
      headerStyle: {
        backgroundColor:"#11598f",
        elevation: null,
      },
      headerTitleStyle: {
        color: "#FFF",
        fontSize: hp('4%'),
      },
      headerTintColor: "#fff"
  })
  },
  Banktransfer_8:{
    screen:Banktransfer_8,
    navigationOptions :({navigation}) => ({
      headerTitle: "",
      headerStyle: {
        height:hp('6%'),
        backgroundColor:"#11598f",
        elevation: null,
      },
    })
  },
  banktransfer_5:{
    screen:banktransfer_5,
    navigationOptions :({navigation}) => ({
      headerTitle: "",
      headerStyle: {
        height:hp('6%'),
        backgroundColor:"#11598f",
        elevation: null,
      },
    })
  },
  RideCompleteBill:{
    screen:RideCompleteBill,
    navigationOptions:{
      headerShown:false
    }
  },
  ridecompletebill_2:{
    screen:ridecompletebill_2,
    navigationOptions :({navigation}) => ({
      headerTitle: "",
      headerStyle: {
        height:hp('6%'),
        backgroundColor:"#11598f",
        elevation: null,
      },
    })
  },
  Banktransfer_10:{
    screen:Banktransfer_10,
    navigationOptions :({navigation}) => ({
      headerTitle: "",
      headerStyle: {
        height:hp('6%'),
        backgroundColor:"#11598f",
        elevation: null,
      },
    })
  },
  about:{
    screen:about,
    navigationOptions :({navigation}) => ({
      headerTitle: "",
      headerStyle: {
        backgroundColor:"#11598f",
        elevation: null,
      },
    })
  }, 
  legal:{
    screen:legal,
    navigationOptions :({navigation}) => ({
      headerTitle: "",
      headerStyle: {
        backgroundColor:"#11598f",
        elevation: null,
      },
    })
  },
  RideRequest_FInal:{
    screen:RideRequest_FInal,
    navigationOptions:{
    headerShown:false
    }
},
ACCEPTRIDEREQUEST_FINAL:{
  screen:ACCEPTRIDEREQUEST_FINAL,
  navigationOptions:{
  headerShown:false
  }
},
ReachedPickupPoint_Final:{
  screen:ReachedPickupPoint_Final,
  navigationOptions:{
  headerShown:false
  }
},
REACHED_FINAL:{
  screen:REACHED_FINAL,
  navigationOptions:{
  headerShown:false
  }
},
RideCancelBill:{
  screen:RideCancelBill,
  navigationOptions:{
    headerShown:false
    }
}
}, 
{
  headerLayoutPreset:'center'
},
{  
    initialRouteName: "login_phone"  
}
);  

const AppContainer = createAppContainer(AppNavigator);  
export default class App extends Component{
  render() {
    console.disableYellowBox = true;
   return(
    <AppContainer />
    );
  }
}