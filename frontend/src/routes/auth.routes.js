import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from '../screens/Splash'
import Identification from '../screens/Identification'

export default function AuthRoutes() {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            
            <Stack.Screen name='Identification' component={Identification} />
        </Stack.Navigator>
    )
}