import { StyleSheet } from "react-native";
import { neutral, primary, white } from '../../../constants/colors'

export const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: primary
    },

    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    boxUser: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: white,
        alignItems: 'center',
        justifyContent: 'center'
    },

    iconUser: {
        fontSize: 50,
        color: neutral
    },

    nameDoctor: {
        marginTop: 30,
        fontSize: 30
    },

    crmDoctor: {
        fontSize: 25
    },

    boxCards: {
        flexDirection: 'row',
        marginHorizontal: 15,
        marginTop: 150
    },

    card: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        borderRadius: 20,
        width: 180,
        height: 180,
        backgroundColor: white,
    },

    icon: {
        fontSize: 80,
        color: neutral
    },

    textCard: {
        marginTop: 15,
        fontSize: 20
    }
})