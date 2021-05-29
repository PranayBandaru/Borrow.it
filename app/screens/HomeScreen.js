import React from 'react';
import { Image, StyleSheet, TextInput, View, Text} from 'react-native';

function HomeScreen(props) {
    return (

            <View style={styles.Bottombar}>
                <Image style={styles.logo} source={require("../assets/favicon.png")}/>
                <Text style={styles.orgName}>Mahindra University</Text>
                <TextInput style={styles.searchBar} placeholder="Search"/>
                <View style={styles.taskBar}>
                    <Image style={styles.homeIcon} source={require("../assets/home.png")}/>
                    <Image style={styles.chatsIcon} source={require("../assets/chats.png")}/>
                    <Image style={styles.postIcon} source={require("../assets/post.png")}/>
                    <Image style={styles.myPostsIcon} source={require("../assets/my_posts.png")}/>
                    <Image style={styles.accountIcon} source={require("../assets/account.png")}/>

                </View>
            </View>    
    );
}

const styles = StyleSheet.create({
    Bottombar: {
        flex : 1,
        justifyContent:'flex-end',
    },
    taskBar: {
        width:'100%',
        height:70,
        backgroundColor:"#0c7171"
    },
    postView: {
        width:'20%',
        height:90,
        position:"absolute",
        left:200,
        backgroundColor:"#0c7171"
    },

    logo:{
        position:'absolute',
        top:50,
        left:25,
    },
    orgName:{
        position:"absolute",
        top:58,
        left:85,
        fontSize:25,
        fontWeight:"bold",
    },
    searchBar:{
        width:'85%',
        height: 60,
        position:'absolute',
        top:125,
        left:25,
        borderRadius:5,
        borderWidth:1,
        backgroundColor:"#fff",
    },
    homeIcon: {
        position:'absolute',
        height:35,
        width:35,
        top:17,
        left:20,
    },
    chatsIcon: {
        position:'absolute',
        height:35,
        width:35,
        top:17,
        left:100,
    },
    postIcon: {
        position:'absolute',
        height:50,
        width:50,
        top:10,
        left:170,
    },
    myPostsIcon: {
        position:'absolute',
        height:35,
        width:35,
        top:17,
        left:260,
    },
    accountIcon: {
        position:'absolute',
        height:35,
        width:35,
        top:17,
        left:335,
    },
})


export default HomeScreen;