import React,{useState}from 'react'
import { View } from 'react-native'
import StartMeeting from '../components/StartMeeting'


const MeetingRoom = () => {

const [name , setName] = useState('')
const [roomId , setRoomId] = useState('')

  return (
    <View>
      <StartMeeting
        name={name}
        setName={setName}
        roomId={roomId}
        setRoomId={setRoomId}
       />
    </View>
  )
}

export default MeetingRoom