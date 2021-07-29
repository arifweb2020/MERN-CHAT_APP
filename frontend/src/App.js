import React, { Children } from 'react';
import './App.css';
import {BrowserRouter as Router , Switch, Route, Redirect} from 'react-router-dom'
import Home from './pages/Home/Home';
import Nav from './components/Nav/Nav';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Authenticate from './pages/Authenticate/Authenticate';
import Activate from './pages/Activate/Activate';
import Rooms from './pages/Rooms/Rooms';

const isAuth = false;

const user = {

  activated:false
}



function App() {
  return (
    <Router>
      <Nav/>
      <Switch>
      <GuestRoute exact path="/"> 

<Home/>
</GuestRoute>
      {/* <Route exact path="/" component={Home}/> */}
      {/* <Route exact path="/authenticate" component={Authenticate}/> */}

      <GuestRoute path="/authenticate"> 

        <Authenticate/>
      </GuestRoute>

      <SemiProtectedRoute path="/activate">
          <Activate/>
        </SemiProtectedRoute>

        <ProtectedRoute path="/rooms">
          <Rooms/>
        </ProtectedRoute>

      {/* <Route exact path="/register" component={Register}/>
      <Route exact path="/login" component={Login}/> */}
        </Switch>

      </Router>
  );
}


const GuestRoute = ({children,...rest}) =>{

  return (
    <Route {...rest}
    render={({location})=>{
      return (isAuth ?
      <Redirect to={
          {
        pathname: '/rooms',
        state:{from : location}

          }

      } />
      :
      (
        children
      )
      )
    }}
    >


    </Route>
  )
}


const SemiProtectedRoute = ({children,...rest}) =>{

return(

  <Route {...rest}
  render={({location})=>{
    return !isAuth ?
        (
    <Redirect to={
        {
      pathname: '/',
      state:{from : location}

        }

    } />
    )
    :isAuth && !user.activated?

    (children) :
    <Redirect to={
      {
    pathname: '/rooms',
    state:{from : location}

      }

  } />
   
    
  }}
  >

    </Route>
)

}


const ProtectedRoute = ({children,...rest}) =>{

  return(
  
    <Route {...rest}
    render={({location})=>{
      return !isAuth ?
          (
      <Redirect to={
          {
        pathname: '/',
        state:{from : location}
  
          }
  
      } />
      )
      :isAuth && !user.activated?

      <Redirect to={
        {
      pathname: '/activate',
      state:{from : location}
  
        }
  
    } />
  
       : (children)
      
     
      
    }}
    >
  
      </Route>
  )
  
  }

export default App;
