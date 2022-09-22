import React, { useState } from 'react'
import {View,  Button, TextInput, ScrollView, StyleSheet} from 'react-native';
import firebase from '../database/firebase';
 const CreateUser = (props) => {
  const [state, setState] = useState({
    name:'',
    email:'',
    phone:''
  })
  const handleChangeInput = (name,value)=>{
    setState({...state, [name]:value})
  }
  const saveNewUser = async () =>{
    if(state.name === ''){
        alert('ingrese su nombre'); 
    }else{
        try {
            await firebase.db.collection('users').add({
                name: state.name,
                email: state.email,
                phone: state.phone
            })
            props.navigation.navigate('UsersList')
        } catch (error) {
            console.log(error);
        }
    }
  }
  return (
    <ScrollView style={styles.container}> 
        <View style={styles.inputGroup}>
            <TextInput placeholder="Nombre de usuario" 
            onChangeText={(value)=>handleChangeInput('name', value)}/>
        </View>
        <View style={styles.inputGroup}>
            <TextInput placeholder="Correo"
            onChangeText={(value)=>handleChangeInput('email', value)}/>
        </View >
        <View style={styles.inputGroup}>
            <TextInput placeholder="Teléfono"
            onChangeText={(value)=>handleChangeInput('phone', value)}/>
        </View>
        <View >
            <Button title="Guardar" onPress={()=>saveNewUser()}></Button>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 35,

    },
    inputGroup:{
        flex:1,
        padding:0,
        marginBottom: 15,
        borderBottomWidth:1,
        borderBottomColor: '#cccccc'
    }
})
export default CreateUser;