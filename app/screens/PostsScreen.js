import React, { Component } from "react";
import AppListingItems from "../components/lists/AppListingItems";
import { Item } from '../constants/constants';
import { StackNavigator } from 'react-navigation';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class PostsScreen extends Component {
    constructor(props) {
        super(props);
        var items = Item;
        this.state = { items: items };
    }
    
    render(){
    
    /*const connectToListing = (socket) => {
      socket.on("listing", (date) => {
        if (date.action === "create") createListing(date.listing);
        if (date.action === "delete") deleteListing(date.listing);
        if (date.action === "update") updateListing(date.listing);
      });
    };
  
    const fetchListings = async () => {
      const { data: items, ok: response } = await listingApi.getListings();
      if (!response) return;
  
      listings = items.slice(0);
      setItems(items);
      setFetched(true);
    };
  
    const createListing = (listing) => {
      listings.unshift(listing);
  
      setItems(() => [...[], ...listings]);
    };
  
    const updateListing = (listing) => {
      let newListings = listings.slice(0);
      newListings.map((obj) => {
        if (obj.listingId === listing.listingId) {
          obj.title = listing.title;
          obj.price = listing.price;
          obj.category = listing.category;
          obj.description = listing.description;
        }
      });
  
      setItems(newListings);
    };
  
    const deleteListing = (listing) => {
      listings = listings.filter(function (obj) {
        return obj.listingId !== listing.listingId;
      });
  
      setItems(() => [...[], ...listings]);
    };*/
    console.log(this.state.items);
    this.props.navigation.navigate('ListingItems', { items: this.state.items });
   
    return <AppListingItems />;
  }
}  





