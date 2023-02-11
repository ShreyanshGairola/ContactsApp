import React, { useState,useEffect } from "react";
import { StyleSheet, Text, TextInput, View, Image, FlatList, ScrollView, Pressable, AsyncStorage } from 'react-native';
import { theme } from '../constants/theme';


let firstName;
let lastName;
let PhoneNumber;



const EditContact = (props) => {
    var [prefirstName,setPreFirstName] = useState();
    var [preLastName,setPreLastName] = useState();
    var [prePhoneName,setPrePhoneName] = useState();

    var selected = props.route.params.data;
    var DATANEW;

    const setPreExistingData = async () => {
        var value = await AsyncStorage.getItem('data');

        var DATANEW = JSON.parse(value);

        setPreFirstName(DATANEW[selected].first);
        setPreLastName(DATANEW[selected].last);
        setPrePhoneName(DATANEW[selected].phone);
    }

    const goBackToContacts = () => {
        props.navigation.navigate('Contacts');
    }

    const updateContactToJSON = async () => {
        var value = await AsyncStorage.getItem('data');

        var DATANEW = JSON.parse(value);

        if(firstName)
        {
            DATANEW[selected].first = firstName;
        }
        else if(lastName){
            DATANEW[selected].last = lastName;
        }
        else if(PhoneNumber){
            DATANEW[selected].phone = PhoneNumber;
        }
        AsyncStorage.setItem("data",JSON.stringify(DATANEW));
    
            // console.log(DATANEW);
            // delete DATANEW[selected]
            // console.log(DATANEW);

        props.navigation.navigate('Contacts');
    }

    useEffect(()=>{
        setPreExistingData();
    },[]);

    return (
        <View style={styles.contactContainer}>
            <View style={styles.header}>
                <Pressable style={styles.backContainer} onPress={() => { goBackToContacts() }}>
                    <Text style={styles.backText}>Back</Text>
                </Pressable>
                <Text style={styles.headerText}>Edit Contact</Text>
            </View>
            <TextInput style={styles.contactsField} placeholder={prefirstName} placeholderTextColor={'#646464'} onChangeText={text => { firstName = text }}></TextInput>
            <TextInput style={styles.contactsField} placeholder={preLastName} placeholderTextColor={'#646464'} onChangeText={text => { lastName = text }}></TextInput>
            <TextInput style={styles.contactsField} placeholder={prePhoneName} placeholderTextColor={'#646464'} onChangeText={text => { PhoneNumber = text }}></TextInput>
            <View style={styles.addButtonContainer}>
                <Pressable style={styles.addButton} onPress={() => { updateContactToJSON() }}>
                    <Text style={styles.addButtonText} >Update
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

export default EditContact;

const styles = StyleSheet.create({
    backContainer: {
        position: 'absolute',
        left: 20,
        top: 30,
        width: 100,
        height: 100,
    },
    backText: {
        color: 'white',
    },

    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: theme.primaryColor,
        height: '40%',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
    },
    headerText: {
        color: 'white',
        fontSize: 32,
    },

    contactFieldsContainer: {
        height: '100%',
    },

    contactsField: {
        backgroundColor: theme.contrastColor,
        padding: 25,
        margin: 20,
        borderRadius: 15,
    },

    addButtonContainer: {
        alignItems: 'center',
    },

    addButton: {
        backgroundColor: theme.primaryColor,
        padding: 20,
        width: '30%',
        borderRadius: 15,
        alignItems: 'center',
    },

    addButtonText: {
        color: 'white',
    }
});