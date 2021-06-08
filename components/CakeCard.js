import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import IconLabel from './IconLabel';

const CakeCard = ({ info }) => {

    const { name, desc, money, time, like, image } = info;

    return (
        <View style={styles.cardContainer}>
            <View style={styles.cardContainer}>
                <Image
                    style={styles.imageStyle}
                    source={image} />

                <View style={styles.infoStyle}>
                    <Text style={styles.titleStyle}>{name}</Text>
                    <Text style={styles.categoryStyle}>{desc}</Text>

                    <View style={styles.IconLabelStyle}>
                        <IconLabel name="wallet-outline" label={money} color='#2ea946' />
                        <IconLabel name="alarm-outline" label={time} color='#2ea946' />
                        <IconLabel name="thumbs-up-outline" label={like} color='#2ea946' />
                    </View>
                </View>
            </View>
        </View>
    );
};



// primeiro card ****

const deviceWidth = Math.round(Dimensions.get('window').width);
const offset = 40;
const radius = 10;
const styles = StyleSheet.create({

    container: {
        width: deviceWidth - 20,
        alignItems: 'center',


    },

    cardContainer: {
        width: deviceWidth - 40,
        backgroundColor: '#f5c9c9',
        height: 230,
        borderRadius: 30,
        borderTopLeftRadius: 30,
        marginLeft: 10,
        marginRight: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.75,
        shadowRadius: 5,
        elevation: 9,
        marginVertical: 20,
    },
    imageStyle: {
        height: 130,
        width: deviceWidth - 38,
        borderTopLeftRadius: 38,
        borderTopRightRadius: 38,
        opacity: 1,
        alignContent: 'center',
        alignSelf: 'center',
        marginVertical: - 20,
    },
    titleStyle: {
        fontSize: 20,
        fontWeight: '800',
        marginTop: 20
    },
    categoryStyle: {
        fontWeight: '200',
    },
    infoStyle: {
        marginHorizontal: 10,
        marginVertical: 5,
    },
    //posição do icone
    IconLabelStyle: {
        flexDirection: 'row',
        marginTop: 13,
    },

});

export default CakeCard;