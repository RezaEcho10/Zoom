import React from 'react'
import { View , Image, Text } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

const ContactsMenu = () => {

    const ContactMenuButtons = [
        {
            type: 'starred',
            name: 'Starred'
        },
        {
            type: 'contact',
            name: 'Freshteh',
            photo: require("../assets/p.jpg")
        },
        {
            type: 'contact',
            name: 'Hillary',
            photo: require("../assets/p.jpg")
        },
        {
            type: 'contact',
            name: 'Baran',
            photo: require("../assets/p.jpg")
        }
    ]

  return (
    <View>
        {
            ContactMenuButtons.map((contact , index) => 
                <View key={index} style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 15
                }} >
                    { contact.type == 'starred' ? (
                    <View style={{
                        width: 55,
                        height: 55,
                        backgroundColor: 'gray',
                        borderRadius: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row'
                    }} >
                        <AntDesign name="star" size={30} color='white' />
                    </View> 
                    ) : (
                        <Image source={contact.photo} style={{
                            width: 55,
                            height: 55,
                            borderRadius: 20
                        }} />
                    )}
                     <Text style={{
                        color: 'white',
                        marginLeft: 15,
                        fontSize: '1.2rem'
                     }} >{contact.name}</Text>
                </View>
            )}
    </View>
  )
}

export default ContactsMenu