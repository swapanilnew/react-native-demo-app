import { Dimensions, PixelRatio } from 'react-native'
import { Alert, Platform } from 'react-native'

const width = Dimensions.get('screen').width;

const height = Dimensions.get('screen').height;

const pixelRatio = PixelRatio.get();

const isLargeriPhone = height >= 812 || width >= 812

const Colors = {
    primary: '#1292B4',
    white: '#FFF',
    lighter: '#F3F3F3',
    light: '#DAE1E7',
    dark: '#444',
    black: '#000',
};

const Theme = {
    // color: '#e04f5f',
    color: '#ffb012',
    backgroundColor: '',
    fontFamily: '',
    statusBarColor: '#cf8f0e',
    drawerMenuItemColor: '#ffdf9e',
    drawerMenuItemBorderColor: '#fffaf0',
    backIconColor: '#fff',
    titleColor: '#fff',
    loaderColor: 'navy',
    overlayColor: 'rgba(0, 0, 0, 0.4)'
}

const BASE_URL = 'http://google.com/'

const appInfo = {
    appName: "React Native"
}

const customAlert = (title = appInfo.appName, message = "add a message") => {
    Alert.alert(title, message)
}

const platformOS = Platform.OS;

export {
    Colors,
    BASE_URL,
    width,
    height,
    pixelRatio,
    Theme,
    customAlert,
    appInfo,
    platformOS,
    isLargeriPhone
}

