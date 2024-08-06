import { useState } from 'react'
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import './App.css'
import { UserProvider,useUser } from "./lib/context/user"
import { IdeasProvider } from './lib/context/ideas';


function App() {

  const isLoginPage = window.location.pathname === "/login";

  return (
    <div>
      <UserProvider>
        <IdeasProvider>
          <Navbar />
          <main>{isLoginPage ? <Login /> : <Home />}</main>

        </IdeasProvider>
        
      </UserProvider>
    </div>
  )
}

function Navbar() {
  const user =useUser();

  return (
    <nav>
      <a href="/">Idea Tracker</a>
      <div>
        {user.current ? (
          <>
            <span>{user.current.e}</span>
            <button type='button' onClick={() => user.logout()}>
              Logout
            </button>
          </>
        ):(
          <a href="/login">Login</a>
        )}
      </div>
    </nav>
  )
}

export default App
