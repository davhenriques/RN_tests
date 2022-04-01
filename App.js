import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import RedGreenBlue from "./src/screens/RedGreenBlue";
import TextScreen from "./src/screens/TextScreen";
import BoxScreen from "./src/screens/BoxScreen";
import FlexScreen from "./src/screens/FlexScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    CompSc: ComponentScreen,
    List: ListScreen,
    ImageScreen: ImageScreen,
    CounterScreen: CounterScreen,
    ColorScreen: ColorScreen,
    RedGreenBlue: RedGreenBlue,
    TextScreen: TextScreen,
    FlexScreen: FlexScreen,
    BoxScreen: BoxScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "My First App"
    },
  }
);

export default createAppContainer(navigator);
