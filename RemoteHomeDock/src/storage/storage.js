import AsyncStorage from '@react-native-community/async-storage'

export default setStorage = async (ip, port) => {
    try {
        await AsyncStorage.setItem('@ip', ip)
        await AsyncStorage.setItem('@port', port)
    } catch (e) {
        console.log(e)
    }
}