import { useState } from 'react'
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import './App.css'
import { UserProvider } from "./lib/context/user"

function App() {

  const isLoginPage = window.location.pathname === "/login";

  return (
    <div>
      <UserProvider>
         <main>{isLoginPage ? <Login /> : <Home />}</main>
      </UserProvider>
    </div>
  )
}

export default App
