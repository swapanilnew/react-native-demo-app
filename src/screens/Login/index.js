import React, { useState } from "react";
import { connect } from 'react-redux';
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { height, width, regx } from "../../config";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { loginUser } from '../../actions/auth.action'

const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState(false)
    const [emailInvalid, setEmailInvalid] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    const _onChangeText = (val, type) => {
        switch (type) {
            case 'email':
                setEmail(val)
                if (val == "") {
                    setEmailInvalid(false)
                    setEmailError(true)
                }
                else if (regx.email.test(val) === false) {
                    setEmailError(false)
                    setEmailInvalid(true)
                }
                else {
                    setEmailError(false)
                    setEmailInvalid(false)
                }
                break;
            case 'password':
                setPassword(val)
                if (val == "")
                    setPasswordError(true)
                else
                    setPasswordError(false)
                break;
        }
    }

    const _onSubmit = () => {
        if (email == "" || password == "" || regx.email.test(email) === false) {
            alert("Please enter a valid email id and password!")
            return false
        }
        if (email.toLowerCase() == "swapaniljain525@gmail.com" && password == "123456") {
            props.dispatch(loginUser({email: 'swapaniljain525@gmail.com',password: '123456'}))
            props.navigation.navigate("Home")
            return false
        }
        else{
            alert("Email Id or Password is invalid!")
            return false
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.form}>
                <TextInput value={email} onChangeText={(val) => _onChangeText(val, "email")} style={styles.email} placeholder='Email' />
                {
                    emailError && <Text style={styles.error}>Email is required.</Text>
                }
                {
                    emailInvalid && <Text style={styles.error}>Please enter a valid email.</Text>
                }
                <TextInput value={password} onChangeText={(val) => _onChangeText(val, "password")} secureTextEntry={true} style={styles.password} placeholder='Password' />
                {
                    passwordError && <Text style={styles.error}>Password is required.</Text>
                }
                <TouchableOpacity onPress={() => _onSubmit()} style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

mapStateToProps = state => ({
    auth: state.authReducer.auth
})

mapDispatchToProps = (dispatch) => ({
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const commonStyles = StyleSheet.create({
    input: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: width * 0.6,
        height: height * 0.05,
        borderRadius: width * 0.05,
        paddingLeft: width * 0.05,
        borderWidth: 1,
        borderColor: 'lightgray'
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    form: {
        marginTop: height * 0.2
    },
    email: StyleSheet.flatten([commonStyles.input]),
    password: StyleSheet.flatten([commonStyles.input, { marginTop: height * 0.04 }]),
    button: StyleSheet.flatten([commonStyles.input, { backgroundColor: 'navy', paddingLeft: 0, marginTop: height * 0.04 }]),
    buttonText: {
        textAlign: 'center',
        color: '#fff'
    },
    error: {
        color: 'red',
        marginLeft: width * 0.25,
        paddingTop: height * 0.01
    }
})
