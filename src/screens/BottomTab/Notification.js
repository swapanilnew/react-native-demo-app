import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { height, width } from "../../config";

const Notification = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.backIconContainer} onPress={() => props.navigation.openDrawer()}>
                <MaterialCommunityIcons style={styles.backIcon} name="menu" />
            </TouchableOpacity>
            <View style={styles.titleView}>
                <Text style={styles.title}>Notification</Text>
            </View>
        </SafeAreaView>
    );
};

export default Notification;

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
