import React,{useState} from 'react';
import {View,Text,Button} from 'react-native';

function Count(){
    const [count,setCount]=useState(0);
    return(
        <View style={{flex:1}}>
             <Button title='Click me'
            onPress={()=>setCount(count-1)}/>
            <Text>Clicked{count}times</Text>
            <Button title='Click me'
            onPress={()=>setCount(count+1)}/>
        </View>
    )
}
export default Count;