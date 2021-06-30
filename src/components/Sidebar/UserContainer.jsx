import React from 'react'
import styled from "styled-components"
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
function UserContainer() {
    return (
        <UserContainer1>
              <Name>
                            Chung Hoang
                        </Name>
                        <NameImg>
                                <AddCircleOutlineIcon style = {{color:"black"}} />
                        </NameImg>
        </UserContainer1>
    )
}

export default UserContainer

const Name = styled.div`
padding-left: 10px;
`

const NameImg = styled.div`
width: 38px;
height: 38px;
background: white;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
margin-right: 10px;
cursor: pointer;
`


const UserContainer1 = styled.div`
display: flex;
align-items: center;
height: 70px;
justify-content: space-around;
border-bottom: 1px solid rgba(0, 0, 0, 0.4);
`

