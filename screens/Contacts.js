import React, { useEffect,useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, FlatList, ScrollView, AsyncStorage, Pressable } from 'react-native';
import { theme } from '../constants/theme';
import ContactCard from '../constants/ContactCard';
import { useIsFocused } from '@react-navigation/native';


const Item = ({ title, phone }) => (
    <View style={styles.contactCards}>
        <View style={styles.contactImageContainer}>
            <Image
                style={styles.contactImage}
                source={require('../assets/contactImage.png')}
            />
        </View>
        <View style={styles.contactTextContainer}>
            <Text style={styles.contactText}>{title}</Text>
            <Text style={styles.contactphone}>{phone}</Text>
        </View>
        <View style={styles.contactArrowContainer}>
            <Image
                style={styles.contactArrow}
                source={require('../assets/arrow.png')}
            />
        </View>
    </View>

);



const Contacts = (props) => {
    const isFocused = useIsFocused();

    var DATA;


    var payments = [];

    var [cards,addCards] = useState([]);

    const getDataFromJson = async (text) => {
        var value = await AsyncStorage.getItem('data');
        DATA=JSON.parse(value);
        setCardsInContact(text);
    }

    const setCardsInContact = (text) => {
        for (let i = 0; i < DATA.length; i++) {
            if((DATA[i].first).startsWith(text))
            {
                payments.push(
                    <View key={i}>
                        <View>
                            <Pressable style={styles.cardContainer} onPress={() => {
                                props.navigation.navigate('Edit_Contact',{data: i});
                            }}>
                                <Item title={DATA[i].first} phone={DATA[i].phone}></Item>
                            </Pressable>
                        </View>
                    </View>
                )
            }
        }
        addCards(payments);
    }

    useEffect(() => {
        getDataFromJson("");
    },[isFocused]);

    return (
        <View style={styles.contactContainer}>
            <View style={styles.header}>
                <TextInput style={styles.searchField} placeholder='Search Contact' placeholderTextColor={'#CACACA'} onChangeText={text => { getDataFromJson(text) }} />
                <Text style={styles.headerText}>Contacts</Text>
            </View>
            <ScrollView>
                {cards}
            </ScrollView>
            <View style={styles.addButtonContainer} >
                <Pressable style={styles.addButton} onPress={() => {
                    props.navigation.navigate('Add_Contacts');
                }}>
                <Text style={styles.addButtonText} >Add</Text>
                </Pressable>
            </View>
        </View>

        
    )
}

export default Contacts;


const styles = StyleSheet.create({
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: theme.primaryColor,
        height: '40%',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
      },
    
      searchField: {
        backgroundColor: '#282828',
        width: '90%',
        padding: 10,
        placeholder: 'Search Contacts',
        placeholderTextColor: 'white',
        textAlign: 'center',
        borderRadius: 15,
        color: 'theme.backgroundColor',
      },
    
      headerText: {
        color: 'white',
        fontSize: 32,
      },
    
    contactContainer: {
        height: '100%',
    },

    contactCards: {
        backgroundColor: theme.contrastColor,
        padding: 25,
        margin: 15,
        marginBottom: 0,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    contactImageContainer: {
        justifyContent: 'center',
    },

    contactText: {
        color: 'white',
        fontSize: 16,
    },

    contactTextContainer: {
        width: 230,
        justifyContent: 'center',
    },

    contactphone: {
        fontSize: 13,
        color: '#1E1E1E',
    },

    contactImage: {
        width: 30,
        height: 30,
        tintColor: '#5C5C5C',
    },

    contactArrowContainer: {
        justifyContent: 'center',
    },
    contactArrow: {
        width: 15,
        height: 15,
        tintColor: 'white',
    },

    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },

    addButtonContainer: {
        position: 'absolute',
        right: 10,
        bottom: 10,
      },
    
      addButton: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: 100,
      },
    
      addButtonText: {
        color: 'white',
      },
});