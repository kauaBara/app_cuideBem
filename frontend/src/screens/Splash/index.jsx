import { StyleSheet } from 'react-native'
import {ResizeMode,Video} from 'expo-av'

export default function Splash(){
    return(
        <Video 
        style={StyleSheet.absoluteFill}
        resizeMode={ResizeMode.COVER}
        source={require('../../../assets/loading.mp4')}
        shouldPlay={true}
        />
        
    )
}

// tela de Splash