'use client'

import { Box, Button, Stack, TextField } from '@mui/material'
import shadows from '@mui/material/styles/shadows'
import { useState, useRef, useEffect } from 'react'

export default function Home() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm the Headstarter support assistant. How can I help you today?",
    },
  ])
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const sendMessage = async () => {
    if (!message.trim() || isLoading) return;
    setIsLoading(true)
  
    setMessage('')
    setMessages((messages) => [
      ...messages,
      { role: 'user', content: message },
      { role: 'assistant', content: '' },
    ])

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([...messages, { role: 'user', content: message }]),
      })
  
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
  
      const reader = response.body.getReader()
      const decoder = new TextDecoder()
  
      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        const text = decoder.decode(value, { stream: true })
        setMessages((messages) => {
          let lastMessage = messages[messages.length - 1]
          let otherMessages = messages.slice(0, messages.length - 1)
          return [
            ...otherMessages,
            { ...lastMessage, content: lastMessage.content + text },
          ]
        })
      }
    } catch (error) {
      console.error('Error:', error)
      setMessages((messages) => [
        ...messages,
        { role: 'assistant', content: "I'm sorry, but I encountered an error. Please try again later." },
      ])
    }
    setIsLoading(false)
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      sendMessage()
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])


  return (

    <Box
      width="100vw"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      backgroundColor="#ECF0F1"
    >

      <Box
       top='1%'
       left="10px"
       position="absolute"
      >

        <Button  //start new chat
            variant="contained" 
            //onClick={}
            //disabled={isLoading}
            
            sx={{
              backgroundColor:'transparent',
              left:'31px',
              top:'35px',
              fontSize: '15px',
              color:'#34495E',
              borderRadius: "10px",

              '&:hover': {
                width: "120px",
                height: "43px",
                borderRadius: "10px",
                backgroundColor:'#2E4A60',
                border: '1px solid #EBF0F1',
                boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)',
                color:'#ECF0F1',
              },
              justifyContent:'center',
              marginleft: '10px',
            }}
          >
            New chat 
          </Button>
          </Box>

        
      <Stack
        direction={'column'}
        width="70%"
        height="90%"
        paddingBottom="80px"
        p={2}
        spacing={3}
        justifyContent="right"
        sx={{
          position: 'relative',
        }}
       
      >
      
        <Stack
          direction={'column'}
          spacing={2}
          flexGrow={1}
          overflow="auto"
          maxHeight="100%"

          sx={{
            '&::-webkit-scrollbar': {
              width: '8px',
            },
            '&::-webkit-scrollbar-track': {
              background:'#ECF0F1'
            },
            '&::-webkit-scrollbar-thumb': {
              background:'#BDC3C7',
              borderRadius:'10px',
              
            },
            
            paddingRight:'150px',
             
          }}
        >

          {messages.map((message, index) => (
            <Box
              key={index}
              display="flex"
              justifyContent={
                message.role === 'assistant' ? 'flex-start' : 'flex-end'
              }   
            >
              <Box
              sx={{
              bgcolor: message.role === 'assistant' ? '#ECF0F1' : '#009BE1',
              borderRadius:  message.role === 'assistant' ? '15px'  : '20px',
              width: message.role === 'assistant' ? '459px' : '300px',
              color: message.role === 'assistant' ? "#34495E"  : "#FFFFFF",
              p: 2,
              wordWrap: 'break-word',
              overflowWrap: 'break-word',
              
            }}
                
              >
                {message.content}
              </Box>
            </Box>
          ))}
          <div ref={messagesEndRef} />
        </Stack>
        
       
        
        <Stack  justifyContent="center" direction="row" alignItems="center"  spacing= {.1} width="calc(100% - 24px)" 
        sx={{
          position: 'relative',
          
        }} >

        <TextField
            label="Message"
            fullWidth
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isLoading}
            InputProps={{
            sx: {
              boxSizing:'border-box',
              width:"688.11px",
              background:'#EBF0F1',
              border:'px solid #BCC3C7',
              borderRadius:"20px",
              justifyContent:'center',
              position: 'relative', 
              paddingRight: '110px',
              '$ .MuiOutlinedInput-root': {
                '& fieldset':{
                  borderColor: '#BDC3C7',
                },

              }
            },

            }}

          />

        
        
        <Button 
            variant="contained" 
            onClick={sendMessage}
            disabled={isLoading}
            
            
            sx={{
              mt: 2,
              
              height: "31.88px",
              borderRadius: "20px",
              backgroundColor: '#38AFE7',
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              boxShadow: '0px 4px 4px color(display-p3 0.000 0.000 0.000 / 0.25)',
              background: '(display-p3 0.365 0.678 0.886)',
              position: 'fixed',
              bottom: '8.5%',
              right:'38%',

              '&:hover': {
                background: '#009BE1',
                backgroundColor: '(display-p3 0.204 0.596 0.859)',
                border: '.5px solid #EEF3F9',
                boxSizing:'border-box',
                borderRadius: "20px",
                width: "74.04px",
                height: "31.88px",
                
              },
              justifyContent:'center',
              marginleft: '10px',
            }}
          >
            {isLoading ? '...' : 'Enter' }
          </Button>
          </Stack>
          
        
      </Stack>
    </Box>
  )
}
