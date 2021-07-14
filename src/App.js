import {BrowserRouter as Router,  Switch,  Route} from "react-router-dom";
import {useEffect, useState} from "react";
import styled from "styled-components";
import {getUser} from "./features/channel"
import './App.css';
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import { useDispatch } from "react-redux";
import { getTodoUser } from "./App/TodoReducer/todoReducer"

function App() {


  const [user,SetUser] = useState(JSON.parse(localStorage.getItem('myData')))
  const dispatch = useDispatch()
      dispatch(getUser(user))
  
   useEffect(()=> {
    dispatch(getTodoUser())
   },[dispatch])
  return (
    <div className="App">
       <Router> 
          {!user ? <Login  SetUser={SetUser} ></Login> : 
             <Container >
                      
                      <Main>
                         
                            <Switch>
                                <Route  path="/" component = {Home}></Route>      
                                   
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
height: 100vh;


`