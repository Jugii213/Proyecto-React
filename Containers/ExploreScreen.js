/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

import styles from "./Styles/GenericScreenStyles";

import NavBar from "../Components/NavBar";

import RecipeRow from "../Components/RecipeRow";
export default class ExploreScreen extends Component<Props> {

  static navigationOptions = {
    title: "Explore"
  };
  constructor(props){
    super(props);

  console.log("constructor");
  }


  render() {

    console.log("render");

    return (
      <View>
      <NavBar leftButton={false} title="Explore" rightButton={false}/>
      <RecipeRow />
    {/*El contenido va aqui*/}
    <View style={styles.container}></View
    </View>

    );
  }
}
