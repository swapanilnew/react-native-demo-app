import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from './Home'
import Notification from './Notification'
import Profile from './Profile'
import { height, isLargeriPhone } from '../../config'

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator style={isLargeriPhone && {marginTop: height * 0.05 }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Notification" component={Notification} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}

export default MyTabs;