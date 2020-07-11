import React from 'react'
import MessageList from './MessageList'
import RoomList from './RoomList'
import SendMessageForm from './SendMessageForm'
import NewRoomForm from './NewRoomForm'
export default function App(params){
	return(<div className="row">
		<RoomList/>
		<MessageList/>
		<span><br/></span>
		<NewRoomForm/>
		<SendMessageForm/>
	</div>)
};