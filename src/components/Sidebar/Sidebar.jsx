import styled from "styled-components"
import React from 'react'
import UserMain from "./UserMain";
import UserContainer from "./UserContainer";
import AddIcon from '@material-ui/icons/Add';
import db from "../../firebase"
import { useHistory } from "react-router-dom";

function Sidebar(props) {
   const {state}= props
   let history = useHistory();
    const addChannel = ()=> {
   const schannel = prompt("Please add New Schannel")
    schannel &&   db.collection("slack-app").add({
    name:schannel
})
}
const createChannel = (id)=> {
    id && history.push(`/room/${id}`);
}
    return (
        <Container >
            <UserContainer />
            <UserMain />
            <UserChannel>
                    <ChannelTitle>
                        <Name>Channel</Name>
                        <Icon>
                            <AddIcon onClick = {addChannel} />
                            </Icon>
                    </ChannelTitle>
                    <ChannelList>

                        {state.map((items,index)=> {
                            return (
                                <Channel onClick = {()=> createChannel(items.id)} key = {index}>

                                <ChannelName > #{items.name}</ChannelName>
                                
                            </Channel>
                            )
                        })}
          
                    </ChannelList>
            </UserChannel>
        </Container>
    )
}

export default Sidebar

const Container = styled.div`
color:white;

background: #3F0E40;
box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 10px;
`

const UserChannel =styled.div`
color:rgb(188 171 188);
`

const ChannelTitle =styled.div`
display: flex;
align-items: center;
height: 28px;
justify-content: space-around;
cursor: pointer;

`
const Name = styled.div`

`
const Channel = styled.div`
padding-top:5px;
height: 28px;
cursor: pointer;
display: flex;
align-items: center;
padding-left:10px;
&:hover {
    background:#380D36
}
`

const ChannelList =styled.div`
margin-top:10px;`
const Icon = styled.div`
transition: 400ms all ease-in-out;
&:hover{
    transform: scale(1.4);
}
`
const ChannelName = styled.div`
padding-left:10px;
`
