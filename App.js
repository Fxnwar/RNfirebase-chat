import { createStackNavigator } from 'react-navigation';

import Chat from './components/Chat';

export default createStackNavigator({
  Chat: { screen: Chat }
});