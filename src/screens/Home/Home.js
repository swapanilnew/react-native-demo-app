import React from "react";
import { connect } from 'react-redux';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { height, width } from "../../config";

const Home = (props) => {
    // console.log(props)
    console.log(props.friends)
    console.log(props.friends.possible)
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.backIconContainer} onPress={() => props.navigation.openDrawer()}>
                <MaterialCommunityIcons style={styles.backIcon} name="menu" />
            </TouchableOpacity>
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
    titleView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: height * 0.4
    },
    backIcon: {
        fontSize: 25,
    },
    backIconContainer: {
        marginLeft: width * 0.05
    }
})

mapStateToProps = state => ({
    friends: state.friends
})

mapDispatchToProps = (dispatch) => ({
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);