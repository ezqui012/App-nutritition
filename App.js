import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CreateUser from './screens/CreateUser';
import UserDetail from './screens/UserDetail';
import UsersList from './screens/UsersList';


const stack = createStackNavigator();

function MyStack() {
  return (
    <stack.Navigator>


      <stack.Screen name="UsersList"
        component={UsersList}
        options={{ title: 'Lista de usuarios' }} />
      <stack.Screen name="CreateUser"
        component={CreateUser}
        options={{ tittle: 'Crear usuario' }} />
      <stack.Screen name="UserDetail"
        component={UserDetail}
        options={{ tittle: 'Detalles del usuario' }} />
    </stack.Navigator>
  )
}
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
