import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Guardian/Home'

export default function AppRoutes() {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='HomeGuardian' component={Home} />
        </Stack.Navigator>
    )
}