import React from 'react'
import './App.css'
import Menu from './Component/Menu.js'
import { Container } from 'react-bootstrap'
import { Switch, Route, Router, BrowserRouter, Redirect } from 'react-router-dom'

import Home from './Home/Home'
import Post from './Post/Post'
import About from './About/About'
import Contact from './ContactUs/ContactUs'
import Setting from './Setting/Setting'
import Login from './Auth/Login'

const theme = localStorage.getItem('theme');
const App = () => (
  <>
  <BrowserRouter basename="/">
  <div>
    <Menu />
    <div>
      <Container fluid="lg" className="content">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/post">
            <Post/>
          </Route>
          <Route path="/product">
            <About/>
          </Route>
          <Route path="/settings">
            <Setting/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
        </Switch>
        
      </Container>
    </div>
  </div>
  </BrowserRouter>
  </>
)

export default App
