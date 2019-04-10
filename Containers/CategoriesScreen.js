/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';

import styles from "./Styles/CategoriesScreenStyles";

import NavBar from "../Components/NavBar";

import CategorieRow from "../Components/CategorieRow";

const categoriesData = [
{
  "id": "1",
  "name": "Appetizer"
},
{
  "id": "2",
  "name": "Breakfast & Brunch"
},
{
  "id": "3",
  "name": "Dessert"
},
{
"id": "4",
"name": "Beverages"
},
{
"id": "5",
"name": "Main Dish"
},
{
"id": "6",
"name": "Pasta"
},
{
"id": "7",
"name": "Salad"
},
{
"id": "8",
"name": "Soup"
}
];

export default class CategoriesScreen extends Component {

  static navigationOptions = {
    title: "Categories"
  };
  constructor(props){
    super(props);

  console.log("constructor");
  }
  keyExtractor = (item, index) => item.id;

  renderRow = ({ item }) => {
    return <CategorieRow data={item} />
  };

  renderList = () => {
    return (
      <FlatList
      contentContainertyele={styles.listContent}
      keyExtractor={this.keyExtractor}
      data={categoriesData}
      renderItem={this.renderRow}
      />
      );
  };


  render() {
    console.log("render");

    return (
      <View style={[styles.mainScreen]}>
      <NavBar leftButton={false} title="Categories" />

    <View style={styles.container}>{this.renderList()}</View>
    </View>

    );
  }
}
