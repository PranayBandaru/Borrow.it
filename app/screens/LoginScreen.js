import React from 'react';
import { Image, StyleSheet, TextInput,Button, View, Text, SafeAreaView, TouchableOpacity } from 'react-native';

function LoginScreen(props) {
    return (
        <SafeAreaView style={styles.window}>
            <TextInput style={styles.userNameBar} placeholder="Username" />
            <TextInput secureTextEntry={true} style={styles.passwordBar} placeholder="Password" />
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.text}>{title}</Text>
            </Pressable>
            <Button title="Login" width="60" onPress={() => {alert("You clicked for login")}} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    window: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
    userNameBar: {
        width: '60%',
        //position: "absolute",
        //top: 95,
        height: 40,
        paddingLeft: 20,
        marginBottom:30,
        //borderRadius: 20,
        //borderWidth: 1,
        borderBottomWidth: 2,
        borderBottomColor: "grey",
        //borderColor: "grey",
        backgroundColor: "#fff",
    },
    passwordBar: {
        width: '60%',
        //position: "absolute",
        //top: 95,
        marginBottom:30,
        height: 40,
        paddingLeft: 20,
        //borderRadius: 20,
        //borderWidth: 1,
        borderBottomWidth: 2,
        borderBottomColor: "grey",
        //borderColor: "grey",
        backgroundColor: "#fff",
    },
    loginButton: {
        width: 50,
    }
})
export default LoginScreen;