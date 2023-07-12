import { TextInput, View } from "react-native"
import Fontisto from 'react-native-vector-icons/Fontisto'

function SearchBar() {
  return (
    <View style={{
        marginTop: 10,
        justifyContent: 'center'
    }} >
        <Fontisto style={{
            position: 'absolute' , marginLeft: 15 
        }} name="search" size={20} color="#858585" />
        <TextInput style={{
            alignItems: 'center',
            padding: 10,
            backgroundColor: "#636e72",
            borderRadius: 10,
            paddingLeft: 45,
            color: 'gray',
            fontSize: '1.2rem'
        }}
            placeholder="Search"
         />
    </View>
  )
}

export default SearchBar