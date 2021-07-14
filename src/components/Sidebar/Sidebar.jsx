// import styled from "styled-components"
// import React from 'react'
// import { useHistory } from "react-router-dom";
// import NewTitle from "./NewTitle";

// function Sidebar(props) {
//    const {state}= props
//    let history = useHistory();

// const createChannel = (id)=> {
//     id && history.push(`/room/${id}`);
// }
//     return (
//         <Container >
           
            
//             <UserChannel>
//                     <NewTitle />
//                     <ChannelList>

//                         {state.map((items,index)=> {
//                             return (
//                                 <Channel onClick = {()=> createChannel(items.id)} key = {index}>

//                                 <ChannelName > #{items.name}</ChannelName>
                                
//                             </Channel>
//                             )
//                         })}
          
//                     </ChannelList>
//             </UserChannel>
//         </Container>
//     )
// }

// export default Sidebar

// const Container = styled.div`
// color:white;
// height: 100vh;
// background: #3F0E40;
// box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 10px;
// `

// const UserChannel =styled.div`
// color:rgb(188 171 188);
// `


// const Channel = styled.div`
// padding-top:5px;
// height: 28px;
// cursor: pointer;
// display: flex;
// align-items: center;
// padding-left:10px;
// &:hover {
//     background:#380D36
// }
// `

// const ChannelList =styled.div`
// margin-top:10px;`

// const ChannelName = styled.div`
// padding-left:10px;
// `

import React from 'react'

function Sidebar() {
    return (
        <div>
            
        </div>
    )
}

export default Sidebar
