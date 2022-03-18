import React,{useState} from 'react';
import {View,Text,Button} from 'react-native';

const Hook=()=>{
 const [name,setName]=useState('I am using useState hook');
 const changeName=()=>{
     let val=name;
     if(val==='I am using useState hook'){
        setName('And able to change state');
     }
     else{
        setName('I am using useState hook');
     }
 
 }

 return(
     <View style={{flex:1,
     justifyContent:'center',alignItems:'center'}}>
         <Text style={{fontSize:30}}>{name}</Text>
         <Button title='ok'
         onPress={changeName}/>
     </View>
 )
}
export default Hook;