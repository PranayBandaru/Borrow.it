import React , {Component} from "react";
import {Image, View, StyleSheet, FlatList,TouchableOpacity } from "react-native";

import AppScreen from "../components/AppScreen";
import AppListInfo from "../components/lists/AppListInfo";
import Items from "../components/lists/Items";
import colors from "../config/colors";
import AppText from "../components/AppText";
import ListItemSeparator from "../components/lists/ItemSeparatorComponent";

export default class ListingDetailsScreen extends Component {
  

  render(props){  
  var item = this.props.navigation.state.params.item;
  var imageUri = this.props.navigation.state.params.imageUri;
  return (
    <AppScreen>
      <TouchableOpacity /*onPress={this.onclick} disabled={this.state.disabled}*/>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image source={{ uri: imageUri }} style={styles.image} />
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{item.title}</AppText>
            <AppText style={styles.price}>{"$" + item.price}</AppText>
          </View>
        </View>
      </View>
    </TouchableOpacity><AppListInfo
        image={require("../assets/logo-red.png")}
        title="Pranay"
        subTitle="6 Listings"
      />
    </AppScreen>
  );
}
  /*onclick = () => {
    navigation.navigate("ListingImage", { image: imageUri })
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


