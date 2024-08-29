import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UserProvider,useUser } from './lib/context/user'
import {IdeasProvider} from "../src/lib/context/ideas"
import { Login } from './pages/Login'
import { Home } from './pages/Home'

function App() {
  const isLoginPage = window.location.pathname === "/login";

  return (
   
   <div>
    <h1>Shiva,Initially to check</h1>
    <UserProvider>
      <IdeasProvider>
        <Navbar/>
        <main>{isLoginPage ? <Login />:<Home/>}</main>

      </IdeasProvider>
      
    </UserProvider>
   </div>
  )
}
function Navbar() {
  const user = useUser();

  return (
    <nav>
      <a href="/">Idea tracker</a>
      <div>
        {user.current ? (
          <>
            <span>{user.current.email}</span>
            <button type="button" onClick={() => user.logout()}>
              Logout
            </button>
          </>
        ) : (
          <a href="/login">Login</a>
        )}
      </div>
    </nav>
  );
}
export default App
