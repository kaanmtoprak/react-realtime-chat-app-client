import {useState} from 'react'
import styles from './styles.module.css'
import {sendMessage} from '../socketApi'
import {useChat} from '../context/ChatContext'

const ChatForm = () => {
  const [message,setMessage] = useState('');
  const {setMessages} = useChat();
  const handleSubmit= (e)=>{
e.preventDefault()
setMessages((prevState) =>[...prevState,{message,fromMe:true}])
sendMessage(message)
setMessage('');
  }
  return (
    <div className={styles.chatDiv}>
      <form onSubmit={handleSubmit}>
        <input onChange={(e)=>setMessage(e.target.value)} value={message} className={styles.textInput} />
      </form>
    </div>
  )
}

export default ChatForm