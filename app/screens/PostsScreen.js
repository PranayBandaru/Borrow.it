import React, { Component } from "react";
import AppListingItems from "../components/lists/AppListingItems";
import { Item } from '../constants/constants';
import { StackNavigator } from 'react-navigation';
import {Image, View, StyleSheet, FlatList,TouchableOpacity } from "react-native";
import AppScreen from "../components/AppScreen";
import colors from "../config/colors";
import AppText from "../components/AppText";
import ListItemSeparator from "../components/lists/ItemSeparatorComponent";


export default class PostsScreen extends Component {
  constructor(props) {
    super(props);
    var items = Item;
    var disabled = false;
    this.state = { items: items, disabled: disabled };
    //this.onclick == this.onclick.bind(this);

  }

  render() {

    return (
      <AppScreen>
        <FlatList
          data={this.state.items}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.listingId.toString()}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => {
              this.props.navigation.navigate("ListingDetails", { item : item, imageUri: `../assets/${item.listingId}.jpeg`, });
            }} disabled={this.state.disabled}>
              <View style={styles.container}>
               <View style={styles.card}>
                <Image source={{ uri: `../../assets/${item.listingId}.jpeg`}} style={styles.image} />
                  <View style={styles.detailsContainer}>
                  <AppText style={styles.title}>{item.title}</AppText>
                  <AppText style={styles.price}>{"$" + item.price}</AppText>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
  
            /* <Items
              imageUri={`../../assets/${item.listingId}.jpeg`}
              title={item.title}
              price={item.price}
              onPress={() => {
                this.props.navigation.navigate("ListingDetails");
              }}
            />*/
          )}
          />
        </AppScreen>
      );
    }
   /* onclick = () => {
      this.props.navigation.navigate("ListingDetails"/*, { item : item, imageUri: `../assets/${item.listingId}.jpeg`, });
    }*/
  
  }

  const styles = StyleSheet.create({
    container: {
      shadowColor: colors.light,
      shadowOffset: {
        width: 3,
        height: 3,
      },
      shadowOpacity: 1,
      shadowRadius: 3,
      padding: 15,
      paddingVertical: 5,
    },
    card: {
      borderRadius: 20,
      backgroundColor: colors.white,
      marginBottom: 20,
      overflow: "hidden",
    },
    image: {
      width: "100%",
      height: 200,
    },
    detailsContainer: {
      padding: 20,
    },
    title: {
      marginBottom: 7,
    },
    price: {
      color: colors.secondary,
      fontWeight: "bold",
    },
  });
  




