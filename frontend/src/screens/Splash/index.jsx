import { StyleSheet } from 'react-native'
import { ResizeMode, Video,} from 'expo-av'

export default function Splash() {

    function onPlaybackStatusUpdate(status) {
        console.log(status)
    }

    return (
        <Video
            style={StyleSheet.absoluteFill}
            resizeMode={ResizeMode.COVER}
            source={require('../../../assets/splash.mp4')}
            isLooping={false}
            onPlaybackStatusUpdate={onPlaybackStatusUpdate}
            shouldPlay={true}
        />

    )
}
