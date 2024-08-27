import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { UserProvider } from "./lib/context/user";
import { IdeaProvider } from "./lib/context/ideas";

function App() {
  const isLoginPage = window.location.pathname === "/login";

  return (
    <div>
      <UserProvider>

        <IdeaProvider>
          <Navbar /> {/* Add the navbar before page content */}
          <main>{isLoginPage ? <Login /> : <Home />}</main>
        </IdeaProvider>
      </UserProvider>
     \
    </div>
  );
}

export default App;
