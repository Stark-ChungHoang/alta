import React from 'react'
import styled from "styled-components"
import { SidebarData } from '../../Data/SidebarData'
function UserMain() {
    return (
        <UserMain1>
        {SidebarData.map((items,index)=> {
            return (
                <UserItems key = {index}>
                       <UserIcon>
                       {items.icon}
                       </UserIcon>

                       <UserTitle>
                       {items.text}
                       </UserTitle>
                </UserItems>
            )
        })}
      
    </UserMain1>
    )
}

export default UserMain

const UserMain1 = styled.div`
padding-top:20px;
`

const UserItems = styled.div`
color:rgb(188 171 188);
display: flex;
align-items: center;
padding-left:10px;
padding-top:5px;
cursor: pointer;
&:hover {
background: #350D36;
}
`

const UserIcon = styled.div`
padding-right:10px;
transition: 400ms all ease-in-out;

`
const UserTitle = styled.div`

`
