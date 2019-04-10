import React from "react";

import { View, Image, Text } from "react-native";

import CustomIcon from "../Components/CustomIcon";

import styles from "./Styles/CategoriesRowStyles";

class CategorieRow extends React.Component {


render(){

  const { data } = this.props;
  return(
    <View style={styles.categorieRow}>
      <Text style={styles.categorieText}>{data.name}</Text>
    </View>
  );
  }
}
export default CategorieRow;
