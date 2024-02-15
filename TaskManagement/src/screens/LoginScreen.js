import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.test}>
            <Text>This is the Login Screen</Text>
            <Button 
                title={"Log In"}
                style={styles.LogInButton} 
                onPress={() => navigation.navigate('AccountLogin')} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    test: { // testing stylesheet; remove later
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 150,
    },
    LogInButton: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 300,
    },
})

export default LoginScreen;
