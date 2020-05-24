import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from "react-native";
import { height, width } from "../../config";

const Home = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titleView}>
                <Text style={styles.title}>Home</Text>
                <TouchableOpacity style={styles.backIconContainer} onPress={() => props.navigation.openDrawer()}>
                    <Text>Open menu</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Home;

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

    }
})
