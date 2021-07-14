import React from 'react'
import styled from "styled-components"
import AddIcon from '@material-ui/icons/Add';
import db from "../../firebase"
function Remake() {
    const addChannel = ()=> {
        const schannel = prompt("Please add New Schannel")
         schannel &&   db.collection("slack-app").add({
         name:schannel
     })
     }
    return (
        <Container>
        <ChannelTitle>
        <Name>Please choose Channel or create Channel</Name>
        <Icon>
            <AddIcon style = {{fontSize:"30px"}} onClick = {addChannel} />
            </Icon>
         </ChannelTitle>
         </Container>
    )
}

export default Remake

const Container = styled.div`
height: 900px;
display: flex;
margin-top:100px;
justify-content: center;
`

const ChannelTitle =styled.div`
display: flex;
align-items: center;
flex-direction: column;
height: 300px;
width: 400px;
justify-content: center;
cursor: pointer;
box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 10px;


`
const Name = styled.div`
font-weight: bold;
margin-bottom: 100px;
`
const Icon = styled.div`
border:1px dotted gray;
border-radius: 10px;
padding: 20px 100px;
font-size: 50px;
transition: 400ms all ease-in-out;
&:hover{
    /* transform: scale(1.4); */
}
`