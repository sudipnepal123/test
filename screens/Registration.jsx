
import { Formik } from 'formik';
import { Button, CheckIcon, HStack, Radio, ScrollView, Select, Stack, Text } from 'native-base';
import React from 'react';
import { Alert, Dimensions, ImageBackground, TextInput, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import axios from 'axios';

import * as Yup from 'yup';




// import RadioButtonGroup from 'react-native-paper/lib/typescript/components/RadioButton/RadioButtonGroup';
import Client from './ClientRequest';
import data from './data';




const Registration = ({navigation}) => {
//  const formik = useFormik({
//   onSubmit:values=>{
//    console.log("We are in");
//   }
//  })







  return (

<Formik
initialValues = {{firstName: '',lastName:'', email:'',address:'',phoneNumber:'', userName:'',password:'',re_password:'',gender:'',user:''}}
validationSchema= {Yup.object({
  firstName:Yup.string().min(3,({min})=>`first name must be at least ${min} characters`).required('first name is required'),
  lastName:Yup.string().min(3,({min})=>`last name must be at least ${min} characters`).required('last name is required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  address:Yup.string().min(3,({min})=>`address must be at least ${min} characters`).required('address name is required'),
  phoneNumber:Yup.number().min(10,({min})=>`phoneNumber must be at least ${min} characters`).required('phoneNumber name is required'),
  userName:Yup.string().min(8,({min})=>`user name must be at least ${min} characters`).required('user name is required'),
  password: Yup
  .string()
  .min(8, ({ min }) => `Password must be at least ${min} characters`)
  .required('Password is required'),
  re_password: Yup.string().oneOf([Yup.ref('password')], 'Password must match'),
  gender:Yup.string(),
  user:Yup.string()
})}



onSubmit={async(values)=>{try{
 const response= await axios.post("http://10.0.2.2:8000",values)
 console.log(response)
}  catch(error){
  console.log(error.message)
}}}

>
{({
  handleChange,
     handleBlur,
     handleSubmit,
     values,
     errors,
     isValid,
   }) => (
   <ScrollView  style={{flex:1, alignContent:"center"}}>
    <ImageBackground source={require('../screens/Images/truck.jpg')} style={{height:Dimensions.get('window').height}}>

      
    {/* //* Bottom View */}
    
    <View     style={{padding:10}} >
    <View style={{marginBottom:5}}>
    <Text bold style={{color:"#fdd017", fontSize:30,padding:10}}>
               Registration !!!
            </Text>
            <HStack style={{justifyContent:"center", alignItems:"center"}}>
           

               </HStack>
               <View style={{marginTop:"5%"}}>
               <Stack space={3}>
        <TextInput style={{borderWidth:1,justifyContent:"center",alignContent:"center",alignItems:"center",padding:5,borderRadius:15, backgroundColor:"#94e9de"}}
         name="firstName"
         placeholder="First Name"
         onChangeText={handleChange('firstName')}
         onBlur={handleBlur('firstName')}
         value={values.firstName}
         
       />
       {errors.firstName &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.firstName}</Text>
       }
       <TextInput style={{borderWidth:1,justifyContent:"center",alignContent:"center",alignItems:"center",padding:5,borderRadius:15, backgroundColor:"#94e9de"}}
         name="lastName"
         placeholder="Last Name"
         
         onChangeText={handleChange('lastName')}
         onBlur={handleBlur('lastName')}
         value={values.lastName}
         
       />
       {errors.lastName &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.lastName}</Text>
       }
       <TextInput style={{borderWidth:1,justifyContent:"center",alignContent:"center",alignItems:"center",padding:5,borderRadius:15, backgroundColor:"#94e9de"}}
         name="address"
         placeholder="Address"
         
         onChangeText={handleChange('address')}
         onBlur={handleBlur('address')}
         value={values.address}
         
       />
       {errors.lastName &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.address}</Text>
       }
      
      
      
      <RadioButton.Group onValueChange={handleChange('gender')} value={values.gender}>

      <View >
      <Text color={"#94e9de"} fontWeight={"bold"}> Please select gender</Text>
        <HStack>
        <RadioButton value='Male'></RadioButton>
        <Text color={"#94e9de"}>male</Text>
        </HStack>
       </View>
       <View>
       <HStack>
        <RadioButton value='Female'></RadioButton>
        <Text color={"#94e9de"}>female</Text>
        </HStack>
        <HStack>
        <RadioButton value='Others'></RadioButton>
        <Text color={"#94e9de"}>Others</Text>
        </HStack>
       </View>

      </RadioButton.Group>






       <TextInput style={{borderWidth:1,justifyContent:"center",alignContent:"center",alignItems:"center",padding:5,borderRadius:15, backgroundColor:"#94e9de"}}
         name="phoneNumber"
         placeholder="Phone Number"
         
         onChangeText={handleChange('phoneNumber')}
         onBlur={handleBlur('phoneNumber')}
         value={values.phoneNumber}
         
       />
       {errors.phoneNumber &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.phoneNumber}</Text>
       }
    
       
       <TextInput style={{borderWidth:1,justifyContent:"center",alignContent:"center",alignItems:"center",padding:5,borderRadius:15, backgroundColor:"#94e9de"}}
         name="email"
         placeholder="Email Address"
         
         onChangeText={handleChange('email')}
         onBlur={handleBlur('email')}
         value={values.email}
         
       />
       {errors.email &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
       }
       <TextInput style={{borderWidth:1,justifyContent:"center",alignContent:"center",alignItems:"center",padding:5,borderRadius:15, backgroundColor:"#94e9de"}}
         name="userName"
         placeholder="User Name"
         
         onChangeText={handleChange('userName')}
         onBlur={handleBlur('userName')}
         value={values.userName}
        
       />
       {errors.userName &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.userName}</Text>
       }
       <TextInput style={{borderWidth:1,justifyContent:"center",alignContent:"center",alignItems:"center",padding:5,borderRadius:15, backgroundColor:"#94e9de"}}
         name="password"
         placeholder="Password"
         
         onChangeText={handleChange('password')}
         onBlur={handleBlur('password')}
         value={values.password}
         secureTextEntry
       />
       {errors.password &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>
       }
       <TextInput style={{borderWidth:1,justifyContent:"center",alignContent:"center",alignItems:"center",padding:5,borderRadius:15, backgroundColor:"#94e9de"}}
         name="re_password"
         placeholder="Re-Password"
         
         onChangeText={handleChange('re_password')}
         onBlur={handleBlur('re_password')}
         value={values.re_password}
         secureTextEntry
       />
       {errors.re_password &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.re_password}</Text>
       }
      
       <RadioButton.Group onValueChange={handleChange('user')} value={values.user}>

<View >
<Text color={"#94e9de"} fontWeight={"bold"}> Please select user</Text>
  <HStack>
  <RadioButton value='Driver'></RadioButton>
  <Text color={"#94e9de"}>Driver</Text>
  </HStack>
 </View>
 <View>
 <HStack>
  <RadioButton value='Client' color=''></RadioButton>
  <Text color={"#94e9de"}>Client</Text>
  </HStack>
  
 </View>

</RadioButton.Group>
     
      <Button onPress={handleSubmit} disabled={!isValid} >submit</Button>
      </Stack>
     
      </View>
      </View>
     </View>
     </ImageBackground>
     </ScrollView>
   )}



</Formik>
  )
}

export default Registration