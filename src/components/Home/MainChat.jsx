import React from 'react'
import styled from "styled-components"
function MainChat({message}) {

    return (
        <Container>

                {message && message.map((items,index)=> {
                    return (
                        <ChatItem key = {index}>
                        <AvatarUser><img src={items.img} alt="avatar" /></AvatarUser>
                        <Detail>
                             <NameUser>
                                 <Name>{items.name}</Name>
                                 <Time>{new Date(items.day).toUTCString()}</Time>
                             </NameUser>
                             <Content>
                                   {items.data}
                             </Content>
                        </Detail>
                   </ChatItem>
                    )
                }) }

        </Container>
    )
}

export default MainChat

 const Container = styled.div`
overflow-y: scroll;
 `

 const ChatItem = styled.div`
 display: grid;
grid-template-columns: 50px auto;
 padding-top: 25px;
 padding-left: 15px;
 `

 const AvatarUser = styled.div`
 width: 40px;
 height: 40px;
 cursor: pointer;

 img {
     width: 100%;
     height: 100%;
     border-radius: 5px;
 }
 `

 const Detail = styled.div`

 `
 const NameUser = styled.div`
 display: flex;

 `
 const Name = styled.div`
 font-weight: 900;
 padding-right: 10px;
 cursor: pointer;
 `
 const Time = styled.div`
 font-weight: 300;
 font-size: 13px;
  @media screen and (max-width:880px) {
      display: none;
  }
 `
 const Content = styled.div`
padding-top: 5px;
 font-weight:500
 `


