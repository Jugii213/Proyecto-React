import { StyleSheet, Plataform } from "react-native";
import { Metrics, Colors, Fonts } from "../../Theme";

export default StyleSheet.create({
  categorieRow: {
  height: 56,
  backgroundColor: Colors.whiteFull,
  marginHorizontal: Metrics.baseSpace,
  alignItems: "center",
  justifyContent: "center",
  marginBottom: Metrics.smallSpace
},
categorieText: {
  ...Fonts.style.h3
}
});
