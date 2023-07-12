import { View, Text, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const MenuButtons = ({  navigation }) => {

    const OpenMeeting = () => {
        navigation.navigate("MeetingRoom")
    }

    const Items = [
        {
            id: 1,
            name: 'video-camera',
            title: 'New Meeting',
            customColor: '#FF751F'
        },
        {
            id: 2,
            name: 'plus-square',
            title: 'Join'
        },
        {
            id: 3,
            name: 'calendar',
            title: 'Schedule'
        },
        {
            id: 4,
            name: 'upload',
            title: 'Share Screen'
        }
    ]

  return (
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
    }}>
        {
            Items.map((item, index) => 
                <View style={{
                    alignItems: 'center',
                    width: '26%'
                }} >
                    <TouchableOpacity style={{
                        backgroundColor: item.customColor ? item.customColor : "#0470DC",
                        width: 45,
                        height: 45,
                        borderRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }} 
                        onPress={() => OpenMeeting()}
                    >
                        <FontAwesome name={item.name} color="white" size={25} />
                    </TouchableOpacity>
                    <Text style={{
                        marginTop: 10,
                        color: 'gray',
                    }} >{item.title}</Text>
                </View>
            )
        }
    </View>
  )
}

export default MenuButtons