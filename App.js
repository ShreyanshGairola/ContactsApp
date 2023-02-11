import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, FlatList, Button, Pressable, AsyncStorage } from 'react-native';
import Contacts from './screens/Contacts';
import AddContact from './screens/AddContact';
import EditContact from './screens/EditContact';
import { theme } from './constants/theme';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

var DATA = [
  {
    "first": "Shreyansh",
    "last": "Gairola",
    "phone": "1231231231",
  },
  {
    "first": "Demo1",
    "last": "Demo",
    "phone": "1231231231",
  },
];

AsyncStorage.setItem("data", JSON.stringify(DATA));

const Stack = createNativeStackNavigator();

export default function App() {

  useEffect(() => {

  });

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.content}>
        <NavigationContainer >
          <Stack.Navigator initialRouteName="Contacts">
            <Stack.Screen
              name="Contacts"
              component={Contacts}
              options={{headerShown: false }}
            />
            <Stack.Screen
              name="Add_Contacts"
              component={AddContact}
              options={{headerShown: false }}
            />
            <Stack.Screen
              name="Edit_Contact"
              component={EditContact}
              options={{headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.backgroundColor,
  },

  content: {
    height: '100%',
  },

 

});