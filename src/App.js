import React from 'react'
import './App.css'
import Menu from './Menu.js'
import { Switch, Route, Router, BrowserRouter } from 'react-router-dom'

import Home from './Component/Home'
import Post from './Component/Post'
import About from './Component/About'
import Product from './Component/Product'
import Contact from './Component/ContactUs'

const App = () => (
  <BrowserRouter>
  <div>
    <Menu />
    <div>
      <div className="container content">
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
          <Route path="/product">
            <Product/>
          </Route>
          <Route path="/contactus">
            <Contact/>
          </Route>
        </Switch>
      </div>
    </div>
  </div>
  </BrowserRouter>
)

export default App
