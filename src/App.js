import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Login from "./components/Login";
import SignUp from "./components/SignUp"
import HomePage from "./components/HomePage";
import { useState } from "react";
import { getFromLocalStorage } from "./utils/localStorage";
import UserContext from "./context/UserContext";

function App() {
  const [login, setLogin]= useState(getFromLocalStorage())
  console.log(login)

  return (
    <BrowserRouter>
      <UserContext.Provider value={{login,setLogin}}>
        <GlobalStyle />
        <Switch>
          <Route path="/" exact> 
              <Login />
          </Route>
          <Route path="/sign-up" exact> 
              <SignUp />
          </Route>
          <Route path="/home" exact> 
              <HomePage />
          </Route>
        </Switch>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
