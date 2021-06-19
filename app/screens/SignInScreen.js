import React from 'react';
import { Image, StyleSheet, TextInput,Button, View, Text, SafeAreaView, TouchableOpacity } from 'react-native';


function SignInScreen(props) {
    return (
        <SafeAreaView style={styles.window}>
            <Text style={styles.pageHeader}>Sign Up</Text>
            <Text style={styles.labels}>First Name</Text>
            <TextInput style={styles.userinputs} placeholder="FirstName" />
            <Text style={styles.labels}>Last Name</Text>
            <TextInput style={styles.userinputs} placeholder="LastName" />
            <Text style={styles.labels}>Email</Text>
            <TextInput style={styles.userinputs} placeholder="Email" />
            <Text style={styles.labels}>Password</Text>
            <TextInput secureTextEntry={true} style={styles.userinputs} placeholder="Password" />
            <Text style={styles.labels}>Re-Type Password</Text>
            <TextInput secureTextEntry={true} style={styles.userinputs} placeholder="Re-Password" />
            <TouchableOpacity style={styles.buttonContainer} onPress={() => {alert("You clicked for login")}}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
}

export default SignInScreen;
const styles = StyleSheet.create({
    window: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
    labels:{
        paddingBottom:10,
    },
    userinputs: {
        width: '60%',
        height: 40,
        paddingLeft: 20,
        marginBottom:30,
        borderWidth: 1,
        borderRadius: 20,
        borderBottomWidth: 2,
        borderBottomColor: "grey",
        backgroundColor: "#fff",
    },
    buttonContainer: {
        width: "60%",
        height: 50,
        marginTop:20,
        alignItems:"center",
        padding: 15,
        borderRadius: 25,
        backgroundColor:"#0c7171"
      },
      buttonText: {
        color: "white",
        textTransform: "uppercase",
        fontWeight: "bold",
      },
      pageHeader:{
          color: "#0c7171",
          fontSize:25,
          paddingBottom:30,
          textTransform: "uppercase",
          fontWeight: "bold",
      }    
})