import React from 'react'
import { TextInput, View, StyleSheet, TouchableOpacity, Text } from 'react-native'

const StartMeeting = ({name , setName, roomId, setRoomId}) => {
  return (
    <View style={{
        backgroundColor: '#1c1c1c',
        height: '100%'
      }} >
        <View>
          <TextInput placeholder='Enter Name' style={styles.input} value={name} onChangeText={text => setName(text)} />
          <TextInput placeholder='Enter Room Id' style={styles.input} value={roomId} onChangeText={text => setRoomId(text)} />
          <View style={{
            marginTop: 20
          }} >
            <TouchableOpacity
             style={{
              backgroundColor: '#0E37AF',
              width: '80%',
              height: 40,
              margin: 'auto',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10
            }} >
              <Text style={{
                color: 'white'
              }} >Start Meeting</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
  )
}


const styles = StyleSheet.create({
    input:{
      backgroundColor: 'gray',
      height: 40,
      outline: 0,
      color: '#444343',
      paddingLeft: 25
    }
  })

export default StartMeeting