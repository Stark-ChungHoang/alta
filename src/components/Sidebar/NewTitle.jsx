import React from 'react'
import styled from "styled-components"
import AddIcon from '@material-ui/icons/Add';
import db from "../../firebase"
function NewTitle() {
    const addChannel = ()=> {
        const schannel = prompt("Please add New Schannel")
         schannel &&   db.collection("slack-app").add({
         name:schannel
     })
     }
    return (
        <ChannelTitle>
        <Name>Channel</Name>
        <Icon>
            <AddIcon onClick = {addChannel} />
            </Icon>
         </ChannelTitle>
    )
}

export default NewTitle

const ChannelTitle =styled.div`
display: flex;
align-items: center;
height: 28px;
justify-content: space-around;
cursor: pointer;

`
const Name = styled.div`

`
const Icon = styled.div`
transition: 400ms all ease-in-out;
&:hover{
    transform: scale(1.4);
}
`