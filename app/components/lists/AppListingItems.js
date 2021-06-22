import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Items from "./Items";
import AppScreen from "../AppScreen";
import ListItemSeparator from "./ItemSeparatorComponent";

function AppListingItems(props/*{ items, handleRefresh }*/) {
  //const [refreshing, setRefreshing] = useState(false);

  //const navigation = useNavigation();
  return (
    <AppScreen>
      <FlatList
        data={items}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.listingId.toString()}
        ItemSeparatorComponent={ListItemSeparator}
        renderItem={({ item }) => (
          <Items
            imageUri={`.../assets/${item.listingId}.jpeg`}
            title={item.title}
            price={item.price}
            onPress={() =>
              props.navigation.navigate("ListingDetails"/*, {
                ...item,
                imageUri: `http://192.168.1.13:9000/listingImage-${item.listingId}`,
              }*/)
            }
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

const styles = StyleSheet.create({
  container: {},
});

export default AppListingItems;
