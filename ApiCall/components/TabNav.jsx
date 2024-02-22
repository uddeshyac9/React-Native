import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AddUsers from './AddUsers.jsx';
import Users from './Users.jsx';
import SerchUser from './SerchUser.jsx';

const Tab = createMaterialTopTabNavigator();

function TabNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Users' component={Users} />
      <Tab.Screen name='Add Users' component={AddUsers} />
      <Tab.Screen name='Search Users' component={SerchUser} />
    </Tab.Navigator>
  );
}

export default TabNav;
