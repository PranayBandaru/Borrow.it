import React from 'react';
import { Image, StyleSheet, TextInput, Button, View, Text, SafeAreaView, TouchableOpacity } from 'react-native';

import AppScreen from "../components/AppScreen";
import AppListInfo from "../components/lists/AppListInfo";
import ListItemSeparator from "../components/lists/ItemSeparatorComponent";
import colors from "../config/colors";


/*const menuItems = [
    {
      title: "My Listings",
      icon: { name: "format-list-bulleted", backgroundColor: colors.primary },
      targeScreen: "MyListings",
    },
    {
      title: "My Messages",
      icon: { name: "email", backgroundColor: colors.secondary },
      targeScreen: "Messages",
    },
  ];
 */ 
function AccountScreen(props) {
    
    
    return (
        <AppScreen style={{ backgroundColor: colors.light }}>
        <View style={styles.container}>
          <AppListInfo
            image={require("../assets/jacket.jpg")}
            title="Shane"
            subTitle="Shane@gg"
            style={{ borderRadius: 25 }}
            disabled={true}
          />
        </View>
        <View style={styles.myBorrowed}>
          <AppListInfo
            image={require("../assets/jacket.jpg")}
            title="Shane"
            style={{ borderRadius: 25, height:250, marginBottom:90, alignItems:"flex-start"}}
            disabled={true}
          />
        </View>
        <View style={[styles.container, { justifyContent: "flex-end" }]}>
        <AppListInfo
          title="My History"
          iconType="logout"
          iconBackground="#ffe66d"
          iconColor={colors.white}
          //onPress={handleLogout}
          style={{ borderRadius: 35 }}
          touchable={true}
        />
        </View>
        <View style={[styles.container, { justifyContent: "flex-end"}]}>
        <AppListInfo
          title="Logout"
          iconType="logout"
          iconBackground="#ffe66d"
          iconColor={colors.white}
          //onPress={handleLogout}
          style={{ borderRadius: 35 }}
          touchable={true}
        />
        </View>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        shadowColor: colors.light,
        shadowOffset: {
          width: 1,
          height: 2,
        },
        shadowOpacity: 1,
    shadowRadius: 2,
  },
  myBorrowed:{
    padding: 10,
    shadowColor: colors.light,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 1,
shadowRadius: 2,
  }
})
export default AccountScreen;