import React from "react";
import Navigation from "./routes/navigation";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home";


const App = () => {
  const About = () => {
    return (
      <h1>About Page</h1>
    )
  }
    const Contact = () => {
      return (
        <h1>Contact Page</h1>
      )
    }
    const SignIn = () => {
      return(
        <h1>Sign In </h1>
      )
    }

  return (
    <Routes>
      <Route path="/" element = {<Navigation/>}>
        <Route path = 'Home' element = {<Home/>}/>
        <Route path = 'About'  element = {<About/>}/>
        <Route path = 'Contact'  element = {<Contact/>}/>
        <Route path = 'Sign-in'  element = {<SignIn/>}/>
      </Route>
    </Routes>
  )
}

export default App;
