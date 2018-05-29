import { createStackNavigator, } from 'react-navigation';
import ColorPicker from './ColorPicker';
import Home2 from './Home2';
export const COLOR_PICKER = 'COLOR_PICKER';
export const HOME2 = 'HOME2';
export const RootStack = createStackNavigator(
    {
    COLOR_PICKER: {
      screen: ColorPicker
    },
    HOME2: {
        screen: Home2
      }
  },
  {
      navigationOptions: {
          headerStyle: {
              backgroundColor: 'red'
          },
          headerTintColor: 'white'
      }
  }
);