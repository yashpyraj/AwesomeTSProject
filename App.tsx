import React, {type PropsWithChildren} from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import AppContainer from './src/components/app-container';
const Drawer = createDrawerNavigator();
import MainScreen from './src/screens/main';
import AboutScreen from './src/screens/about';
const App = () => {
  return (
    <AppContainer>
      {/* <Navigator /> */}
      <Drawer.Navigator
        initialRouteName="Main"
        //   drawerContent={props => <Sidebar {...props} />}
        // screenOptions={{
        //   headerShown: false,
        //   drawerType: 'back',
        //   overlayColor: '#00000000',
        // }}
      >
        <Drawer.Screen name="Main" component={MainScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
      </Drawer.Navigator>
    </AppContainer>
  );
};

export default App;
