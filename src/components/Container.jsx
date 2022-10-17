import {useEffect} from 'react'
import ChatForm from './ChatForm'
import ChatList from './ChatList'
import {init,subscribeChat,subscribeInitialMessages} from '../socketApi'
import { useChat } from '../context/ChatContext'

const Container = () => {
const {setMessages} = useChat()
  useEffect(()=>{
init();
subscribeInitialMessages((messages)=>{
setMessages(messages)
})
subscribeChat((message)=>{
  setMessages((prevState)=>[...prevState,{message}])
});
  },[])
  return (
    <div>
      <h1 style={{textAlign:"center"}}>Basic Chat App</h1>
        <ChatList/>
        <ChatForm/>
    </div>
  )
}

export default Container