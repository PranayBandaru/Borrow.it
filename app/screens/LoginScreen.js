import React, { Component } from 'react';
import { Image, StyleSheet, TextInput, SafeAreaView, Alert } from 'react-native';

import AppButton from '../components/AppButton';
import { StackNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        var usernames = [];
        usernames = ["pranay18539@mechyd.ac.in", "shanmukha18551@mechyd.ac.in", "sailahar18569@mechyd.ac.in", "lalith18526@mechyd.ac.in"];
        this.state = { username: "", password: "", usernames: usernames };
        this.loginPress == this.loginPress.bind(this);
    }

    render() {
        return (
            <SafeAreaView style={styles.window}>
                <Image source={require("../assets/borrowit-logo.png")} />
                <TextInput ref="username" onChangeText={(username) => { this.setState({ username }) }} style={styles.userNameBar} placeholder="Username" />
                <TextInput secureTextEntry={true} ref="password" onChangeText={(password) => { this.setState({ password }) }} style={styles.passwordBar} placeholder="Password" />
                <AppButton title="Login" color="#0c7171" onPress={this.loginPress} />
                <AppButton title="Sign up" color="#0c7171" onPress={() => { this.props.navigation.navigate('Signup') }} />
            </SafeAreaView>
        );
    }

    loginPress = () => {
        if (this.state.username.length != 0 && this.state.password.length != 0) {
            if (this.state.usernames.includes(this.state.username) && this.state.password == "test123") {
                //console.log("Before");
                this.sleep(1000);
                //console.log("AFter");
                this.props.navigation.navigate('Home', { username: this.state.username });
            }
            else {
                Alert.alert("Invalid credentials");
            }
        }
        else {
            Alert.alert("Username or password fields empty");
        }
    }
    sleep = (milliseconds) => {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds) {
                break;
            }
        }
    }
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
        marginBottom: 30,
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
        marginBottom: 20,
        height: 40,
        paddingLeft: 20,
        //borderRadius: 20,
        //borderWidth: 1,
        borderBottomWidth: 2,
        borderBottomColor: "grey",
        //borderColor: "grey",
        backgroundColor: "#fff",
    },
})