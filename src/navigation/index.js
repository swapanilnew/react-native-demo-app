import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import Home from '../screens/Home'
import Login from '../screens/Login'

const Stack = createStackNavigator();

function Routes(props) {
    // console.log(props.auth)
    return (
        <Stack.Navigator initialRouteName={!props.auth.isLoggedIn ? "Login" : "Home"}>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

mapStateToProps = state => ({
    auth: state.authReducer.auth
})

mapDispatchToProps = (dispatch) => ({
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Routes);