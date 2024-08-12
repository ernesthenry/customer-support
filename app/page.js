'use client'
import { Button, Box, Typography } from '@mui/material'


import { useRouter } from 'next/navigation'


export default function homepage() {
    const router = useRouter()

    const goToAssistant=() =>{
        router.push ('/Assistant')
    }


return (
    <Box
    width="100vw"
    height="100vh"
    display="flex"
    flexDirection="column"
    justifyContent="flex-start"
    alignItems="center"
    backgroundColor="#FFFFFF"
    p={39}
    
    >
        
    <Box 
        display= "flex"
        alignItems= "flex-end"
    >
        <Typography variant='h4'
        component='span'
       
        sx={{
           
            fontFamily: 'sans-serif',
            fontStyle:'normal',
            
            fontWeight: '250',
            fontSize:'40px',
            lineHeight:'60px',
            color: '#000000',
            marginRight:'1px',
            justifyContent:'center',

        }}
        >
            Welcome to
        </Typography>

        <Typography variant='h1'
        component='span'
        sx={{

            fontFamily: 'sans-serif',
            fontStyle:'normal',
            lineHeight:'100px',
            fontSize:'100px',
            color: '#273F52',
            justifyContent:'center',
            fontWeight: '275',
           

        }}
        >
            TA
        </Typography>
        
    
    
    
           
    </Box>
    <Box>
        <Typography
        sx={{

            fontFamily: 'sans-serif',
            fontStyle:'normal',
            lineHeight:'30px',
            fontSize:'20px',
            color: ' #BCC3C7',
            justifyContent:'center',
            fontWeight:'300',
            width:'192px',
            height:'30px',
            left:'522px',
            top:'428px',
            
        }}
        >
            Get instant support
        </Typography>
    </Box>




    <Button onClick={goToAssistant}
    variant ="contained"
    sx={{
        width: "157px",
        height: "45px",
        position:'absolute',
        justifyContent: 'center',
        borderRadius: "10px",
        background: '#009BE1',
        boxShadow: ' 0px 4px 4px rgba(0, 0, 0, 0.25)',
        bottom: '150px',

        '&:hover':{
            width: "157px",
            height: "45px",
            background: '#38AFE7',
            border: '1px solid #FFFFFF',
            boxShadow: ' 0px 4px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: '10px',
            
        }
        
    }}
    
    
    >Get Started</Button>
    </Box>
)
}