import { View, Text, StyleSheet } from "react-native"
import Entypo from 'react-native-vector-icons/Entypo'

function Header() {
  return (
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }} >
        <Entypo name="notification" size={30} color="#efefef"  />
        <Text style={{ color: '#fff', fontWeight: "bold" }} >Meet & Chat</Text>
        <Entypo name="new-message" size={30} color="#efefef" />
    </View>
  )
}

export default Header