import React, { useState } from 'react';
import styled from "styled-components";
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from "./ChatInput";
import MainChat from "./MainChat"
import { useParams } from 'react-router';
import db from "../../firebase"
import { useEffect } from 'react';
function Home() {
    let { id } = useParams();
const [state,setState] = useState()
const getChannel = ()=> {
    db.collection("slack-app")
    .doc(id)
    .onSnapshot((snap) => {
        setState(snap.data())
        
    })
}

// const [message,setMessage] = useState([])
// const getMessage = ()=> {
//     db
//     .collection("slack-app")
//     .doc(id)
//     .collection("data")
//     .orderBy("day", "asc")
//     .onSnapshot((snap)=> {
//        let abc = snap.docs.map((doc) => doc.data());
//        setMessage(abc)
//     })
// }
// useEffect(()=> {
//     getChannel()
//     getMessage()
// },[id] )
// console.log(message);
    return (
        <Container>
            <ChatHeader>
                    <HeaderTitle>
                        <Name>
                            <NameChannel>
                                # TodoComment
                                </NameChannel>
                            <Icon><StarOutlineIcon /></Icon>
                        </Name>
                        <NameDetail>Alta company conversation</NameDetail>
                    </HeaderTitle>
                    <HeaderDetail>
                        Details 
                        <DetailIcon><InfoOutlinedIcon /></DetailIcon>
                    </HeaderDetail>
            </ChatHeader>
            
            <MainChat />
            
              <ChatInput />
        </Container>
    )
}

export default Home
const Container = styled.div`
display:grid;
grid-template-rows:55px auto min-content;
`

const ChatHeader = styled.div`
height: 55px;
background:white;
display: flex;
align-items: center;
justify-content: space-between;
border-bottom:1px solid rgba(83,39,83,0.13)
`

const HeaderTitle = styled.div`
padding-left:20px;
`
const Name = styled.div`
font-weight: bold;
display: flex;
align-items: center;
`

const NameChannel = styled.div`

`
const Icon = styled.div`
padding-left:2px;
cursor: pointer;
`
const NameDetail = styled.div`
font-size:12px;
font-weight: 300;
`

const HeaderDetail = styled.div`
display: flex;
align-items: center;
padding-right:20px;
cursor: pointer;
`

const DetailIcon = styled.div`
padding-left:3px;
`

