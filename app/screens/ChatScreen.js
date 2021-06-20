import React from 'react';
import { Image, StyleSheet, TextInput, Button, View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
function ChatScreen(props) {
    return (
        <View style={styles.container}>
            <FlatList />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
export default ChatScreen;