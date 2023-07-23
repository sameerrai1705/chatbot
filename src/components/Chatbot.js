import React , {useState} from 'react'
import {Button} from 'react-bootstrap'
import ChatMessage from './ChatMessage'
import { analyze } from '../utils';


const Chatbot = () => {

    const user = JSON.parse(localStorage.getItem("user"));

    const [messages , setMessages] = useState([
        {
            message : `Hi , ${user.name}`,
        }
    ]);

    const [text , setText] = useState('');

    const onSend = () => {
        let list = [...messages , {message: text , user: true}];
        if(list.length > 2){
            const reply = analyze(text);
            list = [
                ...list,
                {message: reply}
            ]
        }
        else{
            list = [...list , {message: "how can i help you ?"}];
        }
        setMessages(list)
        setText("")
        setTimeout(() => {
           document.querySelector('#copyright').scrollIntoView(); 
        }, );
    }

  return (
    <div>
        <div className='d-flex align-items-center justify-content-center'>
            <img src='https://cdn.technologyadvice.com/wp-content/uploads/2018/02/friendly-chatbot.jpg' alt='logo' height={200} width={200} />
            <h2 className='text-primary'>Chatbot</h2>
        </div>
        <div className='chat-message'>
            {messages.length > 0 && messages.map((data , id) => <ChatMessage {...data} key = {id} /> )}
            <div className='d-flex mt-2'>
                <input type='text' className='form-control' value={text} onChange={e => setText(e.target.value)} />
                <Button type="primary" className='ms-3' onClick={onSend}>Send</Button>
            </div>
            <div id='copyright' className='mt-3'>Chatbot</div>
        </div>
    </div>
  )
}

export default Chatbot