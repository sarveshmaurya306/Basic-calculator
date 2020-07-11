import React from 'react'

const DUMMY_DATA=[
	{
		senderId:"parborgen",
		text:"hey,how is it going."
	},
	{
		senderId:"janedoe",
		text:"great! How about you."
	},
	{
		senderId:"parborgen",
		text:"Good to here: I am great as well."
	}
]


export default function MessageList(params) {
	return(<div className="col-9" style={{height:"85vh",border:"3px dotted grey"}}>

		{DUMMY_DATA.map((message,index)=>{
			return (
				<div key={index}>
					<div className="message_username">{message.senderId}:</div>
					<div className="message">{message.text}</div>
				</div>
			)
		})}

	</div>)
};