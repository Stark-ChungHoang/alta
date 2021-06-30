import {BrowserRouter as Router,  Switch,  Route} from "react-router-dom";
import {useEffect, useState} from "react";
import firebase from "firebase";
import db, { auth,provider } from "./firebase";
import styled from "styled-components";
import {getUser} from "./features/channel"
import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Sidebar from "./components/Sidebar/Sidebar";
import { useDispatch } from "react-redux";

function App() {
 
  const [state,setState] = useState([]);
  const [user,SetUser] = useState(JSON.parse(localStorage.getItem('myData')))
  const dispatch = useDispatch()
      dispatch(getUser(user))
  const dataSlack = ()=>  db.collection("slack-app").onSnapshot(items=> {
            setState(items.docs.map(doc=> {
              return {id:doc.id, name:doc.data().name}
            })) })


            const SignOut = ()=> {
              firebase.auth().signOut().then(() => {
                localStorage.removeItem("myData")
                  SetUser(null)
              }).catch((error) => {
                  alert("err")
              });
           
          }       
   useEffect(()=> {
    dataSlack()
   },[])

  return (
    <div className="App">
       <Router> 
          {!user ? <Login  SetUser={SetUser} ></Login> : 
             <Container >
                      <Header SignOut = {SignOut} />
                      <Main>
                            <Sidebar state={state} />
                            <Switch>
                                <Route  path="/room/:id" component = {Home}></Route>      
                                <Route  path="/room" >Please create or Selection Channel</Route>      
                            </Switch>
                      </Main>

           </Container>}
     </Router>
    </div>
  );
}

export default App;


export const Container = styled.div`
width: 100%;
height: 100vh;
display: grid;
grid-template-rows: 47px minmax(0,  1fr);
@media screen and (max-height:360px) {
  width: 100%;
  height: 100vh;
}
`

const Main = styled.div`
display: grid;
grid-template-columns: 30% auto;
/* @media screen and (max-width:450px) {
  grid-template-columns: 100% 0px ;
} */
`