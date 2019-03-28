import { createStackNavigator } from "react-navigation";

import GenericScreen from "../Containers/GenericScreen";

const AppNavigator = createStackNavigator(
  {

  Home: { screen: GenericScreen },
}
);

export default AppNavigator;
