import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home'
import Tab from '../Tab'
import BottomTab from '../BottomTab'

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Tab" component={Tab} />
            <Drawer.Screen name="BottomTab" component={BottomTab} />
        </Drawer.Navigator>
    );
}

export default MyDrawer;