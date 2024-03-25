import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Info from './src/components/Info/Info';
import Library from './src/components/Library/Library';

import {CustomTabLabel} from './src/components/CustomTabLabel/CustomTabLabel';

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => (
            <CustomTabLabel label={route.name} activeTab={focused} />
          ),
          tabBarShowLabel: false,
        })}>
        <Tab.Screen
          name="Info"
          component={Info}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Library"
          component={Library}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
