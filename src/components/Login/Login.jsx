import React from 'react'
import firebase from "firebase"
import {auth,provider} from "../../firebase"
import styled from "styled-components"
function Login({SetUser}) {

    const Signin = ()=> {
        firebase.auth().signInWithPopup(provider)
        .then((result)=> {
            let user = result.user;
            const userData = {
                name:user.displayName,
                email:user.email,
                img: user.photoURL
            }
            localStorage.setItem('myData', JSON.stringify(  userData ));
            SetUser(userData)
          
           })
           .catch((err)=> {
               alert("err")
           })
        
    }
    return (
        <Container>
            <Main>
                <MainImg src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png" />
                <h1>Sign in Slack</h1>
                <MainButton onClick = {()=> Signin()}>
                        Sign in with Google
                </MainButton>
            </Main>
        </Container>
    )
}

export default Login

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`
const Main = styled.div`
box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 10px;
background:white;
padding:100px;
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
border-radius: 5px;
`

const MainImg = styled.img`
height: 100px;
margin-bottom: 10px;
`

const MainButton = styled.button`
margin-top: 100px;
height: 50px;
background: #1ead1e;
border: none;
text-transform: uppercase;
border-radius: 5px;
font-size:15px;
cursor: pointer;
color:white;
transition:400ms all ease-in-out;
&:hover {
    background-color:#248124;
}
`