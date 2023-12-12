import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Identification from '../screens/Identification'

export default function AuthRoutes() {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Identified' component={Identification} />
        </Stack.Navigator>
    )
}