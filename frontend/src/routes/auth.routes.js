import {createNativeStackNavigator} from '@react-navigation/native-stack'


import Identified from '../screens/Identified'

export default function AuthRoutes(){

    const Stack = createNativeStackNavigator()

    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Identified' component={Identified} />
        </Stack.Navigator>
    )
}