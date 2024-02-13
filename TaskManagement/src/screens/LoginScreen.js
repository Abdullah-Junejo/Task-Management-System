import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.test}>
            <Text>This is the Login Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    test: { // testing stylesheet; remove later
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 150,
    },
})

export default LoginScreen;
