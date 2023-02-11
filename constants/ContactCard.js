import React, { useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Image, FlatList, ScrollView } from 'react-native';
import { theme } from '../constants/theme';

const ContactCard = () => {
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
}

export default ContactCard;


const styles = StyleSheet.create({

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
});