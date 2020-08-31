import React, { useState, createContent, useReducer } from 'react'
import './App.css'
import Menu from './Component/Menu.js'
import { Container } from 'react-bootstrap'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Home from './Home/Home'
import Post from './Post/Post'
import About from './About/About'
import Setting from './Setting/Setting'
import Login from './Auth/Login'

import { ThemeProvider } from 'styled-components'
import {lightTheme, darkTheme} from './theme'
import { GlobalStyles } from './GlobalStyle'
import { useSelector } from 'react-redux'

export const App = () => {
  
  const theme = useSelector(state => state);
  const themeMode = theme === 'light' ? lightTheme : darkTheme ;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles/>
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
              <Route path="/about">
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
    </ThemeProvider>
  )
}
