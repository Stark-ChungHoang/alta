import styled from "styled-components";
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Header({SignOut}) {
  const {user} = useSelector(state=> state.channel)
 
    return (
        <Container >
         <Main>
                <AccessTimeIcon style = {{cursor:"pointer"}} />
                <SearchContainer>
                     
                                <input type="text" placeholder = "search...." />
                     
                </SearchContainer>
                <HelpOutlineIcon style = {{cursor:"pointer"}} />
         </Main>
         <UserContainer>
                <Name>{user.name}</Name>
                <UserImg onClick = {()=> SignOut()} ><img src={user.img}/></UserImg>
         </UserContainer>
        </Container>
    )
}

export default Header

const Container = styled.div`
background: #350d36;
display: flex;
align-items: center;
color:white;
justify-content: center;
position: relative;
`

const Main = styled.div`
display: flex;
align-items: center;
padding-left:10px;
`
const SearchContainer = styled.div`
min-width: 400px;
padding-left: 10px;
padding-right: 10px;
@media screen and (max-width:870px) {
    min-width:200px;
}

input {
    padding-top:5px;
    padding-bottom:5px;
    width: 100%;
    border-radius: 5px;
    &:focus {
        outline:none;
    }
}
`





const UserContainer = styled.div`
display: flex;
align-items: center;
position: absolute;
right:5%;

`
const Name = styled.div`
margin-right: 10px;
@media screen and  (max-width:648px) {
    display: none;
}
`

const UserImg = styled.div`
width: 28px;
margin-right:10px;
height: 28px;
border-radius: 2%;
cursor: pointer;
img {
    width: 100%;
}
`
