import React, { useState, Component } from "react";
import {Image, View, StyleSheet, FlatList,TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Item } from '../../constants/constants';
import Items from "./Items";
import AppScreen from "../AppScreen";
import colors from "../../config/colors";
import AppText from "../AppText";
import ListItemSeparator from "./ItemSeparatorComponent";


export default class AppListingItems extends Component {

  constructor(props) {
    super(props);
    var items = Item;
    var check = "Checking"
    var disabled = false
    this.state = { items: items, check: check, disabled: disabled };

    this.onclick == this.onclick.bind(this);
  }
  
  render(){
  //var items = this.props.navigation.state.params.items;
  return (
    <AppScreen>
      <FlatList
        data={this.state.items}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.listingId.toString()}
        ItemSeparatorComponent={ListItemSeparator}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={this.onclick} disabled={this.state.disabled}>
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
        /*refreshing={refreshing}
        onRefresh={() => {
          setRefreshing(true);
          handleRefresh();
          setRefreshing(false);
        }}*/
        />
      </AppScreen>
    );
  }
  onclick = () => {
    this.props.navigation.navigate("ListingDetails"/*, { item : item, imageUri: `../assets/${item.listingId}.jpeg`, }*/);
  }
  /*, { check: this.state.check/*item : item, imageUri: `../assets/${item.listingId}.jpeg` }*/

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



