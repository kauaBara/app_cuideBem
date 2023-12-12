import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from '../screens/Guardian/Home'
const Stack = createNativeStackNavigator()

export default function AppRoutes(){
    return(
        <Stack.Navigator screenOptions={{  headerShown: false}}>
            <Stack.Screen name='HomeGuardian' component={Home}/>
        </Stack.Navigator>
    )
}