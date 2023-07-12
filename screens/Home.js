import { SafeAreaView } from "react-native"
import Header from "../components/Header"
import SearchBar from "../components/SearchBar"
import MenuButtons from "../components/MenuButtons"
import ContactsMenu from "../components/ContactsMenu"

function Home({ navigation }) {
  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: '#2d3436',
      padding: 15
    }} >
        <Header />
        <SearchBar />
        <MenuButtons navigation={navigation} />
        <ContactsMenu />
    </SafeAreaView>
  )
}

export default Home