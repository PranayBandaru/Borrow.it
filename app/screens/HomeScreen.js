import React from 'react';
import { Image, StyleSheet, TextInput, View, Text, SafeAreaView, TouchableOpacity } from 'react-native';

function HomeScreen(props) {
    return (
        <SafeAreaView style={styles.window}>
            <View style={styles.topstrip}>
                <Image style={styles.logo} source={require("../assets/organisation.png")} />
                <Text numberOfLines={1} style={styles.orgName}>Mahindra University</Text>
            </View>
            <Text style={styles.browseCategoriesText}>Browse categories</Text>
            <View style={styles.categories}>
                <View style={styles.catRow}>
                    <View style={styles.catIcons}>
                        <TouchableOpacity onPress={() => { alert("you clicked me") }}>
                            <Image style={styles.catIcons} source={require("../assets/sports.png")} />
                        </TouchableOpacity>

                        <Text style={styles.categoriesText}>Sports goods</Text>
                    </View>
                    <View style={styles.catIcons} >
                        <TouchableOpacity onPress={() => { alert("you clicked me") }}>
                            <Image style={styles.catIcons} source={require("../assets/music_instruments.png")} />
                        </TouchableOpacity>
                        <Text style={styles.categoriesText}>Music Supplies</Text>
                    </View>
                    <View style={styles.catIcons}>
                        <TouchableOpacity onPress={() => { alert("you clicked me") }}>
                            <Image style={styles.catIcons} source={require("../assets/books.png")} />
                        </TouchableOpacity>
                        <Text style={styles.categoriesText}>Books</Text>
                    </View>
                    <View style={styles.catIcons}>
                        <TouchableOpacity onPress={() => { alert("you clicked me") }}>
                            <Image style={styles.catIcons} source={require("../assets/stationery.png")} />
                        </TouchableOpacity>
                        <Text style={styles.categoriesText}>Stationery</Text>
                    </View>
                </View>

                <View style={styles.catRow}>
                    <View style={styles.catIcons}>
                        <TouchableOpacity onPress={() => { alert("you clicked me") }}>
                            <Image style={styles.catIcons} source={require("../assets/electronic_devices.png")} />
                        </TouchableOpacity>

                        <Text style={styles.categoriesText}>Electronic Devices</Text>
                    </View>
                    <View style={styles.catIcons} >
                        <TouchableOpacity onPress={() => { alert("you clicked me") }}>
                            <Image style={styles.catIcons} source={require("../assets/suits.png")} />
                        </TouchableOpacity>
                        <Text style={styles.categoriesText}>Clothing</Text>
                    </View>
                    <View style={styles.catIcons}>
                        <TouchableOpacity onPress={() => { alert("you clicked me") }}>
                            <Image style={styles.catIcons} source={require("../assets/umbrella.png")} />
                        </TouchableOpacity>
                        <Text style={styles.categoriesText}>Accessories</Text>
                    </View>
                    <View style={styles.catIcons}>
                        <TouchableOpacity onPress={() => { alert("you clicked me") }}>
                            <Image style={styles.catIcons} source={require("../assets/other.png")} />
                        </TouchableOpacity>
                        <Text style={styles.categoriesText}>Others</Text>
                    </View>
                </View>

            </View>
            <TextInput style={styles.searchBar} placeholder="Search" />
            <View style={styles.taskBar}>
                <TouchableOpacity onPress={() => { alert("you clicked me") }}>
                    <Image style={styles.homeIcon} source={require("../assets/home.png")} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { alert("you clicked me") }}>
                    <Image style={styles.chatsIcon} source={require("../assets/chats.png")} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { alert("you clicked me") }}>
                    <Image style={styles.postIcon} source={require("../assets/post.png")} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { alert("you clicked me") }}>
                    <Image style={styles.myPostsIcon} source={require("../assets/my_posts.png")} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { alert("you clicked me") }}>
                    <Image style={styles.accountIcon} source={require("../assets/account.png")} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    accountIcon: {
        height: 26,
        width: 26,
        marginBottom: 8
    },
    catIcons: {
        height: 53,
        width: 55,
        marginTop: 22
    },
    catRow: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: "space-around",
        marginBottom: 40,
        paddingHorizontal: 20
    },
    categories: {
        flex: 1,
        position: "absolute",
        top: 150,
    },
    categoriesText: {
        fontSize: 10,
        textAlign: "center"
    },
    browseCategoriesText: {
        position: "absolute",
        top: 150,
        color: "grey",
        left: 32
    },
    window: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    topstrip: {
        justifyContent: "flex-start",
        alignItems: "baseline",
        flexDirection: "row",
        position: "absolute",
        paddingTop: 10,
        top: 30,
        left: 20
    },
    taskBar: {
        backgroundColor: "#0c7171",
        width: "100%",
        height: 65,
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-around",
        paddingBottom: 10
    },
    postView: {
        width: '20%',
        height: 90,
        position: "absolute",
        left: 200,
        backgroundColor: "#0c7171"
    },
    logo: {
        width: 35,
        height: 35
    },
    orgName: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 10,
        width: "70%"
    },
    searchBar: {
        width: '92%',
        position: "absolute",
        top: 95,
        height: 40,
        paddingLeft: 20,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "grey",
        backgroundColor: "#fff",
    },
    homeIcon: {
        height: 26,
        width: 26,
        marginBottom: 8
    },
    chatsIcon: {
        height: 26,
        width: 26,
        marginBottom: 8
    },
    postIcon: {
        height: 55,
        width: 55,
        marginBottom: -5
    },
    myPostsIcon: {
        height: 26,
        width: 26,
        marginBottom: 8
    },
})


export default HomeScreen;