import React from 'react'
import { useSelector } from 'react-redux'
import styled from "styled-components"
function MainChat() {

    const user1 = useSelector(state=> state.listUser.listUser)
  console.log(user1);
    return (
        <Container>

                {user1 && user1.map((items,index)=> {
                    return (
                        <ChatItem key = {index}>
                        <AvatarUser><img src="https://picsum.photos/200" alt="avatar" /></AvatarUser>
                        <Detail>
                             <NameUser>
                                 <Name>{items.title}</Name>
                                 
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
 const Content = styled.div`
padding-top: 5px;
 font-weight:500
 `


