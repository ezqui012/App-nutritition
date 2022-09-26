import React from "react";
import { TextInput, View, Text,StyleSheet, Button } from "react-native";
const Login = (props) => {
    return (
    <View style={styles.container}>
        <View >
        <Text>
            E-mail
        </Text>
        <TextInput placeholder="" />
        </View>
        <View>
        <Text>
            Contraseña
        </Text>
        <TextInput placeholder="*****" />
        </View>
        <View>
            <Button title="Login"/>
            <Button title="Crear cuenta" onPress={()=>props.navigation.navigate('CreateUser')}/>
        </View>
    </View>
    
    )
    
}
const styles = StyleSheet.create({
    container:{
        padding: 35
    }
})
export default Login;

