import React from 'react';
import { TextInput,View,StyleSheet,Text,Button} from 'react-native';
import Home from './Home';


function Login(){
    return(
        <View style={Styles.container}>
            <Text style={{fontSize:50}}>Welcome</Text>
            <TextInput 
            placeholder='e.g- Ashish'
            style={Styles.nameInput}/>
            <TextInput
            placeholder='Enter Password'
            style={Styles.nameInput}/>
            <Button
            title='Sign Up'
            onPress={()=>alert('This is Button')}/>
        </View>
    )
}
export default Login;
const Styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        
    },
    nameInput:{
        width: 250,
        height: 45,
        padding: 10,
        borderWidth: 2,
        borderColor: 'orange',
        marginVertical: 10,
        marginHorizontal:10,
        borderRadius:50
        
    }
});
