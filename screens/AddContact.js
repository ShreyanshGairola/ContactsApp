import React, { useEffect } from "react";
import { StyleSheet, Text, TextInput, View, Image, FlatList, ScrollView, Pressable, AsyncStorage } from 'react-native';
import { theme } from '../constants/theme';
import data from '../data/data.json';




let firstName = "";
let lastName = "";
let PhoneNumber = "";


const AddContacts = (props) => {

    const addContactToJSON = async () => {

        //Get Data from asyncStorage and add newly added Data to dataset then update asyncstorage with that

        var value = await AsyncStorage.getItem('data');

        var DATANEW = JSON.parse(value);

        DATANEW.push({
            first: firstName,
            last: lastName,
            phone: PhoneNumber,
        });

        AsyncStorage.setItem("data", JSON.stringify(DATANEW));

        props.navigation.navigate('Contacts');
    }    
    
    const goBackToContacts = () => {
        props.navigation.navigate('Contacts');
    }


    useEffect(() => {
        firstName = "";
        lastName = "";
        PhoneNumber = "";
    }, []);

    return (
        <View style={styles.contactFieldsContainer}>
            <View>
                <View style={styles.header}>
                    <Pressable style={styles.backContainer} onPress={() => { goBackToContacts() }}>
                        <Text style={styles.backText}>Back</Text>
                    </Pressable>
                    <Text style={styles.headerText}>Add Contacts</Text>
                </View>
                <TextInput style={styles.contactsField} placeholder="Enter First Name" placeholderTextColor={'#646464'} onChangeText={text => { firstName = text }}></TextInput>
                <TextInput style={styles.contactsField} placeholder="Enter Last Name" placeholderTextColor={'#646464'} onChangeText={text => { lastName = text }}></TextInput>
                <TextInput style={styles.contactsField} placeholder="Enter Phone Number" placeholderTextColor={'#646464'} onChangeText={text => { PhoneNumber = text }}></TextInput>
                <View style={styles.addButtonContainer}>
                    <Pressable style={styles.addButton} onPress={() => { addContactToJSON() }}>
                        <Text style={styles.addButtonText} >Add
                        </Text>
                    </Pressable>
                </View>
            </View>

        </View>
    );

}

export default AddContacts;

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
