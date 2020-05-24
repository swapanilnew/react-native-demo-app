import React from "react";
import { connect } from 'react-redux';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { height, width } from "../../config";
import { logOut } from '../../actions/auth.action'

const Home = (props) => {

    const _logOut = () => {
        props.dispatch(logOut())
        props.navigation.navigate("Login")
    }
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
            <TouchableOpacity style={styles.backIconContainer} onPress={() => props.navigation.openDrawer()}>
                <MaterialCommunityIcons style={styles.backIcon} name="menu" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.backIconContainer} onPress={() => _logOut()}>
                <AntDesign style={styles.backIcon} name="logout" />
            </TouchableOpacity>
            </View>
            <View style={styles.titleView}>
                <Text style={styles.title}>Home</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    titleView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: height * 0.4
    },
    backIcon: {
        fontSize: 25,
    },
    backIconContainer: {
        marginHorizontal: width * 0.05,
        marginVertical: height*0.015
    }
})

mapStateToProps = state => ({
    auth: state.authReducer.auth
})

mapDispatchToProps = (dispatch) => ({
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);