import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';


// Tipo do Icone***
const IconLabel = ({ name, label, color }) => {
    return (
        <View style={styles.container}>
            <Icon
                name={name}
                type="ionicon"
                size={20}
                color={color}
                style={styles.iconStyle}
            />
            <Text style={styles.labelStyle}>{label}</Text>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginRight: 10,
        alignItems: 'center',
    },
    labelStyle: {
        fontSize: 13,
    },
    iconStyle: {
        marginRight: 2
    },
});

export default IconLabel;