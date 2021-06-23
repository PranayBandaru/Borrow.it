import React, { useState ,Component} from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
//import { Item } from '.../constants/constants';
import Items from "./Items";
import AppScreen from "../AppScreen";
import ListItemSeparator from "./ItemSeparatorComponent";


export default class AppListingItems extends Component {
  
  constructor(props) {
    super(props);
    this.onclick == this.onclick.bind(this);
  }
  
  render(){
  var items = this.props.navigation.state.params.items;
  return (
    <AppScreen>
      <FlatList
        data={items}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.listingId.toString()}
        ItemSeparatorComponent={ListItemSeparator}
        renderItem={({ item }) => (
          <Items
            imageUri={`../../../assets/${item.listingId}.jpeg`}
            title={item.title}
            price={item.price}
            onPress={onclick}
          />
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
  onclick = () =>{
      this.props.navigation.navigate("ListingDetails", {item : item ,imageUri: `../../../assets/${item.listingId}.jpeg`,});
  }

}

const styles = StyleSheet.create({
  container: {},
});

