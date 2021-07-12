import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// screens 
import HomeScreen from "./src/screens/HomeScreen";
import ColorScreen from './src/screens/ColorScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Image: ColorScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
