import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,View  } from 'react-native';
import Welcome from '../Bhariya/screens/Welcome';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInForm from './screens/SignInForm';
import { Button,  NativeBaseProvider } from 'native-base';
import HomePage from './screens/HomePage';
import Registration from './screens/Registration';
import Client from './screens/ClientRequest';
import DriverRequest from './screens/DriverRequest';
import Services from './screens/Services';
import { Avatar, Header, Icon } from '@rneui/themed';
import AboutUs from './screens/AboutUs';
import Kyc from './screens/Kyc';
import UserForm from './screens/UserForm';
import Wallet from './screens/Wallet';
import Check from './Check';
import Map from './screens/Map';




// import { Avatar } from 'react-native-elements';
// import ThemedAvatar from 'react-native-elements/dist/avatar/Avatar';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NativeBaseProvider>
    <NavigationContainer>
    <Stack.Navigator>
   
     
    {/* <Stack.Screen name="Main" component={Welcome} /> */}
    {/* <Stack.Screen name="Details" component={SignInForm} />  */}



     <Stack.Screen name="Dashboard" component={HomePage} options={{
      headerTintColor:"black",
      headerRight:()=>(
          <Avatar
            small
            rounded
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiRne6FGeaSVKarmINpum5kCuJ-pwRiA9ZT6D4_TTnUVACpNbzwJKBMNdiicFDChdFuYA&usqp=CAU',
            }}
            onPress={() => console.log('Left Clicked!')}
           
          />
        
      )
    }}  /> 




     {/* <Stack.Screen name="Registration" component={Registration}/> */}
     {/* <Stack.Screen name="ClientPage" component={Client}/> */}
     {/* <Stack.Screen name="DriverPage" component={DriverRequest}/> */}
     {/* <Stack.Screen name="Services" component={Services}/> */}
     {/* <Stack.Screen name="AboutUs" component={AboutUs}/> */}
     {/* <Stack.Screen name='Wallet' component={Wallet}/> */}
    
    
     
      {/* <Stack.Screen name="Kyc Form" component={Kyc}/>
      <Stack.Screen name="login" component={UserForm} /> */}
      {/* <Stack.Screen name="Check" component={Check} /> */}
      {/* <Stack.Screen name="Map" component={Map} /> */}
      
    
     
    
     </Stack.Navigator>
     </NavigationContainer>
     </NativeBaseProvider>
  );
}
