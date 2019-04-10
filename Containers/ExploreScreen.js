/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, StyleSheet, View, FlatList } from 'react-native';

import styles from "./Styles/GenericScreenStyles";


import NavBar from "../Components/NavBar";

import RecipeRow from "../Components/RecipeRow";
const recipeDate= {
  "id": "52944",
  "name": "Escovitch Fish",
  "categoryID": "1",
  "categoryName": "Fish",
  "duration": 11,
  "complexity": "Hard",
  "people": 3,
  "recommended": true,
  "favorite": true,
  "ingredients": "2 eggs\r\n4 tomatoes \r\npepper",
  "description":
  "Lorem ipsum dolor sit amet,; consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "photo": "https://www.themealdb.com/images/media/meals/1520084413.jpg"
};

const dataList = [
{
  "id": "5244",
  "name": "Escovitch Fish",
  "categoryID": "1",
  "categoryName": "Fish",
  "duration": 11,
  "complexity": "Hard",
  "people": 3,
  "recommended": true,
  "favorite": true,
  "ingredients": "2 eggs\r\n4 tomatoes \r\npepper",
  "description":
  "Lorem ipsum dolor sit amet,; consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "photo": "https://www.themealdb.com/images/media/meals/1520084413.jpg"
},
{
  "id": "12345",
  "name": "Pescao",
  "categoryID": "1",
  "categoryName": "Fish",
  "duration": 11,
  "complexity": "Hard",
  "people": 3,
  "recommended": true,
  "favorite": true,
  "ingredients": "2 eggs\r\n4 tomatoes \r\npepper",
  "description":
  "Lorem ipsum dolor sit amet,; consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "photo": "https://www.themealdb.com/images/media/meals/1520084413.jpg"
},
{
  "id": "67890",
  "name": "Papitas",
  "categoryID": "1",
  "categoryName": "Fish",
  "duration": 11,
  "complexity": "Hard",
  "people": 3,
  "recommended": true,
  "favorite": true,
  "ingredients": "2 eggs\r\n4 tomatoes \r\npepper",
  "description":
  "Lorem ipsum dolor sit amet,; consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "photo": "https://www.themealdb.com/images/media/meals/1520084413.jpg"
}
];

export default class ExploreScreen extends Component {

  static navigationOptions = {
    title: "Explore"
  };
  constructor(props){
    super(props);

  console.log("constructor");
  }
  keyExtractor = (item, index) => item.id;
  renderList = () => {
    return (
      <FlatList keyExtractor={this.keyExtractor} data={dataList} renderItem={({ item }) => <RecipeRow data={item} />}
      />
      );
  };


  render() {

    console.log("render");

    return (
      <View style={styles.mainScreen}>
      <NavBar leftButton={false} title="Explore" rightButton={false}/>

    <View style={styles.container}>{this.renderList()}</View>
    </View>


    );
  }
}
