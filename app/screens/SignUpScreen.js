import React from 'react';
import { Image, StyleSheet, TextInput, Button, View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

function SignUpScreen(props) {
    var username;
    return (
        <SafeAreaView style={styles.window}>
            <Text style={styles.pageHeader}>Sign Up</Text>
            <Text style={styles.labels}>First Name</Text>
            <TextInput style={styles.userinputs} placeholder="FirstName" />
            <Text style={styles.labels}>Last Name</Text>
            <TextInput style={styles.userinputs} placeholder="LastName" />
            <Text style={styles.labels} type="number">Phone Number</Text>
            <TextInput style={styles.userinputs} placeholder="Phone Number" />
            <Text style={styles.labels}>Email</Text>
            <TextInput style={styles.userinputs} placeholder="Email" onChangeText={(usernameimput) => { username = usernameimput }} />
            <Text style={styles.labels}>Password</Text>
            <TextInput secureTextEntry={true} style={styles.userinputs} placeholder="Password" />
            <Text style={styles.labels}>Re-Type Password</Text>
            <TextInput secureTextEntry={true} style={styles.userinputs} placeholder="Re-Password" />
            <TouchableOpacity style={styles.buttonContainer} onPress={() => { props.navigation.navigate('Home', { username: username }) }}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
}

export default SignUpScreen;
const styles = StyleSheet.create({
    window: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
    labels: {
        paddingBottom: 3,
    },
    userinputs: {
        width: '60%',
        height: 40,
        paddingLeft: 20,
        marginBottom: 26,
        borderWidth: 1,
        borderRadius: 20,
        borderBottomWidth: 2,
        borderBottomColor: "grey",
        backgroundColor: "#fff",
    },
    buttonContainer: {
        width: "60%",
        height: 50,
        marginTop: 35,
        alignItems: "center",
        padding: 15,
        borderRadius: 25,
        backgroundColor: "#0c7171"
    },
    buttonText: {
        color: "white",
        textTransform: "uppercase",
        fontWeight: "200",
        letterSpacing: 3,
    },
    pageHeader: {
        color: "#0c7171",
        fontSize: 23,
        paddingBottom: 40,
        textTransform: "uppercase",
    }
})