import React, { useEffect, useState } from 'react'
import { View, Button, 
TextInput, Alert, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import firebase from '../database/firebase';
const UserDetail = (props) => {
  const initialState = {
    id: '',
    name: '',
    email: '',
    phone: ''
  }
  const [user, setUser] = useState();
  const [loading, setloading] = useState(true);
  
  const userId = props.route.params.userId;
  const getUserById = async (id) => {
    const dbRef = firebase.db.collection('users').doc(id)
    const doc = await dbRef.get();
    const user = doc.data();
    setUser({
      ...user,
      id: doc.id
    })
    setloading(false);
  }

  useEffect(() => {
    getUserById(userId)
  }, [])
  const handleChangeInput = (name, value) => {
  
    setUser({ ...user, [name]: value })
  }
  
  const updateUser = async () =>{
     const dbRef = firebase.db.collection('users').doc(userId);
     await dbRef.set({
      name: user.name,
      email: user.email,
      phone: user.phone
     })
     setUser(initialState);
     props.navigation.navigate('UsersList');

  } 

  const deleteUser = async ()=>{
    const dbRef = firebase.db.collection('users').doc(userId);
    await dbRef.delete();
    props.navigation.navigate('UsersList')
  }
  const confirmAlert = ()=>{
    Alert.alert('Eliminarás el usuario', 'estás seguro?'),[
      {text: 'Si', onPress: ()=> deleteUser()},
      {text: 'No', onPress: ()=> console.log(false)},
      
    ]
  }

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#9e9e9e" />
      </View>
    )
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput
          value={user.name}
          placeholder="Nombre de usuario"
          onChangeText={(value) => handleChangeInput('name', value)} />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          value={user.email}
          placeholder="Correo"
          onChangeText={(value) => handleChangeInput('email', value)} />
      </View >
      <View style={styles.inputGroup}>
        <TextInput
          value={user.phone}
          placeholder="Teléfono"
          onChangeText={(value) => handleChangeInput('phone', value)} />
      </View>
      <View >
        <Button
          color="#19AC62"
          title="Actualizar" onPress={() => updateUser()}></Button>
      </View>
      <View >
        <Button
          color="#E37399"
          title="Eliminar" onPress={() => confirmAlert()}></Button>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  }
})
export default UserDetail;